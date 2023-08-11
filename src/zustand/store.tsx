import { create } from "zustand";

interface Store {
  playerMode: string;
  playerChoice: string;
  score: number;
  playerTwoChoice: string;
  playerOneScore: number;
  playerTwoScore: number;
  setPlayerMode: (mode: string) => void;
  setPlayerChoice: (choice: string) => void;
  increaseScore: () => void;
  setPlayerTwoChoice: (choice: string) => void;
  setPlayerOneScore: (score: number) => void;
  setPlayerTwoScore: (score: number) => void;
}
const store = create<Store>((set) => ({
  playerMode: "",
  playerChoice: "",
  score: 0,
  playerTwoChoice: "",
  playerOneScore: 0,
  playerTwoScore: 0,
  setPlayerMode: (mode: string) => set({ playerMode: mode }),
  setPlayerChoice: (choice: string) => set({ playerChoice: choice }),
  increaseScore: () =>
    set((state) => {
      return {
        ...state,
        score: state.score + 1,
      };
    }),
  setPlayerTwoChoice: (choice: string) => set({ playerTwoChoice: choice }),
  setPlayerOneScore: (score: number) => set({ playerOneScore: score }),
  setPlayerTwoScore: (score: number) => set({ playerTwoScore: score }),
}));

export const useStore = store;
