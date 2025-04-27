import { useContext } from "react";
import { ThemeContexe } from "./ThemeContext";

export const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContexe);
  return (
    <>
      <button onClick={toggleTheme}>VALUE:{theme}</button>
    </>
  );
};
