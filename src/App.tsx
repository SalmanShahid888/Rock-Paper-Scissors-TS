import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { useStore } from "./zustand/store";
function App() {
  const navigate = useNavigate();

  const playerMode = useStore((store) => store.setPlayerMode);

  const handlePlayerMode = (mode: string) => {
    playerMode(mode);
    navigate(`/startgame/${mode}`);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-16 md:mt-24">
          <h1 className="text-4xl font-dmSans font-black text-center text-white italic leading-loose">
            Welcome to <br /> Rock 👊 Paper ✋ and Scissors ✌
          </h1>
          <h5 className="text-white text-5xl font-bangers text-center">
            Pick your Poison ☣️
          </h5>
        </div>
        <div className="flex flex-col justify-center items-center mt-12 gap-8">
          <Button
            variant="outline"
            size="lg"
            className="text-lg text-white hover:bg-white hover:text-black font-dmSans md:px-[82px] px-4"
            onClick={() => handlePlayerMode("singleplayer")}
          >
            🧑 Player Vs Computer 🤖
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg text-white hover:bg-white hover:text-black font-dmSans md:px-[100px] px-9"
            onClick={() => handlePlayerMode("multiplayer")}
          >
            🧑 Player Vs Player 🧑
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg text-white hover:bg-white hover:text-black font-dmSans md:px-16 px-0"
            onClick={() => handlePlayerMode("computer")}
          >
            🤖 Computer Vs Computer 🤖
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
