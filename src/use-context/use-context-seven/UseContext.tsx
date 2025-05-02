import { createContext } from "react";

interface UseContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const UseContext = createContext<UseContextProps>({
  theme: "light",
  toggleTheme: () => {},
});
