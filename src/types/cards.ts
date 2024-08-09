export type Card = {
  id: string;
  type: "question" | "answer";
  match: string;
  isChosen: boolean;
  isMatched: boolean;
  content: string;
}

export type CardPair = {
  question: string;
  answer: string;
}