import { MultiPlayerChooseScreen } from "../components/multiplayerChooseScreen";
import { useStore } from "../zustand/store";
import MultiPlayerStartGame from "../components/multiPlayerStartGame";
const Multiplayer = () => {
  const playerOneChoice = useStore((store) => store.playerChoice);
  const playerTwoChoice = useStore((store) => store.playerTwoChoice);
  if (playerTwoChoice !== "" && playerOneChoice !== "") {
    return (
      <>
        <MultiPlayerStartGame
          playerOneChoice={playerOneChoice}
          playerTwoChoice={playerTwoChoice}
        />
      </>
    );
  } else {
    return (
      <>
        <MultiPlayerChooseScreen />
      </>
    );
  }
};

export default Multiplayer;
