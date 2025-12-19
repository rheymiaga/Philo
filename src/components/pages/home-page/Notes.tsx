interface NotesLists {
    text: string
    from: string
    date: string
}
interface NotesProps {
    items: NotesLists[]
}

export const Notes: React.FC<NotesProps> = ({ items }: NotesProps) => {

    return (
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full">
            {items.map((item) => (

                <div className="p-6 max-w-md mx-auto font-['Great+Vibes'] bg-red-300/60 shadow-lg shadow-red-500/70 border-4 border-dashed rounded-xl  border-red-500/15 text-center">
                    <p className="text-pink-50 text-center text-lg md:text-xl mb-4">
                        {item.text}
                    </p>
                    <div className="flex justify-between px-2 py-1 items-center">
                        <span className="text-lg md:text-xl text-red-600/70 font-bold ">
                            {item.from}
                        </span>
                        <span className="text-sm md:text-lg text-red-500/60">
                            {item.date}
                        </span>
                    </div>
                </div>
            ))}

        </div >

    )
}