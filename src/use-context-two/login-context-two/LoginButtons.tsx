import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const LoginButton = () => {
  const { login } = useContext(LoginContext);

  const handleLogin = () => {
    login({ name: "Azimjon", email: "azimjon@gmail.com" });
  };

  return <button onClick={handleLogin}>Login</button>;
};

export const LogoutButton = () => {
  const { logout } = useContext(LoginContext);
  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
};
