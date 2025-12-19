
type NavbarProps = {

    currentView: "home" | "gallery" | "music";
    setCurrentView: (v: NavbarProps["currentView"]) => void;

};

export const Navbar = ({ currentView, setCurrentView }: NavbarProps) => {


    const Link = ({
        view,
        label,
        icon
    }: {

        view: NavbarProps["currentView"];
        label: string;
        icon: React.ReactNode;
    }) => (
        <button
            onClick={() => {
                setCurrentView(view);
            }}
            className={`px-4 py-2 rounded cursor-pointer ${currentView === view
                ? "bg-red-400 opacity-90 text-white"
                : "hover:text-orange-200 hover:bg-red-500"
                } flex items-center`}
        >
            {icon}
            {label}
        </button>
    );
    const icons = {
        home: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 10.5l9-7.5 9 7.5" />
            <path d="M5.5 10v8.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V10" />
            <path d="M10.7 14.2c.9-1 2.7-1 3.6 0 .5.6.7 1.3.7 2s-.3 1.5-.9 2.1l-1.6 1.6a1.3 1.3 0 0 1-1.8 0l-1.6-1.6c-.6-.6-.9-1.4-.9-2.1s.2-1.4.7-2z" />
        </svg>),

        gallery: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="8" cy="9" r="1.8" />
            <path d="M4.5 18l5.2-4.2a2 2 0 0 1 2.6 0l3.2 2.6a2 2 0 0 0 2.6 0L19.5 15" />
            <path d="M12.4 10.5c.7-.8 2-.8 2.7 0 .4.5.6 1.1.6 1.7s-.2 1.3-.7 1.8l-1.2 1.2a1 1 0 0 1-1.4 0l-1.2-1.2c-.5-.5-.7-1.2-.7-1.8s.2-1.2.6-1.7z" />
        </svg>
        ),
        music: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 4v8.5a3.5 3.5 0 1 1-1.5-2.9V6.5l6-1.5v7.5a3.5 3.5 0 1 1-1.5-2.9V4.8" />
            <path d="M7.3 12.8c.9-1 2.7-1 3.6 0 .5.6.7 1.3.7 2s-.3 1.5-.9 2.1L9 18.5a1.3 1.3 0 0 1-1.8 0l-1.6-1.6c-.6-.6-.9-1.4-.9-2.1s.2-1.4.7-2z" />
        </svg>
        ),
    };
    return (
        <nav className="flex items-center pb-2 ">
            <ul className="flex items-center justify-center space-x-2 text-sm md:text-lg lg:text-xl backdrop-blur-2xl rounded-lg font-['Great+Vibes'] text-red-500">
                <li><Link view="home" label="Home" icon={icons.home} /></li>
                <li><Link view="gallery" label="Gallery" icon={icons.gallery} /></li>
                <li><Link view="music" label="Music" icon={icons.music} /></li>
            </ul>
        </nav>
    )







}
