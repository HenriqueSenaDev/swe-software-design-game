import { useMemo, useState } from "react";
import { Card } from "../../../../types/cards";
import { shuffledDeck } from "../../../../data/deck";
import { Button } from "../../../../components/button";
import { DeckCard } from "../../../../components/deck-card";

export const CardsArea = () => {
  const [cardDeck, setCardDeck] = useState<Card[]>(shuffledDeck.easy);

  const chosenCards = useMemo(() =>
    cardDeck.filter(c => c.isChosen), [cardDeck]);

  const checkCards = () => {
    const [card1, card2] = chosenCards;

    if (card1.type == card2.type) {
      alert(`Ambas são ${card1.type == 'answer' ? 'respostas' : 'perguntas'}`);
    }
    else if (card1.type != card2.type && card1.match != card2.id) {
      alert("Par incorreto.");
    }
    else if (card1.type != card2.type && card1.match == card2.id) {
      setCardDeck(prev => prev.map(item => (
        chosenCards.some(c => c.id == item.id)
          ? { ...item, isMatched: true } : item
      )));
    }

    setCardDeck(prev => prev.map(item => ({
      ...item,
      isChosen: false,
    })));
  }

  const toggleCard = (card: Card) => {
    setCardDeck(prev => prev.map(item => {
      if (item.id == card.id) {
        return { ...item, isChosen: !card.isChosen };
      }
      return item;
    }));
  }

  return (
    <>
      <div className="m-auto p-5 w-full max-w-[1286px] grid max-h-min grid-cols-[repeat(auto-fill,_minmax(124px,_1fr))] gap-4 overflow-y-auto smooth-scrollbar lg:grid-cols-[repeat(auto-fill,_minmax(168px,_1fr))]">
        {cardDeck.map(card => {
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

      <Button
        className="flex-shrink-0 max-w-[300px] self-center disabled:opacity-40"
        disabled={chosenCards.length != 2}
        onClick={checkCards}
      >
        Testar dupla
      </Button>
    </>
  );
}