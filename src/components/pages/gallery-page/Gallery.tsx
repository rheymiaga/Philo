import React, { useState, useEffect } from "react";

interface CardItems {
    img: string;
    alt: string;
    text?: string;
}

interface CarouselProps {
    items: CardItems[];
    interval?: number; // ms between slides
}

export const Gallery: React.FC<CarouselProps> = ({ items, interval = 2000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [items.length, interval]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Inner track */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full shrink-0 flex justify-center p-2"
                    >
                        <div className="w-80 md:w-2xl lg:w-3xl rounded-lg shadow-md overflow-hidden bg-pink-400/50 drop-shadow-lg shadow-red-600/50">
                            <img
                                src={item.img}
                                alt={item.alt}
                                className="w-full h-48 sm:h-64 md:h-96 lg:h-96 object-cover"
                            />
                            <p className="text-center text-red-500/85 bg-amber-100/85 p-2 font-['Great+Vibes']">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};