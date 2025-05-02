import { useContext } from "react";
import { UseContext } from "./UseContext";

export const UseButton = () => {
  const { theme, toggleTheme } = useContext(UseContext);
  return (
    <>
      <button onClick={toggleTheme}>Qiymat: {theme}</button>
    </>
  );
};
