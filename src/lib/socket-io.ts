import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_BACKEND_HOST, {
  transports: ['websocket'],
  reconnectionDelayMax: 10000,
});

