import { ReactElement, ReactNode } from "react";

export interface OptionDto {
  id: number;
  icon: string;
  label: string;
}
export interface ListItemDto {
  id: number;
  title: string;
  options: OptionDto[];
}

export interface QuestionsListDto {
  questions: ListItemDto[];
}