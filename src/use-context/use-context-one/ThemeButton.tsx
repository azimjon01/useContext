import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <button>Theme value:{theme}</button>
    </>
  );
};

export default ThemeButton;
