import { createServer, Model } from "miragejs";
import { ListItemDto, QuestionsListDto } from "../models/questions";

type ServerProps = {
  environment: string;
}

const ITEMS_LIST: ListItemDto[] = [
  {
    id: 0,
    title: "How was your week overall?",
    options: [{icon: "yes", label: "yes"}, {icon: "no", label: "no"}],
  },
  {
    id: 1,
    title: "question number 2",
    options: [{icon: "yes", label: "yes"}, {icon: "no", label: "no"}],
  },
  {
    id: 2,
    title: "question number 3",
    options: [{icon: "yes", label: "yes"}, {icon: "no", label: "no"}],
  },
  {
    id: 3,
    title: "question number 4",
    options: [{icon: "yes", label: "yes"}, {icon: "no", label: "no"}],
  },
];

export function makeServer({ environment = "test" }: ServerProps) {
  let server = createServer({
    environment,
    routes() {
      this.get("/api/questions", (): QuestionsListDto => ({
        questions: ITEMS_LIST,
      }))
    },
  })

  return server
}