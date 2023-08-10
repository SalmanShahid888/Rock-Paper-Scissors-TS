import { FC } from "react";
interface SinglePlayerProps {
  playerChoice?: string;
}

import { Rock, Paper, Scissors } from "../components/SvgButtons";
import { Button } from "../components/ui/button";
import { useStore } from "../zustand/store";

const Singleplayer: FC<SinglePlayerProps> = ({ playerChoice }) => {
  const increaseScore = useStore((store) => store.increaseScore);
  const setPlayerChoice = useStore((store) => store.setPlayerChoice);
  //const navigate = useNavigate();
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
    //TODO: (BUG-FIX)=> Adds Score when player looses and sometimes add 2 points when player wins
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

  const announceWinner = calculateWinner();

  const playAgainHandler = () => {
    setPlayerChoice("");
  };

  console.log(announceWinner);

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
          <p className="text-white">{announceWinner}</p>
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
