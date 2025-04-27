import { useContext } from "react";
import { ThemeContext } from "../use-context-two/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button onClick={toggleTheme}>Theme value {theme}</button>
    </>
  );
};

export default ThemeButton;
