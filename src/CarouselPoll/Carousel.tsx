import React, { useEffect, useMemo, useState } from "react";
import { ListItemDto } from "../shared/models/questions";

export function Carousel() {
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);

  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((json) => {
        setQuestions(json.questions);
      });
  }, []);

  const handleActive = (id: number) => {
    setActiveQuestion(id);
  };

  return (
    <div className="h-screen overflow-hidden">
      {questions.map((item: ListItemDto) => (
        <div
          className="flex w-full transition easy-out duration-500"
          style={{
            transform: `translateY(-${activeQuestion * 100}%)`,
          }}
          key={item.id}
        >
          <div className="flex w-1/2 bg-indigo-500 justify-start items-center pl-16">
            <p className="text-white text-4xl font-bold">{item.title}</p>
          </div>
          <div className="w-1/2 bg-white h-screen"></div>
        </div>
      ))}
      <div className="fixed inset-0 flex flex-col w-[20px] left-2 items-center justify-center">
        {questions.map((item: ListItemDto) => (
          <div key={item.id}>
            <button
              type="button"
              className={`w-4 h-4 rounded-lg border-2 border-white bg-white transition ease-in-out delay-50 hover:bg-indigo-300  ${
                activeQuestion === item.id && "bg-transparent"
              }`}
              onClick={() => handleActive(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
