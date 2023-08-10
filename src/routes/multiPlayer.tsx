import { FC } from "react";

interface MultiPlayerProps {
  playerChoice?: string;
}

const Multiplayer: FC<MultiPlayerProps> = ({ playerChoice }) => {
  return (
    <>
      <p>MultiPlayer Screen {playerChoice}</p>
    </>
  );
};

export default Multiplayer;
