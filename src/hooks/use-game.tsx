import { useEffect } from "react";
import { socket } from "../lib/socket-io"
import { useNavigate } from "react-router-dom";

export type UseGameReturnValue = {
  handleJoinGame: (teamName: string) => void;
}

export type AcknowledgmentResponse = {
  event: string;
  status: string;
}

export const useGame = () => {
  const navigate = useNavigate();

  const handleJoinGame = (teamName: string) => {
    socket.emit("joinGame", { teamName }, (res: string) => {
      const ack: AcknowledgmentResponse = JSON.parse(res);

      if (ack.status == "received") {
        navigate(`/game?player=${teamName}`);
      }
    });
  }

  useEffect(() => {
    socket.on("connect_error", (error) => {
      console.log(`Erro na conexão: ${error.message}`);
    });
  }, []);

  return { handleJoinGame };
}