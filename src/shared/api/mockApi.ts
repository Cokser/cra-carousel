import { createServer, Model } from "miragejs";

type ServerProps = {
  environment: string;
}

export interface ListItemDto {
  id: number;
  headline: string;
  question: string;
}

export interface QuestionsListDto {
  questions: ListItemDto[];
}


const ITEMS_LIST: ListItemDto[] = [
  {
    id: 0,
    headline: "Complete the task",
    question: "question number 1"
  },
  {
    id: 1,
    headline: "Complete the task",
    question: "question number 2"
  },
  {
    id: 2,
    headline: "Complete the task",
    question: "question number 3"
  },
  {
    id: 3,
    headline: "Complete the task",
    question: "question number 4"
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