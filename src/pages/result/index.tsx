import { useContext, useEffect } from "react";
import { GameContext } from "../../contexts/game";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import {
  playDefeatSoundEffect,
  playVictorySoundEffect,
} from "../../utils/sound-effects";

export const Result = () => {
  const { ranking, teamName } = useContext(GameContext);
  const { width, height } = useWindowSize();

  useEffect(() => {
    ranking[0].teamName == teamName
      ? playVictorySoundEffect()
      : playDefeatSoundEffect();
  }, []);

  return (
    <main className="size-full h-[100vh] flex flex-col py-8 text-center gap-10 lg:gap-16 lg:py-16">
      <Confetti
        width={width}
        height={height}
        gravity={0.25}
        recycle={true}
        className="absolute z-[9999]"
      />

      <header className="flex-shrink-0 flex flex-col gap-1 px-5 lg:gap-5">
        <h1 className="text-primary font-[Zain] font-extrabold text-5xl leading-8 lg:text-[80px]">
          Meus parabéns {ranking[0]?.teamName}!
        </h1>

        <p className="text-[#0D0D0D] font-[Montserrat] font-medium text-lg lg:text-[22px] max-w-[700px] self-center">
          Agradecemos a colaboração de todos! Se não conseguiram dessa vez, boa sorte nas próximas tenativas.
        </p>
      </header>

      <div className="w-full max-w-3xl mx-auto flex-1 px-5 flex flex-col gap-4 overflow-y-auto smooth-scrollbar">
        {ranking.map((team, index) => (
          <div
            key={team.teamName}
            className="flex gap-3 items-center bg-gray-200 bg-opacity-80 rounded-lg py-3 px-3"
          >
            <div className="flex items-center justify-center gap-2 bg-primary rounded-md text-white px-[10px] font-[Montserrat] font-bold min-w-[40px] aspect-square bg-opacity-90 text-lg">
              {index + 1}º
            </div>

            <p className="text-left flex-1 truncate text-[#0D0D0D] font-[Montserrat] font-medium text-xl">
              {team.teamName}
            </p>

            <span className="font-[Montserrat] font-bold text-primary text-xl">
              {team.score}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}