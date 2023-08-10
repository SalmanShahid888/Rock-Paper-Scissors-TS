import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import ModeSwitcher from "../components/ModeSwitcher";
import { Rock, Paper, Scissors } from "../components/SvgButtons";
export const PlayerChoice = React.createContext("");
const StartGame = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const location = useLocation();
  const playerMode = location.state;
  return (
    <>
      <PlayerChoice.Provider value={playerChoice}>
        <Header />
        {playerChoice === "" ? (
          <div className="flex flex-col mt-20 justify-center items-center gap-20">
            <h2 className="font-bold text-4xl font-dmSans text-white uppercase text-center">
              pick your choice
            </h2>
            <div className="w-full flex flex-row justify-center items-center mt-10">
              <Button
                size={"lg"}
                onClick={() => {
                  setPlayerChoice("rock");
                }}
                className="hover:-translate-x-2 hover:-translate-y-2 transition-all p-0"
              >
                <Rock />
              </Button>
              <div className="bg-purple-950/30 h-4 w-32"></div>
              <Button
                size={"lg"}
                onClick={() => {
                  setPlayerChoice("paper");
                }}
                className="hover:-translate-x-2 hover:-translate-y-2 transition-all p-0"
              >
                <Paper />
              </Button>
              <div className="bg-purple-950/30 h-4 w-32"></div>
              <Button
                size={"lg"}
                onClick={() => {
                  setPlayerChoice("scissors");
                }}
                className="hover:-translate-x-2 hover:-translate-y-2 transition-all p-0"
              >
                <Scissors />
              </Button>
            </div>
          </div>
        ) : (
          <ModeSwitcher playerChoice={playerChoice} playerMode={playerMode} />
        )}
      </PlayerChoice.Provider>
    </>
  );
};

export default StartGame;
