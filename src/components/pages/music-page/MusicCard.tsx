import React, { useRef, useState } from "react";
import { icons } from "../../icons/Icons";

interface MusicCardProps {
    img: string;
    alt: string;
    title: string
    musicSrc?: string;
    onPlay: (audio: HTMLAudioElement) => void;
}

const MusicCard: React.FC<MusicCardProps> = ({ img, alt, title, musicSrc, onPlay }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const handlePlayPause = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            onPlay(audioRef.current); // stop other players
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const percent =
                (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(percent || 0);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const newTime =
                (parseFloat(e.target.value) / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
        }
    };

    return (
        <div className="w-full h-full rounded-lg shadow-md overflow-hidden bg-pink-400/50 drop-shadow-lg shadow-red-600/50 hover:-translate-y-2 transition-transform">
            {/* Image */}
            <img src={img} alt={alt} className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-t-md" />

            {/* Custom Audio Player */}
            {musicSrc && (
                <div className="bg-white/70 rounded-b-md p-3">
                    <audio
                        ref={audioRef}
                        src={musicSrc}
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={() => setIsPlaying(false)}
                        className="hidden" // hide native controls
                    />
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handlePlayPause}
                                className={`p-2 rounded bg-pink-500 text-white font-medium cursor-pointer flex items-center gap-2 ${isPlaying ? 'shadow-inner shadow-pink-950 bg-pink-600' : 'shadow-md shadow-pink-950/70'} `}
                            >
                                {isPlaying ? (
                                    <>
                                        Pause {icons.mudka}
                                    </>
                                ) : (
                                    <>
                                        Play {icons.sccotchi}
                                    </>
                                )}
                            </button>
                            <div className="flex items-center mb-2 font-['Great+Vibes']">
                                <span className={`${isPlaying ? "text-red-500" : "text-red-800/70"}`}>
                                    {icons.heartIcon}
                                </span>
                                <p className={`font-bold ${isPlaying ? "text-red-500" : "text-red-800/50"}`}>
                                    {title}
                                </p>
                            </div>

                        </div>

                        {/* Controls */}
                        <div className="flex items-center">
                            {/* Progress Bar */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={progress}
                                onChange={handleSeek}
                                className="flex-1 bg-linear-to-r accent-pink-500 cursor-pointer "
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MusicCard;