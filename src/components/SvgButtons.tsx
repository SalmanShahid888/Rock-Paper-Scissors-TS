import { PaperSvg, RockSvg, ScissorsSvg } from "./svg";

const Rock = () => {
  return (
    <>
      <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 md:h-36 md:w-36 h-20 w-20">
        <div className="flex justify-center items-center bg-white rounded-full md:h-28 md:w-28 h-16 w-16 shadow-inner">
          <RockSvg className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]" />
        </div>
      </div>
    </>
  );
};
const Paper = () => {
  return (
    <>
      <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 md:h-36 md:w-36 h-20 w-20 shadow-2xl">
        <div className="flex justify-center items-center bg-white rounded-full md:h-28 md:w-28 h-16 w-16 shadow-inner">
          <PaperSvg className="md:h-14 md:w-14 h-10 w-10" />
        </div>
      </div>
    </>
  );
};
const Scissors = () => {
  return (
    <>
      <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 md:h-36 md:w-36 h-20 w-20 shadow-2xl">
        <div className="flex justify-center items-center bg-white rounded-full md:h-28 md:w-28 h-16 w-16 shadow-inner">
          <ScissorsSvg className="md:h-14 md:w-14 h-10 w-10 -rotate-45 " />
        </div>
      </div>
    </>
  );
};

export { Rock, Paper, Scissors };
