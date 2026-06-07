"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type ThemeContextValue = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(saved ? saved === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const value = useMemo(
    () => ({
      isDark,
      toggleTheme: () => setIsDark((current) => !current)
    }),
    [isDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
