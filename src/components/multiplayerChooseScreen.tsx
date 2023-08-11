import { useState } from "react";

import { Button } from "../components/ui/button";
import { Rock, Paper, Scissors } from "../components/SvgButtons";
import { useStore } from "../zustand/store";

export const MultiPlayerChooseScreen = () => {
  const [turn, setTurn] = useState("playerOne");
  const setPlayerOneChoice = useStore((store) => store.setPlayerChoice);
  const setPlayerTwoChoice = useStore((store) => store.setPlayerTwoChoice);

  const handleChoice = (choice: string, turn: string) => {
    if (turn === "playerOne") {
      setPlayerOneChoice(choice);
      setTurn("playerTwo");
    } else if (turn === "playerTwo") {
      setPlayerTwoChoice(choice);
    }
  };
  const playerOneChoice = useStore((store) => store.playerChoice);
  return (
    <div className="flex flex-col md:mt-20 mt-10 justify-center items-center md:gap-20 gap-5">
      <h2 className="font-bold text-4xl font-dmSans text-white uppercase text-center">
        {playerOneChoice === ""
          ? "Player One Choose ..."
          : "Player Two Choose ..."}
      </h2>
      <div className="w-full flex md:flex-row flex-col justify-center items-center mt-10 gap-32 md:gap-0">
        <Button
          size={"lg"}
          onClick={() => {
            handleChoice("rock", turn);
          }}
          className="transition-all p-0"
        >
          <Rock />
        </Button>
        <div className="bg-purple-950/30 md:h-4 md:w-32 hidden md:block"></div>
        <Button
          size={"lg"}
          onClick={() => {
            handleChoice("paper", turn);
          }}
          className="transition-all p-0"
        >
          <Paper />
        </Button>
        <div className="bg-purple-950/30 md:h-4 md:w-32 hidden md:block"></div>
        <Button
          size={"lg"}
          onClick={() => {
            handleChoice("scissors", turn);
          }}
          className="transition-all p-0"
        >
          <Scissors />
        </Button>
      </div>
    </div>
  );
};
