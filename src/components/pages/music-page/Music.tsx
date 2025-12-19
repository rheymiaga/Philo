import MusicCard from "./MusicCard";
import React, { useRef } from "react";
import { icons } from "../../icons/Icons";

import { MusicItems } from "./MusicItems";

export const Music: React.FC = () => {
    const currentAudio = useRef<HTMLAudioElement | null>(null);


    const handlePlay = (audio: HTMLAudioElement) => {
        if (currentAudio.current && currentAudio.current !== audio) {
            currentAudio.current.pause();
            currentAudio.current.currentTime = 0;
        }
        currentAudio.current = audio;
    };
    return (
        <div className="space-y-2">
            <h1 className="flex text-red-900/70 md:text-red-500 font-bold font-['Great+Vibes'] text-xl">{icons.heartIcon}Your Favorite Songs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

                {MusicItems.map((item) => (
                    <MusicCard
                        key={item.id}
                        img={item.img}
                        alt={item.alt}
                        title={item.title}
                        musicSrc={item.musicSrc}
                        onPlay={handlePlay}
                    />
                ))}
            </div>
        </div>
    )
}