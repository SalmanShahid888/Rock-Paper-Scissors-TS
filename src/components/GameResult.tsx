import { useStore } from "../zustand/store";

export function GameResult({
  choiceOne,
  choiceTwo,
}: {
  choiceOne?: string;
  choiceTwo: string;
}) {
  const increaseScore = useStore((store) => store.increaseScore);
  const result =
    choiceOne === choiceTwo
      ? "It's a tie!"
      : (choiceOne === "rock" && choiceTwo === "scissors") ||
        (choiceOne === "paper" && choiceTwo === "rock") ||
        (choiceOne === "scissors" && choiceTwo === "paper")
      ? "Player wins!"
      : "Computer wins!";
  if (result === "Player wins!") {
    increaseScore();
  }
  return <p className="text-white">{result}</p>;
}
