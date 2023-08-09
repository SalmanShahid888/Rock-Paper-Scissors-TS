import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";
export const PlayerChoice = React.createContext("");
const StartGame = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const location = useLocation();
  const playerMode = location.state;
  return (
    <>
      <PlayerChoice.Provider value={playerChoice}>
        <Header />
        {playerChoice === "" && playerMode === "single-player" ? (
          <>
            <p>Start Game</p>
            <Button
              variant={"outline"}
              size={"lg"}
              onClick={() => {
                setPlayerChoice("rock");
              }}
            >
              Rock
            </Button>
            <Button
              variant={"outline"}
              size={"lg"}
              onClick={() => {
                setPlayerChoice("paper");
              }}
            >
              Paper
            </Button>
            <Button
              variant={"outline"}
              size={"lg"}
              onClick={() => {
                setPlayerChoice("scissors");
              }}
            >
              Scissors
            </Button>
          </>
        ) : (
          <p>Player Choice: {playerChoice}</p>
        )}
      </PlayerChoice.Provider>
    </>
  );
};

export default StartGame;
