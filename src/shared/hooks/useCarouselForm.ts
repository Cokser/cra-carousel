import { useEffect, useState } from "react";
import { ListItemDto, QuestionsListDto } from "../models/questions";
import { getPolls, postPolls } from "../services/pollService";

export function useCarouselForm() {
  const [data, setData] = useState<ListItemDto[] | undefined>();

  const getMockedPolls = () => {
    getPolls().then((json) => {
      const summaryItem: ListItemDto = {
        id: json.data.length,
        title: "Summary",
        options: [],
        isSammary: true,
      };
      setData([...json.data, summaryItem]);
    });
  };

  useEffect(() => {
    getMockedPolls();
  }, []);

  const handleSubmit = (body: QuestionsListDto) => {
    const filteredQuestions = body.data.filter(
      (question) => question.isSammary === false
    );
    postPolls(filteredQuestions).then((json) => {
      getMockedPolls(); //     cleaning up hook's data after poll submit
    });
  };

  return { data, handleSubmit };
}
