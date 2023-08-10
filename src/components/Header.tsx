import { useStore } from "../zustand/store";

export const Header = () => {
  const score = useStore((store) => store.score);
  return (
    <>
      <div className="flex justify-start px-60 mt-10">
        <div className="flex flex-row justify-between h-40 w-full border-white border-2 rounded-3xl p-5">
          <h2 className="font-bangers text-white text-4xl font-bold text-left">
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
    </>
  );
};
