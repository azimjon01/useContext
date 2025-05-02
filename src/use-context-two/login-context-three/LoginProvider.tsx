import { useState } from "react";
import { LoginContext } from "./LoginContext";

interface User {
  name: string;
  email: string;
}

interface LoginProviderProps {
  children: React.ReactNode;
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <LoginContext.Provider value={{ user, login, logout }}>
        {children}
      </LoginContext.Provider>
    </>
  );
};
