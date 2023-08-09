import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "./components/ui/button";

export const PlayerMode = React.createContext("");
function App() {
  const navigate = useNavigate();
  const [playerChoice, setPlayerChoice] = useState("");
  const handlePlayerMode = (mode: string) => {
    console.log(mode);
    setPlayerChoice(mode);
    navigate(`/start-game/${mode}`);
  };
  return (
    <>
      <PlayerMode.Provider value={playerChoice}>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-16 mt-40">
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
              className="text-lg text-white hover:bg-white hover:text-black font-dmSans px-[82px]"
              onClick={() => handlePlayerMode("single-player")}
            >
              🧑 Player Vs Computer 🤖
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg text-white hover:bg-white hover:text-black font-dmSans px-[100px]"
              onClick={() => handlePlayerMode("multi-player")}
            >
              🧑 Player Vs Player 🧑
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg text-white hover:bg-white hover:text-black font-dmSans px-16"
              onClick={() => handlePlayerMode("computer-computer")}
            >
              🤖 Computer Vs Computer 🤖
            </Button>
          </div>
        </div>
      </PlayerMode.Provider>
    </>
  );
}

export default App;
