import { Button } from "../components/ui/button";
import { Rock, Paper, Scissors } from "../components/SvgButtons";
import { useStore } from "../zustand/store";

export const Choose = () => {
  const playerChoice = useStore((store) => store.setPlayerChoice);
  const handleChoice = (choice: string) => {
    playerChoice(choice);
  };
  return (
    <div className="flex flex-col md:mt-20 mt-10 justify-center items-center md:gap-20 gap-5">
      <h2 className="font-bold text-4xl font-dmSans text-white uppercase text-center">
        pick your choice
      </h2>
      <div className="w-full flex md:flex-row flex-col justify-center items-center mt-10 gap-32 md:gap-0">
        <Button
          size={"lg"}
          onClick={() => {
            handleChoice("rock");
          }}
          className="hover:-translate-x-2 hover:-translate-y-2 transition-all p-0"
        >
          <Rock />
        </Button>
        <div className="bg-purple-950/30 md:h-4 md:w-32 hidden md:block"></div>
        <Button
          size={"lg"}
          onClick={() => {
            handleChoice("paper");
          }}
          className="hover:-translate-x-2 hover:-translate-y-2 transition-all p-0"
        >
          <Paper />
        </Button>
        <div className="bg-purple-950/30 md:h-4 md:w-32 hidden md:block"></div>
        <Button
          size={"lg"}
          onClick={() => {
            handleChoice("scissors");
          }}
          className="hover:-translate-x-2 hover:-translate-y-2 transition-all p-0"
        >
          <Scissors />
        </Button>
      </div>
    </div>
  );
};
