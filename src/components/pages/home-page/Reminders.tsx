import { useState } from "react";
import { icons } from "../../icons/Icons";

export const Reminders = () => {
    const reminders: React.ReactNode[] = [
        "No matter what happens, I’m always here for you.",
        "Small steps every day lead to big results.",
        <span className="flex items-center justify-center" key="mudka">
            {icons.mudka} Hi I'm Mudka {icons.sccotchi} and I'm Skutsi
        </span>,
        "Stay positive, work hard, and make it happen.",
        "Even on tough days, you’re still my favorite",
        "Don’t stop until you’re proud.",
        "You don’t have to be perfect you’re already enough.",
        "Take it one step at a time, I’ll walk with you.",
        "You’re safe with me, always.",
        "I love you just as you are, no need to change.",
        "Whatever comes, we’ll face it together.",
        "You’re the calm in my chaos.",
        "You make ordinary days extraordinary.",
        "The world feels lighter with you in it.",
        "You’re my favorite reason to smile.",
        "You’re my safe place and my adventure.",
        "Every day with you is a gift."
    ];

    const [reminder, setReminder] = useState<React.ReactNode>(""); // ✅ accepts string or JSX
    const [remainingReminders, setRemainingReminders] = useState<React.ReactNode[]>([...reminders]);

    const generateNote = () => {
        let pool = remainingReminders;

        if (pool.length === 0) {
            pool = [...reminders]; // reset locally
        }

        const randomIndex = Math.floor(Math.random() * pool.length);
        const newNote = pool[randomIndex];
        setReminder(newNote);

        const updatedReminders = pool.filter((_, i) => i !== randomIndex);
        setRemainingReminders(updatedReminders);
    };

    return (
        <div className="flex flex-col max-w-md md:max-w-lg bg-pink-100/85 border-4 border-dashed rounded-xl border-red-500/15 p-4 font-['Great+Vibes'] text-lg text-red-500/90 text-center">
            <h1 className="text-xl font-bold mb-4 font-['Great+Vibes'] flex text-red-600/70 items-center">
                {icons.reminder}  Reminder For You Baby
            </h1>
            <button
                onClick={generateNote}
                className="bg-red-600/60 active:bg-pink-600 text-white px-4 py-2 rounded font-['Great+Vibes'] shadow-md shadow-red-800/80 hover:bg-pink-600 hover:-translate-y-0.5 active:translate-y-0.5 transition-all font-bold cursor-pointer"
            >
                CLICK ME
            </button>
            {reminder && (
                <div className="mt-4 p-4 border border-amber-600/50 rounded bg-pink-200/70 text-lg font-semibold font-['Great+Vibes'] text-pink-700/60">
                    {reminder}
                </div>
            )}
        </div>
    );
};