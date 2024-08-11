import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CardsArea } from "./components/cards-area";
import { FloatingRank } from "./components/floating-rank";

export const Game = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const player = params.get("player");
    if (!player) navigate("/");
  }, [params]);

  return (
    <main className="size-full h-[100vh] flex flex-col py-8 text-center gap-10 lg:gap-16 lg:py-16">
      <FloatingRank className="max-md:hidden" />

      <header className="flex-shrink-0 flex flex-col gap-1 px-5 lg:gap-5">
        <h1 className="text-primary font-[Zain] font-extrabold text-5xl leading-8 lg:text-[80px]">
          Selecione uma dupla de cartas:
        </h1>

        <p className="text-[#0D0D0D] font-[Montserrat] font-medium text-lg lg:text-[22px] max-w-[700px] self-center">
          Para ganhar pontos, a dupla de cartas deve corresponder a uma pergunta e sua resposta correta. Boa sorte!
        </p>
      </header>

      <CardsArea />
    </main>
  );
}