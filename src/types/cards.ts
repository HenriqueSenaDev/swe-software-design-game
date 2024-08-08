export type Card = {
  id: string;
  type: "question" | "answer";
  match: string;
  content: string;
}

export type CardPair = {
  question: string;
  answer: string;
}