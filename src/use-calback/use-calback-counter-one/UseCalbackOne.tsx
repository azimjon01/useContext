import { useCallback, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <>
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
