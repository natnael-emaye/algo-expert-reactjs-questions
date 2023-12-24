import { useState } from "react";

const COLOR = ["green", "yellow", "sky", "orange", "indigo"];

export default function Memory() {
    const [boards, setBoard] = useState(() => shuffle([...COLOR, ...COLOR]));
    const [correctMatch, setCorrectMatch] = useState();
    const [selectedBoard, setSelectedBoard] = useState();

    const handleClick = (board, index) => {
        const isExist =
            correctMatch?.length &&
            correctMatch?.find((match) => match?.index == index);
        if (isExist) return;
        const isCorrectMach = selectedBoard?.board == board;
        if (isCorrectMach) {
            correctMatch?.length >= 2
                ? setCorrectMatch([
                      ...correctMatch,
                      selectedBoard,
                      { board, index },
                  ])
                : setCorrectMatch([selectedBoard, { board, index }]);
        }
        setSelectedBoard({ board, index });
    };

    const resetGame = () => {
        setBoard(shuffle([...COLOR, ...COLOR]));
        setSelectedBoard({});
        setCorrectMatch({});
    };

    const didPlayerWin = correctMatch?.length == boards?.length;

    return (
        <div className="w-full ">
            <h2 className="text-4xl text-center text-indigo-800 font-bold mb-6">
                Memory Game
                {didPlayerWin && (
                    <span className="ml-10 text-4xl text-center text-green-400 font-bold">
                        You Win!
                    </span>
                )}
            </h2>
            <div className="grid grid-cols-2 gap-4 w-full">
                {boards.map((board, index) => {
                    const isCorrectMach =
                        correctMatch?.length >= 2
                            ? correctMatch?.find(
                                  (match) => match?.index == index
                              )
                            : null;
                    const background =
                        selectedBoard?.index === index || isCorrectMach
                            ? `bg-${board}-500`
                            : "bg-slate-200";
                    return (
                        <div
                            onClick={() => handleClick(board, index)}
                            key={index}
                            className={`cursor-pointer w-full  h-10 ${background} border rounded-md shadow-sm `}
                        ></div>
                    );
                })}
            </div>
            <div className="flex justify-end mt-20">
                {didPlayerWin && (
                    <button
                        onClick={() => resetGame()}
                        className=" text-sm shadow-sm text-white px-5 py-1 bg-lime-500 font-bold rounded-lg"
                    >
                        Reset
                    </button>
                )}
            </div>
        </div>
    );
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}
