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
