import React from "react";

interface OpeningLetterProps {
    active: boolean;
}

export const OpeningLetter: React.FC<OpeningLetterProps> = ({ active }) => {
    const message = `
Hi baby, Merry Christmas!  
Thank you for always being by my side. You’re the one I can count on, and you’re always there when I need you.  
Please remember that I love you so much, and I’ll never stop loving you.  
Iloveyouuu baby. ❤️
`;
    return (
        <div className="inline-block px-4 py-2">
            {message.split("").map((char, i) => (
                <span
                    key={i}
                    style={{
                        transitionDelay: `${i * 50}ms`, // stagger each character
                        transitionDuration: active ? "300ms" : "100ms", // close slightly faster
                    }}
                    className={`
            text-lg md:text-xl font-['Great+Vibes'] text-red-600/80
            opacity-0 translate-y-2
            transition-all
            ${active ? "opacity-100 translate-y-0" : ""}
            inline-block
          `}
                >
                    {char === " " ? "\u00A0" : char} {/* keep spaces visible */}
                </span>
            ))}
        </div>
    );
};