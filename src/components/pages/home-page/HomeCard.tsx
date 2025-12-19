import { icons } from "../../icons/Icons";

type HomeCardProps = {
    homeCurrentView: "letter" | "note" |"tool";
    setHomeCurrentView: (v: HomeCardProps["homeCurrentView"]) => void
}

export const HomeCard = ({ homeCurrentView, setHomeCurrentView }: HomeCardProps) => {

    const HomeLinks = ({
        view,
        label,
        icon
    }: {
        view: HomeCardProps["homeCurrentView"];
        label: string;
        icon: React.ReactNode;
    }) => (
        <button
            onClick={() => setHomeCurrentView(view)}
            className={`px-4 py-2 rounded cursor-pointer ${homeCurrentView === view
                ? "bg-red-400 opacity-90 text-white"
                : "hover:text-orange-200 hover:bg-red-500"
                } flex items-center`}
        >
            {icon}
            {label}
        </button>
    );
    return (
        <nav className="flex items-center ">
            <ul className="flex items-center justify-center space-x-1 text-lg backdrop-blur-2xl rounded-lg font-['Great+Vibes'] text-red-600/70 md:text-red-200 ">
                <li><HomeLinks view="letter" label="Letter" icon={icons.letterIcon} /></li>
                <li><HomeLinks view="note" label="Notes" icon={icons.note} /></li>
                <li><HomeLinks view="tool" label="Tools" icon={icons.toolIcon} /></li>
            </ul>
        </nav>


    )
}