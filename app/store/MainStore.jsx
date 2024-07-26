import create from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      transactions: [],
      increaseCount: () => set((state) => ({ count: state.count + 1 })),
      decreaseCount: () => set((state) => ({ count: state.count - 1 })),
      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [transaction, ...state.transactions],
        })),

      clearStore: () => set({ transactions: [] }),
    }),
    {
      name: "main-stores", // unique name
      getStorage: () => AsyncStorage, // use AsyncStorage for persistence
    }
  )
);

export default useStore;
