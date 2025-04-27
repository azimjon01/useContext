import React, { useState } from "react";
import { ThemeContexe } from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContexe.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContexe.Provider>
  );
};
