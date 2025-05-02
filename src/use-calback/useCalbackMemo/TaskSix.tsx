import { useState } from "react";

const Component = () => {
  const [item, setItem] = useState("");
  return (
    <>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
    </>
  );
};

export default Component;
