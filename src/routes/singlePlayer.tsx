import { FC } from "react";

interface SinglePlayerProps {
  playerChoice?: string;
}

import { Rock, Paper, Scissors } from "../components/SvgButtons";
import { Button } from "../components/ui/button";

const Singleplayer: FC<SinglePlayerProps> = ({ playerChoice }) => {
  const playerChoiceSvg = {
    rock: <Rock />,
    paper: <Paper />,
    scissors: <Scissors />,
  };

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
          <p className="text-white">Result</p>
          <Button
            variant={"default"}
            className="text-black font-bold text-base bg-white hover:bg-white/80 mt-5"
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
            {playerChoiceSvg["scissors"]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleplayer;
