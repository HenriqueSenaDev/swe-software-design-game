import { ComponentProps, useState } from "react";
import interrogativeIcon from "../../assets/vectors/interrogative-icon.svg";
import { Card } from "../../types/cards";

interface DeckCardProps extends ComponentProps<"div"> {
  // data: Card;
}

export const DeckCard = ({ ...props }: DeckCardProps) => {
  const [active, setClicked] = useState<boolean>(false);

  const faceClasses = "absolute size-full border-[3px] border-primary bg-white rounded-[10px] flex items-center justify-center transition-all hover:scale-110";

  return (
    <div
      className="relative bg-white h-[168px] cursor-pointer lg:h-[124px]"
      onClick={() => setClicked(prev => !prev)}
      style={{
        transformStyle: "preserve-3d",
        transform: active ? "rotateY(180deg) scale(1.05)" : "",
        perspective: 1000,
        transition: "all ease 0.6s",
      }}
      {...props}
    >
      <div
        className={faceClasses}
        style={{ transform: "rotateY(180deg)" }}
      >
        <h1>Fala dev</h1>
      </div>

      <div
        className={faceClasses}
        style={{ backfaceVisibility: "hidden" }}
      >
        <img
          className="w-14 aspect-square m-auto"
          src={interrogativeIcon}
          alt="ponto de interrogação dentro de um círculo roxo"
        />
      </div>
    </div>
  );
}