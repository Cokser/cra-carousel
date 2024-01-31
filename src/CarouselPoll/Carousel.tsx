import React, { useState } from "react";
import {
  ListItemDto,
  OptionDto,
  QuestionsListDto,
} from "../shared/models/questions";
import PollOption from "./PollOption";
import { usePollContext } from "../shared/utilities/PollProvider";
import Sammary from "./Sammary/Sammary";

type CarouselProps = {
  handleQuestion: (items: ListItemDto[]) => void;
  hadnleSubmit: (obj: QuestionsListDto) => void;
};

export function Carousel({ handleQuestion, hadnleSubmit }: CarouselProps) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);
  const questions = usePollContext();

  const handleActive = (id: number) => {
    if (id === questions.length - 1) {
      console.log("setShowSubmit", id);
      setShowSubmit(true);
    } else {
      setShowSubmit(false);
    }

    setActiveQuestion(id);
  };

  const handlePoll = (id: number, answer: OptionDto) => {
    const result = questions.map((item: ListItemDto) => {
      if (item.id === id) {
        return {
          ...item,
          answer,
        };
      }
      return item;
    });

    handleQuestion(result);
    handleActive(id + 1);
  };
  // console.log("questions", questions);

  return (
    <div className="h-screen overflow-hidden">
      {questions?.map((item: ListItemDto) =>
        showSubmit === true ? (
          <div key={item.id} className="flex">
            <div className="flex w-full fixed">
              <Sammary questions={questions} hadnleSubmit={hadnleSubmit} />
            </div>
            <div className="flex w-full">
              <div className="flex w-1/2 bg-indigo-500 justify-start items-center pl-16">
                <p className="text-white text-4xl font-bold">{item.title}</p>
              </div>
              <div className="flex w-1/2 bg-white h-screen justify-center items-center">
                {item?.options?.map((props) => (
                  <PollOption
                    key={props.id}
                    {...props}
                    questionId={item.id}
                    handlePoll={handlePoll}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-full" key={item.id}>
            <div
              className="flex w-1/2 bg-indigo-500 justify-start items-center pl-16 transition easy-out duration-500"
              style={{
                transform: `translateY(-${activeQuestion * 100}%)`,
              }}
            >
              <p className="text-white text-4xl font-bold">{item.title}</p>
            </div>
            <div
              className="flex w-1/2 bg-white h-screen justify-center items-center transition easy-out duration-700"
              style={{
                transform: `translateY(-${activeQuestion * 100}%)`,
              }}
            >
              {item?.options?.map((props) => (
                <PollOption
                  key={props.id}
                  {...props}
                  questionId={item.id}
                  handlePoll={handlePoll}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        )
      )}
      )
      <div className="fixed inset-0 flex flex-col w-[20px] left-2 items-center justify-center">
        {questions?.map((item: ListItemDto) => (
          <div key={item.id}>
            <button
              type="button"
              className={`w-4 h-4 rounded-lg border-2 border-white transition ease-in-out delay-50 hover:bg-indigo-300  ${
                activeQuestion === item.id ? "bg-transparent" : "bg-white"
              }`}
              onClick={() => handleActive(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
