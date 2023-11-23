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
    const [selectedIndex, setSelector] = useState(-1);

    const quiz = QUIZ_Data[quizIndex];

    return (
        <div>
            <h1 className="text-3xl font-bold text-slate-950 mb-10 ">{quiz.question}</h1>
            {quiz.answers.map((answer, index) => (
                <h3
                    key={index}
                    className={`flex items-center text-2xl text-bold p-3 cursor-pointer   shadow-sm rounded-md m-2`}
                >
                    <div className="mr-4 w-6 h-6 p-[3px] border border-black rounded-full  ">
                        {selectedIndex === index && (
                            <div className="bg-slate-900 w-full h-full rounded-full"></div>
                        )}
                    </div>
                    {answer}
                </h3>
            ))}
            <div className="flex items-center justify-between mt-7">
                {
                    <>
                        <button
                            onClick={() => {
                                setQuizIndex(quizIndex - 1);
                                setSelector(-1);
                            }}
                            disabled={quizIndex == 0}
                            className="disabled:bg-slate-300 px-6 py-2 rounded-md bg-slate-800 text-white text-xl"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => {
                                setQuizIndex(quizIndex + 1);
                                setSelector(-1);
                            }}
                            disabled={quizIndex == QUIZ_Data.length - 1}
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
