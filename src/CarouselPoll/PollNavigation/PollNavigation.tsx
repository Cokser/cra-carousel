import React from "react";
import { ListItemDto } from "../../shared/models/questions";

interface PollNavigationProps {
  handleActive: (id: number) => void;
  questions: ListItemDto[];
  activeQuestion: number;
}

function PollNavigation({
  questions,
  activeQuestion,
  handleActive,
}: PollNavigationProps) {
  return (
    <>
      {questions?.map((item: ListItemDto) => (
        <div key={item.id}>
          <button
            data-testid={item.id}
            type="button"
            className={`w-4 h-4 rounded-lg border-2 border-white transition ease-in-out delay-50 hover:bg-indigo-300  ${
              activeQuestion === item.id ? "bg-transparent" : "bg-white"
            }`}
            onClick={() => handleActive(item.id)}
          />
        </div>
      ))}
    </>
  );
}

export default PollNavigation;
