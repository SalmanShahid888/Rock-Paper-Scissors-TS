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
    <div className="flex flex-col mt-20 justify-center items-center gap-20">
      <h2 className="font-bold text-4xl font-dmSans text-white uppercase text-center">
        {playerOneChoice === ""
          ? "Player One Choose ..."
          : "Player Two Choose ..."}
      </h2>
      <div className="w-full flex flex-row justify-center items-center mt-10">
        <Button
          size={"lg"}
          onClick={() => {
            handleChoice("rock", turn);
          }}
          className="hover:-translate-x-2 hover:-translate-y-2 transition-all p-0"
        >
          <Rock />
        </Button>
        <div className="bg-purple-950/30 h-4 w-32"></div>
        <Button
          size={"lg"}
          onClick={() => {
            handleChoice("paper", turn);
          }}
          className="hover:-translate-x-2 hover:-translate-y-2 transition-all p-0"
        >
          <Paper />
        </Button>
        <div className="bg-purple-950/30 h-4 w-32"></div>
        <Button
          size={"lg"}
          onClick={() => {
            handleChoice("scissors", turn);
          }}
          className="hover:-translate-x-2 hover:-translate-y-2 transition-all p-0"
        >
          <Scissors />
        </Button>
      </div>
    </div>
  );
};
