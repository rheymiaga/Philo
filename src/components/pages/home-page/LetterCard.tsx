
import { Letter } from "./Letter";
import { WordStack } from "../../../utils/WordStack";
import { icons } from "../../icons/Icons";

export const LetterCard = () => {


    return (
        <div>
            <div className="flex items-center w-full justify-center bg-pink-100/85 p-4 shadow-xl shadow-red-600/60 border-4 border-dashed rounded-xl border-red-500/15">
                <WordStack word="Skuts" icon={icons.sccotchi} />
                <Letter />
                <WordStack word="Mudka" icon={icons.mudka} />
            </div>
        </div>
    );
};
