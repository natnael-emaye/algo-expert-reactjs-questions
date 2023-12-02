import { useState } from "react";

const QUIZ_Data = [
    {
        question:
            "question number 1 Which one of the following is built-in React Hook?",
        answers: ["useState", "usefetch", "useTimeout", "useLocalStorage"],
        correctAnswer: 0,
    },
    {
        question:
            "question number 2 Which one of the following is built-in React Hook?",
        answers: ["useState", "usefetch", "useTimeout", "useLocalStorage"],
        correctAnswer: 1,
    },
    {
        question:
            "Last question Which one of the following is built-in React Hook?",
        answers: ["useState", "usefetch", "useTimeout", "useLocalStorage"],
        correctAnswer: 2,
    },
];

export default function Quiz() {
    const [quizIndex, setQuizIndex] = useState(0);
    const [chooseAnswers, setChooseAnswers] = useState([]);

    const quiz = QUIZ_Data[quizIndex];

    function updateChosenAnswer(quizIndex, answerIndex) {
        const newChooseAnswers = [...chooseAnswers];
        newChooseAnswers[quizIndex] = answerIndex;
        setChooseAnswers(newChooseAnswers);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-slate-950 mb-10 ">
                {quiz.question}
            </h1>
            {quiz.answers.map((answer, index) => {
                const chosenAnswer = chooseAnswers[quizIndex];
                let styleSelectedItem = "";
                if (chosenAnswer == index) {
                    styleSelectedItem =
                        chosenAnswer == quiz.correctAnswer
                            ? "bg-green-400 shadow-md"
                            : "bg-rose-400 shadow-md";
                }

                return (
                    <h3
                        key={index}
                        onClick={() => {
                            if (chosenAnswer != null) return;
                            updateChosenAnswer(quizIndex, index);
                        }}
                        className={
                            "flex items-center text-2xl text-bold p-3 cursor-pointer shadow-sm rounded-md m-2 " +
                            styleSelectedItem
                        }
                    >
                        <div className="mr-4 w-6 h-6 p-[3px] border border-black rounded-full  ">
                            {chosenAnswer == index && (
                                <div className="bg-slate-900 w-full h-full rounded-full"></div>
                            )}
                        </div>
                        {answer}
                    </h3>
                );
            })}
            <div className="flex items-center justify-between mt-7">
                {
                    <>
                        <button
                            onClick={() => setQuizIndex(quizIndex - 1)}
                            disabled={quizIndex == 0}
                            className="disabled:bg-slate-300 px-6 py-2 rounded-md bg-slate-800 text-white text-xl"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => setQuizIndex(quizIndex + 1)}
                            disabled={
                                quizIndex == QUIZ_Data.length - 1 ||
                                chooseAnswers[quizIndex]==null
                            }
                            className="disabled:bg-slate-300 px-6 py-2 rounded-md bg-slate-800 text-white text-xl"
                        >
                            Next
                        </button>
                    </>
                }
            </div>
        </div>
    );
}
