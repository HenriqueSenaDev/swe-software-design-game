import { GameContextProvider } from "./contexts/game";
import { AppRouterProvider } from "./routes";
import "./styles/utils.css";
import "./styles/global.css";

export const App = () => {
  return (
    <GameContextProvider>
      <AppRouterProvider />
    </GameContextProvider>
  );
}