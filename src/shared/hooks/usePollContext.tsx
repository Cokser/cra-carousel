import { createContext, useContext } from "react";
import { ListItemDto } from "../models/questions";

export const PollContext = createContext<ListItemDto[] | undefined>(undefined);

export function usePollContext() {
  const poll = useContext(PollContext);

  if (poll === undefined) {
    throw new Error("usePollContext must be used with a PollContext");
  }

  return poll;
}
