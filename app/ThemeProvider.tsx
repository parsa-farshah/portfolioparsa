"use client";

import { useEffect } from "react";
import myData from "./store";

export default function ThemeProvider({ initialTheme, children } : any) {
  const setTheme = myData((s) => s.updateTheme);

  useEffect(() => {
    setTheme(initialTheme);
  }, [initialTheme, setTheme]);

  return children;
}
