import { create } from "zustand";
import { persist } from "zustand/middleware";


interface TypeData {
  theme: boolean ,
  updateTheme : any
}

const myData = create<TypeData>()(
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
