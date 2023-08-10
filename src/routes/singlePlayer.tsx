import { FC } from "react";

interface SinglePlayerProps {
  playerChoice?: string;
}

const Singleplayer: FC<SinglePlayerProps> = ({ playerChoice }) => {
  return (
    <>
      <p>SinglePlayer Screen {playerChoice}</p>
    </>
  );
};

export default Singleplayer;
