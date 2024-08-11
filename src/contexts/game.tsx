import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { Ranking } from "../types/game";
import { AcknowledgmentResponse } from "../types/libs/socket";
import { socket } from "../lib/socket-io";
import { CardPair } from "../types/cards";

export type GameContextReturnValue = {
  ranking: Ranking;
  handleJoinGame: (
    teamName: string,
    callback?: (ack: AcknowledgmentResponse) => void,
  ) => void;
  answerQuestion: (
    difficulty: CardPair["level"],
    callback?: (ack: AcknowledgmentResponse) => void,
  ) => void;
}

export const GameContext = createContext<GameContextReturnValue>(
  {} as GameContextReturnValue
);

export type GameContextProviderProps = {
  children: ReactNode;
}

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [ranking, setRanking] = useState<Ranking>([]);
  const teamRef = useRef<string>();

  const handleJoinGame: GameContextReturnValue["handleJoinGame"] = (
    teamName,
    callback?,
  ) => {
    socket.emit("joinGame", { teamName }, (res: string) => {
      const ack: AcknowledgmentResponse = JSON.parse(res);

      if (ack.status == "received" && callback) {
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

  useEffect(() => {
    socket.on("connect_error", (error) => {
      console.log(`Erro na conexão: ${error.message}`);
    });
  }, []);

  return (
    <GameContext.Provider value={{
      ranking,
      handleJoinGame,
      answerQuestion,
    }}>
      {children}
    </GameContext.Provider>
  );
}