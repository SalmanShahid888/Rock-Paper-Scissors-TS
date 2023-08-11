import { Button } from "../components/ui/button";
import { Rock, Paper, Scissors } from "../components/SvgButtons";
import { cn, randomComputerChoice } from "../lib/utils";
import { useStore } from "../zustand/store";
import { useState } from "react";

const Computer = () => {
  const [render, setRender] = useState(false);

  const components = {
    rock: <Rock />,
    paper: <Paper />,
    scissors: <Scissors />,
  };

  const robot1Choice = randomComputerChoice();
  const robot2Choice = randomComputerChoice();

  return (
    <>
      <div className="flex flex-row gap-40 justify-center items-center mt-20">
        <div className="flex flex-col justify-between items-center">
          <h2 className="text-white font-black text-3xl font-dmSans">
            Robot X picked
          </h2>
          <div
            className={cn(
              "mt-8",
              !render ? "animate-enteranceRight" : "animate-enteranceLeft"
            )}
          >
            {/* //TODO: Animate this */}
            {components[robot1Choice.toString() as keyof typeof components]}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <GameResult choiceOne={robot1Choice} choiceTwo={robot2Choice} />
          <Button
            variant={"default"}
            className="text-black font-bold text-base bg-white hover:bg-white/80 mt-5"
            onClick={() => {
              setRender(!render);
            }}
          >
            Play Again
          </Button>
        </div>
        <div className="flex flex-col justify-between items-center">
          <h2 className="text-white font-black text-3xl font-dmSans">
            Robot Y picked
          </h2>
          <div
            className={cn(
              "mt-8",
              !render ? "animate-enteranceLeft" : "animate-enteranceRight"
            )}
          >
            {/* //TODO: Animate this */}
            {components[robot2Choice.toString() as keyof typeof components]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Computer;

function GameResult({
  choiceOne,
  choiceTwo,
}: {
  choiceOne?: string;
  choiceTwo: string;
}) {
  const increaseRobotXScore = useStore((store) => store.increaseRobotXScore);
  const increaseRobotYScore = useStore((store) => store.increaseRobotYScore);
  const result =
    choiceOne === choiceTwo
      ? "Draw!"
      : (choiceOne === "rock" && choiceTwo === "scissors") ||
        (choiceOne === "paper" && choiceTwo === "rock") ||
        (choiceOne === "scissors" && choiceTwo === "paper")
      ? "Robot X wins!"
      : "Robot Y wins!";
  if (result === "Robot X wins!") {
    increaseRobotXScore();
  } else if (result === "Robot Y wins!") {
    increaseRobotYScore();
  } else {
    console.log(
      "Game Result neither resulted in Robot X wins nor Robot Y wins"
    );
  }
  return <p className="text-white text-xl md:text-lg">{result}</p>;
}
