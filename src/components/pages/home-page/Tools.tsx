import { icons } from "../../icons/Icons";

type ToolsCardProps = {
    toolCurrentView: "business" | "calculator";
    setToolCurrentView: (v: ToolsCardProps["toolCurrentView"]) => void
}

export const Tools = ({ toolCurrentView, setToolCurrentView }: ToolsCardProps) => {

    const HomeLinks = ({
        view,
        label,
        icon
    }: {
        view: ToolsCardProps["toolCurrentView"];
        label: string;
        icon: React.ReactNode;
    }) => (
        <button
            onClick={() => setToolCurrentView(view)}
            className={`px-4 py-2 rounded cursor-pointer ${toolCurrentView === view
                ? "text-red-500/85 shadow-inner bg-amber-200/30 shadow-amber-700/50"
                : "hover:text-red-600 text-red-800/70 md:text-red-600/70 shadow-sm shadow-amber-700/50"
                } flex items-center cursor-pointer
                 active:text-red-600/85 font-['Great+Vibes'] text-lg `}
        >
            {icon}
            {label}
        </button>
    );
    return (
        <nav className="flex items-center ">
            <ul className="flex items-center justify-center space-x-1 text-lg backdrop-blur-2xl rounded-lg font-['Great+Vibes'] text-red-600/70 md:text-red-200 ">
                <li><HomeLinks view="business" label="Business" icon={icons.busIcon} /></li>
                <li><HomeLinks view="calculator" label="Calculator" icon={icons.calcuIcon} /></li>
            </ul>
        </nav>


    )
}