import { ComponentProps, MouseEventHandler, useState } from "react";
import { Card } from "../../types/cards";
import interrogativeIcon from "../../assets/vectors/interrogative-icon.svg";
import { XIcon } from "lucide-react";

interface DeckCardProps extends ComponentProps<"div"> {
  data: Card;
  ableToToggle: boolean;
  toggleCard: (card: Card) => void;
}

export const DeckCard = ({
  data,
  ableToToggle,
  toggleCard,
  ...props
}: DeckCardProps) => {
  const [cursor, setCursor] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

  const faceClasses = `absolute size-full border-[3px] border-primary bg-white rounded-[10px] flex items-center justify-center transition-all ${data.isMatched ? "" : "hover:scale-110 cursor-pointer"}`;

  const handleClick = () => {
    if (!ableToToggle || data.isMatched) return;
    toggleCard(data);
  }

  const handleShowMore: MouseEventHandler = (e) => {
    e.stopPropagation();
    setShowMore(true);
  }

  return (
    <>
      {showMore && (
        <div className="z-50 top-0 left-0 fixed w-screen h-screen flex items-center justify-center bg-black bg-opacity-30 px-5">
          <div className="w-full max-w-md px-5 pt-6 pb-10 border-[3px] border-primary bg-white rounded-[10px] flex flex-col gap-7">
            <div className="flex justify-between items-center">
              <div className={`w-min py-[6px] px-6 rounded-md ${data.type == "answer"
                ? "bg-primary text-white"
                : "text-primary border-2 border-opacity-60 border-dashed border-primary"
                }`}>
                <p className="font-medium">
                  {data.type == "answer" ? "Resposta" : "Pergunta"}
                </p>
              </div>

              <button className="my-auto" onClick={() => setShowMore(false)}>
                <XIcon
                  className="text-primary hover:text-opacity-80"
                  strokeWidth={3}
                  size={25}
                />
              </button>
            </div>

            <p className="text-left text-primary font-bold text-base">
              {data.content}
            </p>
          </div>
        </div>
      )}

      <div
        className="relative bg-white h-[168px] lg:h-[124px]"
        onClick={handleClick}
        style={{
          transformStyle: "preserve-3d",
          transform: data.isChosen ? "rotateY(180deg) scale(1.05)" : "",
          perspective: 1000,
          transition: "all ease 0.6s",
          filter: data.isMatched ? "saturate(0)" : "",
          opacity: data.isMatched ? "0.7" : "1",
        }}
        {...props}
      >
        <div
          className={faceClasses}
          style={{ transform: "rotateY(180deg)" }}
          onMouseEnter={() => setCursor(true)}
          onMouseLeave={() => setCursor(false)}
        >
          <div className="size-full px-4 py-3 gap-2 flex flex-col">
            <div className={`py-1 rounded-md ${data.type == "answer"
              ? "bg-primary text-white"
              : "text-primary border-2 border-opacity-60 border-dashed border-primary"
              }`}>
              <p className="font-medium">
                {data.type == "answer" ? "Resposta" : "Pergunta"}
              </p>
            </div>

            <div className="my-auto">
              {cursor ? (
                <p
                  className="text-primary font-bold text-base underline transition-all hover:opacity-80"
                  onClick={handleShowMore}
                >
                  Ver mais
                </p>
              ) : (
                <p className="line-clamp-2 text-left text-primary font-bold text-sm">
                  {data.content}
                </p>
              )}
            </div>
          </div>
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
    </>
  );
}