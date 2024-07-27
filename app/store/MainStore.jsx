import create from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      mainBalance: 0,
      count: 0,
      transactions: [],
      cards: [
        {
          currency: "INR",
          balance: "₹ 40,500.80",
          accountNumber: "**** 9934",
          validThru: "05/28",
        },
        {
          currency: "USD",
          balance: "$ 1,200.50",
          accountNumber: "**** 5678",
          validThru: "12/24",
        },
        {
          currency: "EUR",
          balance: "€ 3,300.75",
          accountNumber: "**** 1234",
          validThru: "08/26",
        },
      ],

      increaseCount: () => set((state) => ({ count: state.count + 1 })),
      decreaseCount: () => set((state) => ({ count: state.count - 1 })),
      addTransaction: (transaction) =>
        set((state) => {
          const { amount, credit } = transaction[0];

          // Update mainBalance based on the credit flag
          const newBalance = credit
            ? state.mainBalance + amount
            : state.mainBalance - amount;

          return {
            transactions: [transaction, ...state.transactions],
            mainBalance: newBalance,
          };
        }),
      clearStore: () => set({ transactions: [], mainBalance: 0 }),
      setBalance: (balance) =>
        set((state) => ({
          mainBalance: balance,
        })),
      addCard: (cardData) =>
        set((state) => ({
          cards: [cardData, ...state.cards],
        })),
      updateCard: (index, cardData) =>
        set((state) => {
          const updatedCards = [...state.cards];
          updatedCards[index] = cardData;
          return { cards: updatedCards };
        }),
      removeCard: (index) =>
        set((state) => {
          const updatedCards = state.cards.filter((_, i) => i !== index);
          return { cards: updatedCards };
        }),
    }),
    {
      name: "main-stores", // unique name
      getStorage: () => AsyncStorage, // use AsyncStorage for persistence
    }
  )
);

export default useStore;
