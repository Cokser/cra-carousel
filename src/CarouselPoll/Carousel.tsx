import React, { useEffect, useMemo, useState } from "react";
import { ListItemDto } from "../shared/models/questions";
import PollOption from "./PollOption";

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
            {item?.options.map((props) => (
              <PollOption key={props.id} {...props} />
            ))}
          </div>
        </div>
      ))}
      <div className="fixed inset-0 flex flex-col w-[20px] left-2 items-center justify-center">
        {questions.map((item: ListItemDto) => (
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
