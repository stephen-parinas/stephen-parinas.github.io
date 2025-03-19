import {useEffect, useState} from "react";
import getTrackData from "../../spotify/spotify.js";

export default function SpotifyWidget() {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);

    useEffect(() => {
        getTrackData().then((result) => {
            setResult(result);
            setLoading(false);
        });

        const interval = setInterval(() => {
            getTrackData().then((result) => {
                setResult(result);
                setLoading(false);
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex gap-4 w-full items-center">
            <a href={result?.trackUrl} target="_blank">
                <img src={result?.albumImageUrl ?? "assets/no-album-art.png"} alt="spotify" className="h-14 rounded-md"></img>
            </a>

            {loading && (
                <p className="text-xs text-left">Loading...</p>
            )}

            {!loading && !result && (
                <p className="text-xs text-left">Could not get activity.</p>
            )}

            {!loading && result && (
                <div className="text-left">
                    <p className="text-xs font-semibold">{result.title ?? "Track Name"}</p>
                    <p className="text-xs">{result.artist ?? "Artist"}</p>

                    {!result.playedAt && (
                        <p className="text-xs italic text-gray-500 mt-1">Now playing</p>
                    )}

                    {result.playedAt && (
                        <p className="text-xs italic text-gray-500 mt-1">{result.playedAt}</p>
                    )}
                </div>
            )}
        </div>
    )
}