import { useStore } from "../zustand/store";
import { Button } from "./ui/button";

export const Header = () => {
  const playerMode = useStore((store) => store.playerMode);
  const playerOneScore = useStore((store) => store.playerOneScore);
  const playerTwoScore = useStore((store) => store.playerTwoScore);
  const robotXScore = useStore((store) => store.robotXScore);
  const robotYScore = useStore((store) => store.robotYScore);
  if (playerMode === "singleplayer" || playerMode === "computer") {
    return (
      <>
        <div className="flex justify-center flex-row md:px-60 md:mt-10">
          <div className="flex flex-row justify-between md:h-40 h-24 w-full border-white border-2 rounded-3xl md:p-5 pt-1">
            <div className="flex flex-col bg-white rounded-lg md:h-28 h-20 md:w-28 w-20 md:mr-5 ml-4 md:ml-0 justify-between items-center py-4">
              <p className="text-blue-700 md:text-3xl text-xl font-black font-bangers">
                {playerMode === "singleplayer" ? "Player" : "Robot X"}
              </p>
              <p className="text-black font-black text-3xl font-bangers">
                {playerMode === "singleplayer" ? playerOneScore : robotXScore}
              </p>
            </div>
            <h2 className="font-bangers text-white md:text-4xl text-xl font-bold text-center">
              Rock <br /> Paper <br /> Scissors
            </h2>
            <div className="flex flex-col bg-white rounded-lg md:h-28 h-20 md:w-28 w-20 mr-5 justify-between items-center py-4">
              <p className="text-red-700 md:text-3xl text-xl font-black font-bangers">
                {playerMode === "singleplayer" ? "Robot X" : "Robot Y"}
              </p>
              <p className="text-black font-black text-3xl font-bangers">
                {playerMode === "singleplayer" ? robotXScore : robotYScore}
              </p>
            </div>
          </div>
        </div>
        <div className="md:relative mt-5 flex justify-center items-center">
          <Button
            variant={"outline"}
            size={"sm"}
            className="text-white bg-red-600 hover:border-none hover:bg-red-600/70 md:absolute md:right-16 md:bottom-28 right-40 top-4 md:top-auto transition-all duration-500 ease-in-out"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Exit Game
          </Button>
        </div>
      </>
    );
  } else if (playerMode === "multiplayer") {
    return (
      <>
        <div className="flex justify-center md:flex-row flex-col md:px-60 md:mt-10">
          <div className="flex flex-row justify-between md:h-40 h-24 w-full border-white border-2 rounded-3xl md:p-5 pt-1">
            <div className="flex flex-col bg-white rounded-lg md:h-28 h-20 md:w-28 w-20 md:mr-5 ml-4 md:ml-0 justify-between items-center py-4">
              <p className="text-blue-700 md:text-3xl text-xl font-black font-bangers">
                Player 1
              </p>
              <p className="text-black font-black text-3xl font-bangers">
                {playerOneScore}
              </p>
            </div>
            <h2 className="font-bangers text-white md:text-4xl text-xl font-bold text-center">
              Rock <br /> Paper <br /> Scissors
            </h2>
            <div className="flex flex-col bg-white rounded-lg md:h-28 h-20 md:w-28 w-20 mr-5 justify-between items-center py-4">
              <p className="text-blue-700 md:text-3xl text-xl font-black font-bangers">
                Player 2
              </p>
              <p className="text-black font-black text-3xl font-bangers">
                {playerTwoScore}
              </p>
            </div>
          </div>
        </div>
        <div className="md:relative mt-5 flex justify-center items-center md:mt-0">
          <Button
            variant={"outline"}
            size={"sm"}
            className="text-white bg-red-600 hover:border-none hover:bg-red-600/70 md:absolute md:right-16 md:bottom-28 right-40 top-4 md:top-auto transition-all duration-500 ease-in-out"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Exit Game
          </Button>
        </div>
      </>
    );
  }
};
