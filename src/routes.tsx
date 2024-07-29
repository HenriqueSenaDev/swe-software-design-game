
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Game } from "./pages/game";
import { Login } from "./pages/login";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "game",
    element: <Game />,
  },
]);

export const AppRouterProvider = () => <RouterProvider router={routerConfig} />