export type Card = {
  id: string;
  type: "question" | "answer";
  match: string;
  isChosen: boolean;
  isMatched: boolean;
  content: string;
}

export type CardPair = {
  level: "easy" | "medium" | "hard";
  question: string;
  answer: string;
}