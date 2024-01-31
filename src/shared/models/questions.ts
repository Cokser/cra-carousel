export interface OptionDto {
  id: number;
  icon: string;
  label: string;
}
export interface ListItemDto {
  id: number;
  title: string;
  options?: OptionDto[];
  answer?: OptionDto;
  isSammary?: boolean;
}

export interface QuestionsListDto {
  questions: ListItemDto[];
}