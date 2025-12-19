import { HomeCard } from "./HomeCard";

type HomeProps = {
    homeCurrentView: "letter" | "note" | "tool";
    setHomeCurrentView: (view: "letter" | "note" | "tool") => void;
};

export const Home = ({ homeCurrentView, setHomeCurrentView }: HomeProps) => {
    return (
        <>
            <HomeCard homeCurrentView={homeCurrentView} setHomeCurrentView={setHomeCurrentView} />

        </>

    );
};