import { create } from "zustand";

interface Store {
  playerMode: string;
  playerChoice: string;
  playerTwoChoice: string;
  playerOneScore: number;
  playerTwoScore: number;
  robotXScore: number;
  robotYScore: number;
  setPlayerMode: (mode: string) => void;
  setPlayerChoice: (choice: string) => void;
  increasePlayerOneScore: () => void;
  increasePlayerTwoScore: () => void;
  setPlayerTwoChoice: (choice: string) => void;
  increaseRobotXScore: () => void;
  increaseRobotYScore: () => void;
}
const store = create<Store>((set) => ({
  playerMode: "",
  playerChoice: "",
  playerTwoChoice: "",
  playerOneScore: 0,
  playerTwoScore: 0,
  robotXScore: 0,
  robotYScore: 0,
  setPlayerMode: (mode: string) => set({ playerMode: mode }),
  setPlayerChoice: (choice: string) => set({ playerChoice: choice }),
  setPlayerTwoChoice: (choice: string) => set({ playerTwoChoice: choice }),
  increasePlayerOneScore: () =>
    set((state) => {
      return {
        ...state,
        playerOneScore: state.playerOneScore + 1,
      };
    }),
  increasePlayerTwoScore: () =>
    set((state) => {
      return {
        ...state,
        playerTwoScore: state.playerTwoScore + 1,
      };
    }),
  increaseRobotXScore: () =>
    set((state) => {
      return {
        ...state,
        robotXScore: state.robotXScore + 1,
      };
    }),
  increaseRobotYScore: () =>
    set((state) => {
      return {
        ...state,
        robotYScore: state.robotYScore + 1,
      };
    }),
}));

export const useStore = store;
