import { useContext, useEffect, useMemo, useState } from "react";
import { Card, CardPair } from "../../../../types/cards";
import { shuffledDeck } from "../../../../data/deck";
import { Button } from "../../../../components/button";
import { DeckCard } from "../../../../components/deck-card";
import { deckLevelMapper } from "./utils/mappers";
import { GameContext } from "../../../../contexts/game";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../contexts/app";
import { pairMatchSoundEffect } from "../../../../utils/sound-effects";

export const CardsArea = () => {
  const [level, setLevel] = useState<CardPair["level"]>("easy");
  const [deck, setDeck] = useState<Card[]>(shuffledDeck.easy);

  const { matchStatus, answerQuestion, endGame } = useContext(GameContext);
  const { setMessage } = useContext(AppContext);

  const navigate = useNavigate();

  const chosenCards = useMemo(() =>
    deck.filter(c => c.isChosen), [deck]);

  const checkCards = () => {
    setMessage(null);
    const [card1, card2] = chosenCards;

    if (card1.type == card2.type) {
      setMessage(`Ambas são ${card1.type == 'answer' ? 'respostas' : 'perguntas'}`);
    }
    else if (card1.type != card2.type && card1.match != card2.id) {
      setMessage("Par incorreto.");
    }
    else if (card1.type != card2.type && card1.match == card2.id) {
      answerQuestion(level, () => {
        setDeck(prev => prev.map(item => (
          chosenCards.some(c => c.id == item.id)
            ? { ...item, isMatched: true } : item
        )));
      });

      pairMatchSoundEffect.play();
    }

    setDeck(prev => prev.map(item => ({
      ...item,
      isChosen: false,
    })));
  }

  const toggleCard = (card: Card) => {
    setDeck(prev => prev.map(item => {
      if (item.id == card.id) {
        return { ...item, isChosen: !card.isChosen };
      }
      return item;
    }));
  }

  useEffect(() => {
    const hasRemaining = deck.some(c => !c.isMatched);
    if (hasRemaining) return;

    if (level == "easy") {
      setLevel("medium");
      setDeck(shuffledDeck.medium);
    }
    else if (level == "medium") {
      setLevel("hard");
      setDeck(shuffledDeck.hard);
    }
    else {
      endGame();
    }
  }, [deck]);

  useEffect(() => {
    if (matchStatus === "ended") {
      navigate("/result");
    }
  }, [matchStatus]);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="capitalize text-primary font-medium font-[Zain] text-3xl">
          {deckLevelMapper[level]}
        </h1>

        <div className="m-auto p-5 w-full max-w-[1286px] grid max-h-min grid-cols-[repeat(auto-fill,_minmax(124px,_1fr))] gap-4 overflow-y-auto smooth-scrollbar lg:grid-cols-[repeat(auto-fill,_minmax(168px,_1fr))]">
          {deck.map(card => {
            const ableToToggle = chosenCards.length < 2
              || chosenCards.some(c => c.id == card.id);

            return (
              <DeckCard
                key={card.id}
                data={card}
                ableToToggle={ableToToggle}
                toggleCard={toggleCard}
              />
            );
          }
          )}
        </div>
      </div>

      <Button
        className="flex-shrink-0 max-w-[300px] self-center disabled:opacity-40"
        disabled={chosenCards.length != 2}
        onClick={checkCards}
      >
        Testar dupla
      </Button>
    </div>
  );
}