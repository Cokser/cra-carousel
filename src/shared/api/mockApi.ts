import { createServer } from "miragejs";
import { ListItemDto, QuestionsListDto } from "../models/questions";

type ServerProps = {
  environment: string;
};

const ITEMS_LIST: ListItemDto[] = [
  {
    id: 0,
    title: "How was your week overall?",
    options: [
      {
        id: 0,
        icon: "ThumbsUpIcon",
        label: "Yes",
      },
      {
        id: 1,
        icon: "ThinkingIcon",
        label: "Not Sure",
      },
      {
        id: 2,
        icon: "ThumbsDownIcon",
        label: "No",
      },
    ],
  },
  {
    id: 1,
    title: "How are you feeling today?",
    options: [
      {
        id: 0,
        icon: "ThumbsUpIcon",
        label: "Yes",
      },
      {
        id: 1,
        icon: "ThinkingIcon",
        label: "Not Sure",
      },
      {
        id: 2,
        icon: "ThumbsDownIcon",
        label: "No",
      },
    ],
  },
  {
    id: 2,
    title: "question number 3",
    options: [
      {
        id: 0,
        icon: "ThumbsUpIcon",
        label: "Yes",
      },
      {
        id: 1,
        icon: "ThinkingIcon",
        label: "Not Sure",
      },
      {
        id: 2,
        icon: "ThumbsDownIcon",
        label: "No",
      },
    ],
  },
  {
    id: 3,
    title: "question number 4",
    options: [
      {
        id: 0,
        icon: "ThumbsUpIcon",
        label: "Yes",
      },
      {
        id: 1,
        icon: "ThinkingIcon",
        label: "Not Sure",
      },
      {
        id: 2,
        icon: "ThumbsDownIcon",
        label: "No",
      },
    ],
  },
];

export function makeServer({ environment = "test" }: ServerProps) {
  let server = createServer({
    environment,
    routes() {
      this.get(
        "/api/questions",
        (): QuestionsListDto => ({
          questions: ITEMS_LIST,
        })
      );
    },
  });

  return server;
}
