import React, { useState } from "react";
import {
  ListItemDto,
  OptionDto,
  QuestionsListDto,
} from "../shared/models/questions";
import PollOption from "./PollOption/PollOption";
import { usePollContext } from "../shared/hooks/usePollContext";
import Sammary from "./Sammary/Sammary";
import PollNavigation from "./PollNavigation/PollNavigation";

interface CarouselProps {
  handleQuestion: (items: ListItemDto[]) => void;
  hadnleSubmit: (obj: QuestionsListDto) => void;
}

export function Carousel({ handleQuestion, hadnleSubmit }: CarouselProps) {
  const questions = usePollContext();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);

  const handleActive = (id: number) => {
    if (id === questions.length - 1) {
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
    // handleActive(id + 1);
  };

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
        <PollNavigation
          handleActive={handleActive}
          questions={questions}
          activeQuestion={activeQuestion}
        />
      </div>
    </div>
  );
}
