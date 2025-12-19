import { useState } from "react";
import { OpeningLetter } from "./OpeningLetter";
import { icons } from "../../icons/Icons";

export const Letter = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex justify-center flex-col items-center w-64">

            <button
                onClick={() => setOpen(!open)}
                className={`flex items-center justify-center px-6 py-2 hover:-translate-y-0.5 transition-all border-2 border-red-200/50 border-dashed  cursor-pointer  
                    ${open ? "bg-red-600/50 text-white shadow-inner shadow-red-950 " : "bg-red-600/70 text-red-100 shadow-md shadow-red-800/50"}   rounded`}
            > {icons.letterIcon}

                {open ? "Close Letter" : "Open Letter"}

            </button>


            <div
                className={`
          overflow-hidden transition-all duration-500
          ${open ? "max-h-125" : "max-h-1"}
        `}
            >
                {/* Pass down "open" as the active prop */}
                <OpeningLetter active={open} />
            </div>
        </div>
    );
};