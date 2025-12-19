import { Navbar } from "./Navbar"
import { icons } from "./icons/Icons";

export type HeaderProps = {
    currentView: "home" | "gallery" | "music";
    setCurrentView: (view: HeaderProps["currentView"]) => void;
};

export const Header = ({ currentView, setCurrentView }: HeaderProps) => {
    return (
        <div className="block sm:flex items-center sm:px-8 sm:justify-between bg-linear-to-b from-pink-100 via-pink-200 to-red-300 shadow-lg shadow-red-400/70 opacity-85 py-4 overflow-hidden">
            <h1 className="flex items-center text-xl md:text-2xl text-red-600/60 font-bold font-['Great+Vibes'] gap-2 justify-self-center md:justify-self-start">
                {icons.mudka} Philo and Louie {icons.sccotchi}</h1>
            <div className="flex items-center justify-self-center md:justify-self-end ">
                <Navbar currentView={currentView} setCurrentView={setCurrentView} />
            </div>  
        </div>




    );
};