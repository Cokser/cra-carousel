import { ListItemDto } from "../models/questions";

export const getPolls = async () => {
  return await fetch("/api/questions").then((res) => res.json());
};

export const postPolls = async (body: ListItemDto[]) => {
  return await fetch("/api/questions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ questions: body }),
  }).then((res) => res.json());
};
