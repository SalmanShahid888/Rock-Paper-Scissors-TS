import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import SinglePlayer from "./routes/singlePlayer.tsx";
import Multiplayer from "./routes/multiPlayer.tsx";
import Computer from "./routes/computer.tsx";
import StartGame from "./routes/StartGame.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<App />} errorElement={<ErrorPage />} />
      <Route path="choose" element={<StartGame />}>
        <Route path="singleplayer" element={<SinglePlayer />} />
        <Route path="multiplayer" element={<Multiplayer />} />
        <Route path="computer" element={<Computer />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
