import React, { useEffect, useState } from "react";
import Carousel from "../CarouselPoll";
import logo from "../logo.svg";
import { PollContext } from "../shared/utilities/PollProvider";
import { ListItemDto, QuestionsListDto } from "../shared/models/questions";
import { useCarouselForm } from "../shared/hooks/useCarouselForm";

export function App() {
  const { data, handleSubmit } = useCarouselForm();
  const [questions, setQuestions] = useState<ListItemDto[] | undefined>(data);

  useEffect(() => {
    setQuestions(data);
  }, [data]);

  const submitForm = (obj: QuestionsListDto) => {
    handleSubmit(obj);
  };

  return (
    <div className="bg-gray-800">
      <header className="flex items-center text-teal-200 h-12 fixed w-full bg-slate-800">
        header
      </header>
      {questions && (
        <main>
          <PollContext.Provider value={questions}>
            <Carousel handleQuestion={setQuestions} hadnleSubmit={submitForm} />
          </PollContext.Provider>
        </main>
      )}
    </div>
  );
}
