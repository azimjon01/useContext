import { createContext } from "react";

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContexe = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});
