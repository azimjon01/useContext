import React, { useState } from "react";
import { UseContext } from "./UseContext";

interface UseProviderProps {
  children: React.ReactNode;
}

export const UseProvider = ({ children }: UseProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <UseContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </UseContext.Provider>
    </>
  );
};
