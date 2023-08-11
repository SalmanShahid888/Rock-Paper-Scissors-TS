import { Header } from "../components/Header";
import ModeSwitcher from "../components/ModeSwitcher";
import { useStore } from "../zustand/store";
import { Choose } from "./choose";

const StartGame = () => {
  const playerChoice = useStore((store) => store.playerChoice);
  const playerMode = useStore((store) => store.playerMode);
  if (playerMode === "singleplayer" && playerChoice === "") {
    return (
      <>
        <Header />
        {playerChoice === "" ? (
          <Choose />
        ) : (
          <ModeSwitcher playerChoice={playerChoice} playerMode={playerMode} />
        )}
      </>
    );
  } else {
    return (
      <>
        <Header />
        <ModeSwitcher playerChoice={playerChoice} playerMode={playerMode} />
      </>
    );
  }
};

export default StartGame;
