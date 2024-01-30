
export interface OptionDto {
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