import { FC } from "react";

interface SinglePlayerProps {
  playerChoice?: string;
}

const Singleplayer: FC<SinglePlayerProps> = ({ playerChoice }) => {
  return (
    <>
      <div className="flex flex-row gap-5 justify-center items-center">
        {playerChoice}
      </div>
    </>
  );
};

export default Singleplayer;
