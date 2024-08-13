import { AppContextProvider } from "./contexts/app";
import { GameContextProvider } from "./contexts/game";
import { AppRouterProvider } from "./routes";
import "./styles/utils.css";
import "./styles/global.css";

export const App = () => {
  return (
    <AppContextProvider>
      <GameContextProvider>
        <AppRouterProvider />
      </GameContextProvider>
    </AppContextProvider>
  );
}