import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const UserInfo = () => {
  const { user } = useContext(LoginContext);

  if (!user) {
    return <div>Foydalanuvchi hali ro'yxatdan o'tmagan</div>;
  }

  return (
    <>
      <h1>Assalomu aleykum {user.name}</h1>
      <p>Sizning email:{user.email}</p>
    </>
  );
};
