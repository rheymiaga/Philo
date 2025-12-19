interface GalleryAllitems {
    img: string
    alt: string
}

interface GalleryAllProps {
    items: GalleryAllitems[]
}

export const GalleryAll: React.FC<GalleryAllProps> = ({ items }: GalleryAllProps) => {


    return (

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 w-max shrink-0 p-2 ">
            {items.map((item) => (
                <div
                    key={item.alt}
                    className="flex items-center justify-center w-max h-max rounded-lg shadow-md overflow-hidden bg-pink-400/50 drop-shadow-lg shadow-red-600/50 hover:-translate-y-2 active:-translate-y-2 transition-all"
                >
                    <img
                        src={item.img}
                        alt={item.alt}
                        className="w-34 h-max  md:w-56 lg:w-62 xl:w-72 object-cover rounded-md"
                    />
                </div>
            ))}
        </div>

    )
}