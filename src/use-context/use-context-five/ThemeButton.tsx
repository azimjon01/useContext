import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button onClick={toggleTheme}>{theme}</button>
    </>
  );
};
