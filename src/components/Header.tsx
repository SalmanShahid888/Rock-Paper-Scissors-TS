import { useStore } from "../zustand/store";
import { Button } from "./ui/button";

export const Header = () => {
  const score = useStore((store) => store.score);
  return (
    <>
      <div className="flex justify-center flex-row px-60 mt-10">
        <div className="flex flex-row justify-between h-40 w-full border-white border-2 rounded-3xl p-5">
          <div className="flex flex-col bg-white rounded-lg h-28 w-28 mr-5 justify-between items-center py-4">
            <p className="text-blue-700 text-3xl font-black font-bangers">
              Score
            </p>
            <p className="text-black font-black text-3xl font-bangers">
              {score}
            </p>
          </div>
          <h2 className="font-bangers text-white text-4xl font-bold text-center">
            Rock <br /> Paper <br /> Scissors
          </h2>
          <div className="flex flex-col bg-white rounded-lg h-28 w-28 mr-5 justify-between items-center py-4">
            <p className="text-blue-700 text-3xl font-black font-bangers">
              Score
            </p>
            <p className="text-black font-black text-3xl font-bangers">
              {score}
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Button
          variant={"outline"}
          size={"sm"}
          className="text-white hover:bg-red-600 hover:border-none absolute right-16 bottom-28 transition-colors duration-500 ease-in-out"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Exit Game
        </Button>
      </div>
    </>
  );
};
