import { create } from "zustand";
import { persist } from "zustand/middleware";

const myData = create(
  persist(
    (set) => ({
      theme: true,
      updateTheme: () => set((state) => ({ theme: !state.theme })),
    }),
    {
      name: "theme-store",
    },
  ),
);

export default myData;
