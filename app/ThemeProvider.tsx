"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";

export default function ThemeProvider({ initialTheme, children }) {
  const setTheme = myData((s) => s.setTheme);

  useEffect(() => {
    setTheme(initialTheme);
  }, [initialTheme, setTheme]);

  return children;
}
