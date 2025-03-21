import {useEffect, useState} from "react";
import getTrackData from "../../spotify/spotify.js";
import {textDescription1, textDescription2, textOverflow} from "./common.js";

export default function SpotifyWidget() {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);

    useEffect(() => {
        getTrackData().then((result) => {
            setResult(result);
            setLoading(false);
        });

        // Get the user's current or last played track every 5 seconds.
        const interval = setInterval(() => {
            getTrackData().then((result) => {
                setResult(result);
                setLoading(false);
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-[64px_1fr] gap-4 w-full">
            <a href={result?.trackUrl} target="_blank" className="inline-block">
                <img src={result?.albumImageUrl ?? "assets/no-album-art.png"} alt="spotify" className="shadow-lg rounded-md"></img>
            </a>

            {loading && (
                <p className={textDescription1 + "text-left"}>Loading...</p>
            )}

            {!loading && !result && (
                <p className={textDescription1 + "text-left"}>Could not get activity.</p>
            )}

            {!loading && result && (
                <div className="text-left overflow-hidden whitespace-nowrap">
                    <p className={textOverflow + "font-semibold"} title={result.title ?? "Track Name"}>{result.title ?? "Track Name"}</p>
                    <p className={textOverflow} title={result.artist ?? "Artist"}>{result.artist ?? "Artist"}</p>

                    {!result.playedAt && (
                        <p className={textDescription2}>Now playing</p>
                    )}

                    {result.playedAt && (
                        <p className={textDescription2}>{result.playedAt}</p>
                    )}
                </div>
            )}
        </div>
    )
}

