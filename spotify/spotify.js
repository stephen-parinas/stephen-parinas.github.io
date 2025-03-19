import {formatDistanceToNow} from "date-fns";

const getAccessToken = async () => {
    const url = "https://accounts.spotify.com/api/token";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Basic ${import.meta.env.VITE_SPOTIFY_AUTH_STRING}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                "grant_type": "refresh_token",
                "refresh_token": import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN
            })
        });

        if (!response.ok) {
            handleError(response);
        }

        return await response.json();
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

const handler = async (url) => {
    try {
        const { access_token } = await getAccessToken();

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        if (!response.ok) {
            handleError(response);
        }

        return response;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

const getCurrentTrack = async () => {
    const url = "https://api.spotify.com/v1/me/player/currently-playing";
    return handler(url);
}

const getLastPlayedTrack = async () => {
    const url = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
    return handler(url);
}

export default async function getTrackData() {
    const lastPlayedResponse = await getLastPlayedTrack();

    try {
        if (lastPlayedResponse.status === 204 || lastPlayedResponse.status >= 400) {
            handleError(lastPlayedResponse);
        }

        let track = await lastPlayedResponse.json();

        if (!track.items[0]) {
            throw new Error("Error: Could not get Spotify activity.");
        }

        let item = track.items[0].track;
        let playedAt = formatDistanceToNow(new Date(track.items[0].played_at), { addSuffix: true });

        const currentResponse = await getCurrentTrack();

        if (currentResponse.status !== 204 && currentResponse.status < 400) {
            track = await currentResponse.json();

            if (track.is_playing && track.currently_playing_type === "track") {
                item = track.item;
                playedAt = null;
            }
        }

        const artist = item.artists.map((artist) => artist.name).join(", ");
        const title = item.name;
        const trackId = item.id;
        const trackUrl = item.external_urls.spotify;
        const albumImageUrl = item.album.images[0].url;

        return {
            artist,
            title,
            trackId,
            trackUrl,
            albumImageUrl,
            playedAt
        };
    } catch (err) {
        console.error(err.message);
    }
}

function handleError(response) {
    if (response.status === 401) {
        throw new Error("Unauthorized: Access token expired or invalid");
    } else if (response.status === 403) {
        throw new Error("Forbidden: Insufficient scope");
    } else if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After');
        throw new Error(`Rate limited: Retry after ${retryAfter} seconds`);
    } else {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
}