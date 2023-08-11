import { useStore } from "../zustand/store";

export function GameResult({
  choiceOne,
  choiceTwo,
}: {
  choiceOne?: string;
  choiceTwo: string;
}) {
  const increasePlayerOneScore = useStore(
    (store) => store.increasePlayerOneScore
  );
  const increaseRobotXScore = useStore((store) => store.increaseRobotXScore);
  const result =
    choiceOne === choiceTwo
      ? "It's a tie!"
      : (choiceOne === "rock" && choiceTwo === "scissors") ||
        (choiceOne === "paper" && choiceTwo === "rock") ||
        (choiceOne === "scissors" && choiceTwo === "paper")
      ? "Player wins!"
      : "Computer wins!";
  if (result === "Player wins!") {
    increasePlayerOneScore();
  } else if (result === "Computer wins!") {
    increaseRobotXScore();
  } else {
    console.log(
      "Game Result neither resulted in Player wins nor Computer wins"
    );
  }
  return <p className="text-white">{result}</p>;
}
