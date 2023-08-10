import { create } from "zustand";

interface Store {
  playerMode: string;
  setPlayerMode: (mode: string) => void;
  playerChoice: string;
  setPlayerChoice: (choice: string) => void;
  score: number;
  increaseScore: () => void;
  playerTwoChoice: string;
  setPlayerTwoChoice: (choice: string) => void;
  playerOneScore: number;
  setPlayerOneScore: (score: number) => void;
  playerTwoScore: number;
  setPlayerTwoScore: (score: number) => void;
}

const store = create<Store>((set) => ({
  playerMode: "",
  setPlayerMode: (mode: string) => set({ playerMode: mode }),
  playerChoice: "",
  setPlayerChoice: (choice: string) => set({ playerChoice: choice }),
  score: 0,
  increaseScore: () =>
    set((state) => {
      return {
        ...state,
        score: state.score + 1,
      };
    }),
  playerTwoChoice: "",
  setPlayerTwoChoice: (choice: string) => set({ playerTwoChoice: choice }),
  playerOneScore: 0,
  setPlayerOneScore: (score: number) => set({ playerOneScore: score }),
  playerTwoScore: 0,
  setPlayerTwoScore: (score: number) => set({ playerTwoScore: score }),
}));

export const useStore = store;
