
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Game } from "./pages/game";
import { Login } from "./pages/login";
import { Result } from "./pages/result";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "game",
    element: <Game />,
  },
  {
    path: "result",
    element: <Result />,
  },
]);

export const AppRouterProvider = () => <RouterProvider router={routerConfig} />