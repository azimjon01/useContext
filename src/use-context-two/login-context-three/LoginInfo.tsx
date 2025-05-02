import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const LoginInfo = () => {
  const { user } = useContext(LoginContext);

  if (!user) {
    return <h1>Login qiling</h1>;
  }

  return (
    <>
      <h1>Xush kelibsiz:{user.name}</h1>
      <p>Email:{user.email}</p>
    </>
  );
};
