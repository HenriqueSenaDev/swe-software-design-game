import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Ranking } from "../types/game";
import { AcknowledgmentResponse } from "../types/libs/socket";
import { socket } from "../lib/socket-io";
import { CardPair } from "../types/cards";
import { AppContext } from "./app";

export type MatchStatus = "pending" | "active" | "ended";

export type GameContextReturnValue = {
  ranking: Ranking;
  matchStatus: MatchStatus;
  handleJoinGame: (
    teamName: string,
    callback?: (ack: AcknowledgmentResponse) => void,
  ) => void;
  answerQuestion: (
    difficulty: CardPair["level"],
    callback?: (ack: AcknowledgmentResponse) => void,
  ) => void;
  endGame: (callback?: (ack: AcknowledgmentResponse) => void) => void;
}

export const GameContext = createContext<GameContextReturnValue>(
  {} as GameContextReturnValue
);

export type GameContextProviderProps = {
  children?: ReactNode;
}

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [matchStatus, setMatchStatus] = useState<MatchStatus>("pending");
  const [ranking, setRanking] = useState<Ranking>([]);

  const teamRef = useRef<string>();
  const { setMessage } = useContext(AppContext);

  const handleJoinGame: GameContextReturnValue["handleJoinGame"] = (
    teamName,
    callback?,
  ) => {
    socket.emit("joinGame", { teamName }, (res: string) => {
      const ack: AcknowledgmentResponse = JSON.parse(res);

      if (ack.status == "error") {
        setMessage(ack.event);
      }
      else if (ack.status == "received" && callback) {
        socket.emit("seeRanking");
        teamRef.current = teamName;

        callback(ack);
      }
    });
  }

  const answerQuestion: GameContextReturnValue["answerQuestion"] = (
    difficulty,
    callback,
  ) => {
    const payload = {
      teamName: teamRef.current,
      difficulty,
    }

    socket.emit("answerQuestion", payload, (res: string) => {
      const ack: AcknowledgmentResponse = JSON.parse(res);

      if (ack.status == "received" && callback) {
        callback(ack);
      }
    });
  }

  const endGame: GameContextReturnValue["endGame"] = (
    callback,
  ) => {
    socket.emit("endGame", (res: string) => {
      const ack: AcknowledgmentResponse = JSON.parse(res);

      if (ack.status == "received" && callback) {
        callback(ack);
      }
    });
  }

  useEffect(() => {
    socket.on("connect_error", (error) => {
      console.log(`Erro na conexão: ${error.message}`);
    });

    socket.on("availableMatch", (hasMatchOnServer: boolean) => {
      if (hasMatchOnServer) setMatchStatus("active");
    });

    socket.on("showRanking", (data: Ranking) => {
      setRanking(data);
    });

    socket.on("gameEnded", () => {
      setMatchStatus("ended");
    });
  }, []);

  return (
    <GameContext.Provider value={{
      matchStatus,
      ranking,
      handleJoinGame,
      answerQuestion,
      endGame,
    }}>
      {children}
    </GameContext.Provider>
  );
}