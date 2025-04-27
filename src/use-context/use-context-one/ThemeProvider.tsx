import React from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = "dark";
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
