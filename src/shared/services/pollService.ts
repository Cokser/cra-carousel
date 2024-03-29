import { ListItemDto } from "../models/questions";

export const getPolls = async () => {
  return fetch("/api/questions").then((res) => res.json());
};

export const postPolls = async (body: ListItemDto[]) => {
  return await fetch("/api/questions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: body }),
  }).then((res) => res.json());
};
