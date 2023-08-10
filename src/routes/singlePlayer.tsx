import { FC } from "react";
interface SinglePlayerProps {
  playerChoice?: string;
}

import { Rock, Paper, Scissors } from "../components/SvgButtons";
import { Button } from "../components/ui/button";
import { useStore } from "../zustand/store";
import { useNavigate } from "react-router-dom";

const Singleplayer: FC<SinglePlayerProps> = ({ playerChoice }) => {
  const increaseScore = useStore((store) => store.increaseScore);
  const setPlayerChoice = useStore((store) => store.setPlayerChoice);
  const navigate = useNavigate();
  const playerChoiceSvg = {
    rock: <Rock />,
    paper: <Paper />,
    scissors: <Scissors />,
  };

  const generateComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  };

  const computerChoice = generateComputerChoice();

  const calculateWinner = () => {
    if (playerChoice === computerChoice) {
      return "It's a tie";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      increaseScore();
      return "You Win";
    } else {
      return "You Lose";
    }
  };

  const playAgainHandler = () => {
    setPlayerChoice("");
    navigate("/startgame/choose");
  };

  console.log(calculateWinner());

  return (
    <>
      <div className="flex flex-row gap-40 justify-center items-center mt-20">
        <div className="flex flex-col justify-between items-center">
          <h2 className="text-white font-black text-3xl font-dmSans">
            Player picked
          </h2>
          <div className="mt-8">
            {/* //TODO: Animate this */}
            {playerChoiceSvg[playerChoice as keyof typeof playerChoiceSvg]}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-white">
            {playerChoice === computerChoice
              ? "It's a tie"
              : (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "scissors" && computerChoice === "paper")
              ? "You Win"
              : "You Lose"}
          </p>
          <Button
            variant={"default"}
            className="text-black font-bold text-base bg-white hover:bg-white/80 mt-5"
            onClick={playAgainHandler}
          >
            Play Again
          </Button>
        </div>
        <div className="flex flex-col justify-between items-center">
          <h2 className="text-white font-black text-3xl font-dmSans">
            Computer picked
          </h2>
          <div className="mt-8">
            {/* //TODO: Animate this */}
            {
              playerChoiceSvg[
                computerChoice.toString() as keyof typeof playerChoiceSvg
              ]
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleplayer;
