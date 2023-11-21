/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { questions, submissions } from "../data/QuestionList";

export default function QuestionList() {
    const category = new Set([]);
    questions.forEach((value) => {
        return category.add(value.Category);
    });

    const questionByCategories = getQuestionByCategories(questions);
    const submissionByQuestion = getSubmissionByQuestion(submissions);
    return (
        <div className="w-full h-full flex flex-wrap gap-3 justify-center">
            {Array.from(category).map((categoryItem, index) => {
                const { questionsByCategory, completedQuestion } =
                    filterQuestionByCategory(categoryItem);
                return (
                    <Category
                        key={index}
                        completedQuestion={completedQuestion}
                        questions={questionsByCategory}
                        category={categoryItem}
                    />
                );
            })}
        </div>
    );
}

function Category({ category, questions,completedQuestion }) {

    return (
        <div className="flex flex-col flex-1  ">
            <h2 className="text-xl font-bold text-slate-950 mb-5">
                {category} - {completedQuestion}/{questions.length}
            </h2>
            <div className="flex flex-col">
                {questions.map((question) => {
                    let status = submissions.find(
                        (submission) => submission.id === question.id
                    );
                    return (
                        <Question
                            key={question.id}
                            status={status.status}
                            question={question.name}
                        />
                    );
                })}
            </div>
        </div>
    );
}

function Question({ question, status }) {
    const isChecked = status === "CORRECT" ? "bg-green-500" : "bg-red-500";
    return (
        <div className="flex items-center cursor-pointer my-2 hover:animate-pulse bg-white px-2 border-r-[23px] shadow-md border-emerald-700 rounded-md ">
            <span className={"mx-1 w-6 h-6  rounded-full " + isChecked}></span>
            <h2 className="text-emerald-600 text-lg font-bold py-2">
                {question}
            </h2>
        </div>
    );
}

function filterQuestionByCategory(categoryItem) {
    let completedQuestion = 0;
    const questionsByCategory = questions.filter((item) => {
        if (item.Category == categoryItem) {
            const findSubmissionByID = submissions.find(
                (subitem) => subitem.id == item.id
            );
            if (findSubmissionByID.status == "CORRECT") {
                completedQuestion++;
            }
        }
        return item.Category == categoryItem;
    });

    return {
        questionsByCategory,
        completedQuestion,
    };
}

function getQuestionByCategories(questions) {
    const questionByCategories = {};
    questions.forEach(({ Category, ...arrays }) => {
        // eslint-disable-next-line no-prototype-builtins
        if (!questionByCategories.hasOwnProperty(Category)) {
            questionByCategories[Category] = [];
        }
        questionByCategories[Category].push(arrays);
    });

    return questionByCategories;
}

function getSubmissionByQuestion(submissions) {
    const submissionByQuestion = {};
    submissions.forEach(({ id, status }) => {
        submissionByQuestion[id] = status;
    });

    return submissionByQuestion;
}
