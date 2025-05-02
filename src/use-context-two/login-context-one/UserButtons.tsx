import { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginButton = () => {
  const { login } = useContext(UserContext);

  const handleLogin = () => {
    login({ name: "Azimjon", email: "azimjon@gmail.com" });
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export const LogoutButton = () => {
  const { logout } = useContext(UserContext);

  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
};
