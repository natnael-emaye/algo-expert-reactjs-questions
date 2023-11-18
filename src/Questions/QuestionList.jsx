/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { questions, submissions } from "../data/QuestionList";

export default function QuestionList() {
    return (
        <div className="w-full h-full flex flex-wrap gap-3 justify-center">
            <Category category="HTML" />
            <Category category="CSS" />
            <Category category="Javascript" />
        </div>
    );
}

function Category({ category }) {
    return (
        <div className="flex flex-col flex-1  ">
            <h2 className="text-xl font-bold text-slate-950 mb-5">{category}</h2>
            <div className="flex flex-col">
                <Question question="Ping Emoji" />
                <Question question="Ping Emoji" />
            </div>
        </div>
    );
}

function Question({ question }) {
    return (
        <div className="cursor-pointer my-2 hover:animate-pulse bg-white px-2 border-r-[23px] shadow-md border-emerald-700 rounded-md ">
            <h2 className="text-emerald-600 text-lg font-bold py-2">
                {question}
            </h2>
        </div>
    );
}
