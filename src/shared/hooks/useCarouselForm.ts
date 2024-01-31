import { useEffect, useState } from "react";
import { ListItemDto, QuestionsListDto } from "../models/questions";

export function useCarouselForm() {
  const [data, setData] = useState<ListItemDto[] | undefined>();

  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((json) => {
        const summaryItem: ListItemDto = {
          id: json.questions.length,
          title: "Sammary",
          options: [],
          isSammary: true,
        };
        setData([...json.questions, summaryItem]);
      });
  }, []);

  const handleSubmit = (body: QuestionsListDto) => {
    const filteredQuestions = body.questions.filter(
      (question) => question.isSammary === false
    );
    fetch("/api/questions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ questions: filteredQuestions }),
    })
      .then((res) => res.json())
      .then((json) => {
        const summaryItem: ListItemDto = {
          id: json.questions.length,
          title: "Sammary",
          options: [],
          isSammary: true,
        };
        setData([...json.questions, summaryItem]);
      });
  };

  return { data, handleSubmit };
}
