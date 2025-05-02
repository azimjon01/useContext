import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const LoginInfo = () => {
  const { user } = useContext(LoginContext);
  if (!user) return <h1>Login qiling</h1>;

  return (
    <>
      <h1>Assalomu aleykum</h1>
      <h3>Xush kelibsiz: {user.name}</h3>
      <p>email:{user.email}</p>
    </>
  );
};
