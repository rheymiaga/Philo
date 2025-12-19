import { icons } from "../../icons/Icons";


type GalleryProps = {
    galleryCurrentView: "carousel" | "viewAll";
    setGalleryCurrentView: (v: GalleryProps["galleryCurrentView"]) => void
}

export const GalleryCard = ({ galleryCurrentView, setGalleryCurrentView }: GalleryProps) => {

    const GalleryLinks = ({
        view,
        label,
        icon
    }: {
        view: GalleryProps["galleryCurrentView"];
        label: string;
        icon: React.ReactNode;
    }) => (
        <button
            onClick={() => setGalleryCurrentView(view)}
            className={`px-4 py-2 rounded cursor-pointer ${galleryCurrentView === view
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
        <div className="md:flex md:justify-evenly border-2 border-red-500/60 rounded-2xl p-2 bg-amber-100/90 mb-1 shadow-sm shadow-red-700/70">
            <div className="flex mx-4 items-center justify-center gap-2 md:gap-4">
                <h2 className="font-['Great+Vibes'] font-bold text-4xl md:text-5xl  text-red-500">US &</h2>
                <img className="w-32 h-24" src="./images/skutsmudka.png" alt="2 dogs picture" />
            </div>

            <nav className="flex items-center">
                <ul className="flex items-center justify-evenly md:gap-4 w-full text-lg md:text-2xl rounded-lg font-['Great+Vibes'] text-red-600/70 md:text-red-200 ">
                    <li><GalleryLinks view="carousel" label="Carousel" icon={icons.carouselIcon} /></li>
                    <li><GalleryLinks view="viewAll" label="ViewAll" icon={icons.viewIcon} /></li>
                </ul>
            </nav>
        </div>


    )
}