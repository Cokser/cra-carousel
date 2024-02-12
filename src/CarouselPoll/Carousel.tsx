import React, { useState } from "react";
import {
  ListItemDto,
  OptionDto,
  QuestionsListDto,
} from "../shared/models/questions";
import PollOption from "./PollOption/PollOption";
import { usePollContext } from "../shared/hooks/usePollContext";
import Summary from "./Summary/Summary";
import PollNavigation from "./PollNavigation/PollNavigation";

interface CarouselProps {
  handleQuestion: (items: ListItemDto[]) => void;
  handleSubmit: (obj: QuestionsListDto) => void;
  slideOnSelect?: boolean;
  ordered?: boolean;
}

export function Carousel({
  handleQuestion,
  handleSubmit,
  slideOnSelect,
  ordered,
}: CarouselProps) {
  const questions = usePollContext();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);
  const [showError, setShowError] = useState(false);

  const changeActiveSlide = (id: number) => {
    if (id === questions.length - 1) {
      setShowSubmit(true);
    } else {
      setShowSubmit(false);
    }
    setActiveQuestion(id);
  };

  const submitPoll = (data: QuestionsListDto) => {
    handleSubmit(data);
    setTimeout(() => {
      changeActiveSlide(0);
    }, 3000);
  };

  const handleActive = (id: number) => {
    const activeQuestionItem = questions.find(
      (item) => activeQuestion === item.id
    );
    if (
      ordered === true &&
      activeQuestionItem &&
      activeQuestionItem?.id < id - 1
    ) {
      return;
    }
    if (activeQuestionItem?.required && !activeQuestionItem.answer) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }
    changeActiveSlide(id);
  };

  const handlePoll = (id: number, answer: OptionDto) => {
    const activeQuestionItem = questions.find(
      (item) => activeQuestion === item.id
    );
    if (
      activeQuestionItem?.allowChange === false &&
      activeQuestionItem.answer
    ) {
      return;
    }
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
    setShowError(false);

    if (slideOnSelect) {
      changeActiveSlide(id + 1);
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      {questions?.map((item: ListItemDto) =>
        showSubmit ? (
          <div key={item.id} className="flex">
            <div
              className="flex w-full fixed"
              style={{
                transform: `translateY(-${activeQuestion * 100}%)`,
              }}
            >
              <Summary questions={questions} handleSubmit={submitPoll} />
            </div>
            <div className="flex w-full">
              <div className="flex w-1/2 bg-indigo-500 justify-start items-center pl-16">
                <span className="text-white text-4xl font-bold" />
              </div>
              <div className="flex w-1/2 bg-white h-screen justify-center items-center" />
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
              className="flex flex-col w-1/2 bg-white h-screen justify-center items-center transition easy-out duration-700"
              style={{
                transform: `translateY(-${activeQuestion * 100}%)`,
              }}
            >
              <div className="flex">
                {item?.options?.map((props) => (
                  <PollOption
                    key={props.id}
                    {...props}
                    questionId={item.id}
                    handlePoll={handlePoll}
                    answer={item.answer}
                    isDisabled={item.id !== activeQuestion}
                  />
                ))}
              </div>
              {showError && (
                <span className="absolute translate-y-[100px] bg-white shadow p-4 mt-12 border rounded-md text-red-400 animate-pulse">
                  This question is required!
                </span>
              )}
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
