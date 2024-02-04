import React from "react";
import { ListItemDto, QuestionsListDto } from "../../shared/models/questions";
import { IconButton } from "../../shared/ui";

export interface SummaryProps {
  questions: ListItemDto[];
  handleSubmit: (obj: QuestionsListDto) => void;
}
function Summary({ questions, handleSubmit }: SummaryProps) {
  return (
    <>
      <div className="flex flex-col w-1/2 bg-indigo-500 ml-8 h-screen justify-center items-center p-10 animate-slide-in">
        {questions?.map(
          (questionItem: ListItemDto) =>
            questionItem.isSammary === false && (
              <div className="h-[100px] text-center" key={questionItem.id}>
                <p className="text-white text-3xl font-bold">
                  {questionItem.title}
                </p>
              </div>
            )
        )}
        <button
          type="submit"
          onClick={() => handleSubmit({ data: questions })}
          className={`w-28 h-12 rounded-md border-2 border-white text-white transition ease-in-out delay-50 hover:bg-indigo-300`}
        >
          Submit
        </button>
      </div>
      <div className="flex flex-col w-1/2 bg-white h-screen justify-center items-center animate-slide-in">
        {questions?.map(
          (questionItem: ListItemDto) =>
            questionItem.isSammary === false && (
              <div
                className="flex h-[100px] w-[150px] justify-start items-center"
                key={questionItem.id}
              >
                <IconButton type={questionItem.answer?.icon} />
                <span className="ml-4">{questionItem.answer?.label}</span>
              </div>
            )
        )}
        <span className="ml-4 h-[100px] w-[150px] justify-start items-center" />
      </div>
    </>
  );
}

export default Summary;
