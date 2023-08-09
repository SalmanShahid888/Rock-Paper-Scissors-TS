import { FC } from "react";

interface ModeSwitcherProps {
  playerMode: string;
  playerChoice: string;
}

const ModeSwitcher: FC<ModeSwitcherProps> = ({ playerMode, playerChoice }) => {
  switch (playerMode) {
    case "single-player":
      return (
        <>
          <p>Player Choice: {playerChoice}</p>
        </>
      );
    case "multi-player":
      return (
        <>
          <p>Player Choice: {playerChoice}</p>
        </>
      );
    case "computer-computer":
      return (
        <>
          <p>Player Choice: {playerChoice}</p>
        </>
      );
  }
};

export default ModeSwitcher;
