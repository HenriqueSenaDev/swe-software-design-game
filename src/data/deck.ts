import { v4 as uuidv4 } from 'uuid';
import { Card, CardPair } from "../types/cards";
import { cardPairs } from "./cards";

const easyLevelPairs = cardPairs.filter(p => p.level == "easy");
const mediumLevelPairs = cardPairs.filter(p => p.level == "medium");
const hardLevelPairs = cardPairs.filter(p => p.level == "hard");

function generateLevelDeck(pairs: CardPair[]): Card[] {
  return pairs.reduce((acc, item) => {
    const answerId = uuidv4();
    const questionId = uuidv4();

    const answerCard: Card = {
      id: answerId,
      match: questionId,
      type: "answer",
      isChosen: false,
      isMatched: false,
      content: item.answer,
    };

    const questionCard: Card = {
      id: questionId,
      match: answerId,
      type: "question",
      isChosen: false,
      isMatched: false,
      content: item.question,
    };

    return [answerCard, questionCard, ...acc];
  }, [] as Card[]);
}

function shuffleArray(array: Card[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

export const shuffledDeck = {
  easy: shuffleArray(generateLevelDeck(easyLevelPairs)),
  medium: shuffleArray(generateLevelDeck(mediumLevelPairs)),
  hard: shuffleArray(generateLevelDeck(hardLevelPairs)),
}

