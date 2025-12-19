import { icons } from "../../icons/Icons";

type MusicProps = {
    musicCurrentView: "favorite" | "remindsMeOfYou"
    setMusicCurrentView: (v: MusicProps["musicCurrentView"]) => void
}

export const MusicNav = ({ musicCurrentView, setMusicCurrentView }: MusicProps) => {

    const MusicLinks = ({
        view,
        label,
        icon
    }: {
        view: MusicProps["musicCurrentView"];
        label: string | React.ReactNode;
        icon: React.ReactNode
    }) => (
        <button
            onClick={() => setMusicCurrentView(view)}
            className={`px-4 py-2 rounded cursor-pointer ${musicCurrentView === view
                ? "text-red-500/85 shadow-inner bg-amber-200/30 shadow-amber-700/50"
                : "hover:text-red-600 text-red-800/70 shadow-sm shadow-amber-700/50"
                } flex items-center cursor-pointer
                 active:text-red-600/85 font-['Great+Vibes'] text-lg `}
        >
            {icon}
            {label}
        </button>
    );
    return (
        <div className="md:flex justify-center border-2 border-red-500/60 rounded-2xl p-3 bg-amber-100/90 mb-2 md:mb-4 shadow-sm shadow-red-700/70">
            <nav className="flex items-center justify-center">
                <ul className="flex space-y-2 items-start justify-center gap-2 md:gap-4 w-full text-lg md:text-2xl rounded-lg font-['Great+Vibes'] text-red-600/70 md:text-red-200 ">
                    <li><MusicLinks view="favorite" label="Favorites" icon={icons.heartIcon} /></li>
                    <li><MusicLinks view="remindsMeOfYou" label={icons.heartIcon} icon={icons.sccotchi} /></li>
                </ul>
            </nav>
        </div>


    )

}