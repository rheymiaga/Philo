
interface WordStackProps {
    word: string;
    icon?: React.ReactNode;
    className?: string;
}

export const WordStack: React.FC<WordStackProps> = ({ word, icon, className }) => {
    return (
        <span
            className={`flex items-center justify-center flex-col font-bold text-red-500/90 md:gap-1 md:flex md:flex-row ${className ?? ""}`}
        >
            {icon}
            {word.split("").map((letter, i) => (
                <span key={i}>{letter}</span>
            ))}
        </span>
    );
};