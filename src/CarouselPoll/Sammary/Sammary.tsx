import React from "react";
import { ListItemDto, QuestionsListDto } from "../../shared/models/questions";
import IconButton from "../../shared/ui/IconButton";

export interface SammaryProps {
  questions: ListItemDto[];
  transition: string;
  hadnleSubmit: (obj: QuestionsListDto) => void;
}
function Sammary({ questions, transition, hadnleSubmit }: SammaryProps) {
  return (
    <div className="flex w-full">
      <div
        className="flex flex-col w-1/2 bg-indigo-500 h-screen justify-center items-center transition easy-out duration-700 p-10"
        style={{ transform: transition }}
      >
        {questions?.map(
          (questionItem: ListItemDto) =>
            questionItem.isSammary === false && (
              <div className="h-[100px]">
                <p className="text-white text-4xl font-bold">
                  {questionItem.title}
                </p>
              </div>
            )
        )}{" "}
        <button
          type="submit"
          onClick={() => hadnleSubmit({ questions })}
          className={`w-28 h-12 rounded-md border-2 border-white text-white transition ease-in-out delay-50 hover:bg-indigo-300`}
        >
          Submit
        </button>
      </div>
      <div
        className="flex flex-col w-1/2 bg-white h-screen justify-center items-center transition easy-out duration-700"
        style={{ transform: transition }}
      >
        {questions?.map(
          (questionItem: ListItemDto) =>
            questionItem.isSammary === false && (
              <div className="h-[100px]" key={questionItem.id}>
                <p>
                  <IconButton type={questionItem.answer?.icon} />
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Sammary;
