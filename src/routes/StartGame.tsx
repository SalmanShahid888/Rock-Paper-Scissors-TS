import React, { useState } from "react";
import { Button } from "../components/ui/button";
export const PlayerChoice = React.createContext("");
const StartGame = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  return (
    <>
      <PlayerChoice.Provider value={playerChoice}>
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
      </PlayerChoice.Provider>
    </>
  );
};

export default StartGame;
