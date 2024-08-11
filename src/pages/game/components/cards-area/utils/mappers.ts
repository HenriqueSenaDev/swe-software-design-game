import { CardPair } from "../../../../../types/cards";

export const deckLevelMapper = {
  easy: "Fácil",
  medium: "Médio",
  hard: "Difícil",
} satisfies Record<CardPair["level"], string>