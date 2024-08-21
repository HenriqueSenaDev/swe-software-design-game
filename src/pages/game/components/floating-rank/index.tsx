import { useContext, useState } from "react";
import { GameContext } from "../../../../contexts/game";
import { Trophy, XIcon } from "lucide-react";

type FloatingRankProps = {
  className?: string;
}

export const FloatingRank = ({
  className,
}: FloatingRankProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const { ranking } = useContext(GameContext);

  return (
    <div
      className={`fixed z-50 top-10 right-10 ${className}`}
      onClick={() => setOpen(true)}
    >
      <div className="p-2 aspect-square flex items-center justify-center rounded-md bg-white shadow-lg border-2 border-primary border-opacity-70 cursor-pointer hover:opacity-80">
        <Trophy className="text-primary" size={30} />
      </div>

      <div
        className={`absolute flex flex-col gap-3 w-[320px] max-w-[90vw] max-h-[500px] top-0 right-0 bg-white border-2 border-primary border-opacity-50 rounded-md p-3 transition-all ${open ? "" : "translate-x-[1000px]"}`}
      >
        <div className="relative border-b-[2px] border-dashed border-primary w-full mb-2">
          <h3 className="text-primary font-bold font-[Zain] text-2xl mb-1">
            Ranking de Pontos
          </h3>

          <button
            className="absolute right-0 top-0"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            <XIcon className="text-primary" size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto hide-scollbar">
          {ranking.map((team, index) => (
            <div
              key={index}
              className="flex gap-3 items-center ml-3"
            >
              <div className="flex items-center justify-center gap-2 bg-primary rounded-md text-white px-[10px] font-[Montserrat] font-bold min-w-[40px] aspect-square bg-opacity-90 text-sm">
                {index + 1}º
              </div>

              <p className="text-left flex-1 truncate text-[#0D0D0D] font-[Montserrat] font-medium">
                {team.teamName}
              </p>

              <span className="font-[Montserrat] font-bold text-primary">
                {team.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}