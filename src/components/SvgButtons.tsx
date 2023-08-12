import { PaperSvg, RockSvg, ScissorsSvg } from "./svg";

const Rock = () => {
  return (
    <>
      <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 md:h-36 md:w-36 h-28 w-28">
        <div className="flex justify-center items-center bg-white rounded-full md:h-28 md:w-28 h-[86px] w-[86px] shadow-inner">
          <RockSvg />
        </div>
      </div>
    </>
  );
};
const Paper = () => {
  return (
    <>
      <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 md:h-36 md:w-36 h-28 w-28 shadow-2xl">
        <div className="flex justify-center items-center bg-white rounded-full md:h-28 md:w-28 h-[86px] w-[86px] shadow-inner">
          <PaperSvg className="h-14 w-14" />
        </div>
      </div>
    </>
  );
};
const Scissors = () => {
  return (
    <>
      <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 md:h-36 md:w-36 h-28 w-28 shadow-2xl">
        <div className="flex justify-center items-center bg-white rounded-full md:h-28 md:w-28 h-[86px] w-[86px] shadow-inner">
          <ScissorsSvg className="h-14 w-14 -rotate-45" />
        </div>
      </div>
    </>
  );
};

export { Rock, Paper, Scissors };
