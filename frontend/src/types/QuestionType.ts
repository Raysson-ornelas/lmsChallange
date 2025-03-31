export type Option = {
  id: string;
  text: string;
  isCorrect: boolean;
  questionId: string;
};

export type Question = {
  id: string;
  text: string;
  options: Option[];
};
