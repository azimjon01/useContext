import { createContext } from "react";

interface User {
  name: string;
  email: string;
}

interface LoginContextProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const LoginContext = createContext<LoginContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});
