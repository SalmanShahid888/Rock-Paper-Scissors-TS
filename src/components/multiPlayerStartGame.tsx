import { FC } from "react";
interface MultiPlayerStartGameProps {
  playerOneChoice: string;
  playerTwoChoice: string;
}

import { Rock, Paper, Scissors } from "../components/SvgButtons";
import { Button } from "../components/ui/button";
import { useStore } from "../zustand/store";
const MultiPlayerStartGame: FC<MultiPlayerStartGameProps> = ({
  playerOneChoice,
  playerTwoChoice,
}) => {
  const setPlayerOneChoice = useStore((store) => store.setPlayerChoice);
  const setPlayerTwoChoice = useStore((store) => store.setPlayerTwoChoice);
  const playerChoiceSvg = {
    rock: <Rock />,
    paper: <Paper />,
    scissors: <Scissors />,
  };

  const playAgainHandler = () => {
    setPlayerOneChoice("");
    setPlayerTwoChoice("");
  };

  return (
    <>
      <div className="flex md:flex-row flex-col md:gap-40 gap-10 justify-center items-center md:mt-20 mt-10">
        <div className="flex flex-col justify-between items-center gap-5 md:gap-0">
          <h2 className="text-white font-black text-3xl font-dmSans">
            Player One picked
          </h2>
          <div className="md:mt-8 animate-enteranceLeft animate-spin">
            {/* //TODO: Animate this */}
            {playerChoiceSvg[playerOneChoice as keyof typeof playerChoiceSvg]}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <GameResult choiceOne={playerOneChoice} choiceTwo={playerTwoChoice} />
          <Button
            variant={"default"}
            className="text-black font-bold text-base bg-white hover:bg-white/80 mt-5"
            onClick={playAgainHandler}
          >
            Play Again
          </Button>
        </div>
        <div className="flex md:flex-col flex-col-reverse justify-between items-center gap-4">
          <h2 className="text-white font-black text-3xl font-dmSans">
            Player Two picked
          </h2>
          <div className="md:mt-8 animate-enteranceRight animate-spin">
            {/* //TODO: Animate this */}
            {playerChoiceSvg[playerTwoChoice as keyof typeof playerChoiceSvg]}
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiPlayerStartGame;
function GameResult({
  choiceOne,
  choiceTwo,
}: {
  choiceOne?: string;
  choiceTwo: string;
}) {
  const increasePlayerOneScore = useStore(
    (store) => store.increasePlayerOneScore
  );
  const increasePlayerTwoScore = useStore(
    (store) => store.increasePlayerTwoScore
  );
  const result =
    choiceOne === choiceTwo
      ? "It's a tie!"
      : (choiceOne === "rock" && choiceTwo === "scissors") ||
        (choiceOne === "paper" && choiceTwo === "rock") ||
        (choiceOne === "scissors" && choiceTwo === "paper")
      ? "Player One wins!"
      : "Player Two wins!";
  if (result === "Player One wins!") {
    increasePlayerOneScore();
  } else if (result === "Player Two wins!") {
    increasePlayerTwoScore();
  } else {
    console.log(
      "Game Result neither resulted in Player wins nor Computer wins"
    );
  }
  return <p className="text-white text-xl md:text-lg">{result}</p>;
}
