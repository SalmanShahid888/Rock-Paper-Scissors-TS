import { FC } from "react";
import Singleplayer from "../routes/singlePlayer";
import Multiplayer from "../routes/multiPlayer";
import Computer from "../routes/computer";

interface ModeSwitcherProps {
  playerMode: string;
  playerChoice: string;
}

const ModeSwitcher: FC<ModeSwitcherProps> = ({ playerMode, playerChoice }) => {
  switch (playerMode) {
    case "singleplayer":
      return (
        <>
          <Singleplayer playerChoice={playerChoice} />
        </>
      );
    case "multiplayer":
      return (
        <>
          <Multiplayer playerChoice={playerChoice} />
        </>
      );
    case "computer":
      return (
        <>
          <Computer />
        </>
      );
  }
};

export default ModeSwitcher;
