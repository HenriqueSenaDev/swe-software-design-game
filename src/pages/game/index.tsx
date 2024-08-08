import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "../../types/cards";
import { cardDeckData } from "../../data/cards";
import { DeckCard } from "../../components/deck-card";
import { Button } from "../../components/button";

export const Game = () => {
  const [cardDeck, setCardDeck] = useState<Card[]>(cardDeckData);
  const chosenId = useRef<string | null>(null);

  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const player = params.get("player");
    if (!player) navigate("/");
  }, [params]);

  return (
    <main className="size-full h-[100vh] flex flex-col py-8 text-center gap-10 lg:gap-16 lg:py-16">
      <header className="flex-shrink-0 flex flex-col gap-1 px-5 lg:gap-5">
        <h1 className="text-primary font-[Zain] font-extrabold text-5xl leading-8 lg:text-[80px]">
          Selecione uma dupla de cartas:
        </h1>

        <p className="text-[#0D0D0D] font-[Montserrat] font-medium text-[22px] max-w-[700px] self-center">
          Para ganhar pontos, a dupla de cartas deve corresponder a uma pergunta e sua resposta correta. Boa sorte!
        </p>
      </header>

      {/* Cards Container */}
      <div className="m-auto p-5 w-full max-w-[1286px] grid max-h-min grid-cols-[repeat(auto-fill,_minmax(124px,_1fr))] gap-4 overflow-y-auto smooth-scrollbar lg:grid-cols-[repeat(auto-fill,_minmax(168px,_1fr))]">
        {cardDeckData.map(item => <DeckCard />)}
      </div>

      <Button className="flex-shrink-0 max-w-[300px] self-center">
        Testar dupla
      </Button>
    </main>
  );
}