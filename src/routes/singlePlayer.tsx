import { FC } from "react";
interface SinglePlayerProps {
  playerChoice?: string;
}

import { Rock, Paper, Scissors } from "../components/SvgButtons";
import { Button } from "../components/ui/button";
import { useStore } from "../zustand/store";
import { randomComputerChoice } from "../lib/utils";
import { GameResult } from "../components/GameResult";

const Singleplayer: FC<SinglePlayerProps> = ({ playerChoice }) => {
  const setPlayerChoice = useStore((store) => store.setPlayerChoice);
  const playerChoiceSvg = {
    rock: <Rock />,
    paper: <Paper />,
    scissors: <Scissors />,
  };

  const computerChoice = randomComputerChoice();

  const playAgainHandler = () => {
    setPlayerChoice("");
  };

  return (
    <>
      <div className="flex md:flex-row flex-col md:gap-40 gap-5 justify-center items-center md:mt-20 mt-10">
        <div className="flex flex-col justify-between items-center gap-5 md:gap-0">
          <h2 className="text-white font-black md:text-3xl text-xl font-dmSans">
            You Picked
          </h2>
          <div className="md:mt-8 animate-enteranceLeft animate-spin">
            {/* //TODO: Animate this */}
            {playerChoiceSvg[playerChoice as keyof typeof playerChoiceSvg]}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <GameResult choiceOne={playerChoice} choiceTwo={computerChoice} />
          <Button
            variant={"default"}
            className="text-black font-bold text-base bg-white hover:bg-white/80 mt-5"
            onClick={playAgainHandler}
          >
            Play Again
          </Button>
        </div>
        <div className="flex md:flex-col flex-col-reverse justify-between items-center gap-4">
          <h2 className="text-white font-black md:text-3xl text-xl font-dmSans text-center">
            Robot X Picked
          </h2>
          <div className="md:mt-8 animate-enteranceRight animate-spin">
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
