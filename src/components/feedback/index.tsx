import { InfoIcon, XIcon } from "lucide-react";

interface FeedbackProps {
  message: string | null;
  cleanMessage: () => void;
}

export const Feedback = ({ message, cleanMessage }: FeedbackProps) => {
  return (
    <div
      className="flex items-center justify-between fixed bg-primary py-3 px-5 w-[90%] top-10 max-w-lg transition-all rounded-lg left-1/2 -translate-x-1/2"
      style={{
        transform: message ? "" : "translateY(-200px) translateX(-50%)",
      }}
    >
      <div className="flex items-center gap-3 flex-1">
        <InfoIcon color="white" size={25} />

        <p className="font-[Montserrat] font-semibold text-white text-base">
          {message}
        </p>
      </div>

      <button
        className="hover:opacity-60"
        onClick={cleanMessage}
      >
        <XIcon color="white" size={25} />
      </button>
    </div>
  );
}