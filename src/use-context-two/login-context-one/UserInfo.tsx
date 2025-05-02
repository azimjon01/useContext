import { useContext } from "react";
import { UserContext } from "./UserContext";

export const UserInfo = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>No user logged in</div>;
  }

  return (
    <>
      <h1>Assalomu aleykum, {user.name}</h1>
      <p>Sizning emailingiz:{user.email}</p>
    </>
  );
};
