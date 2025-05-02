import { useCallback, useState } from "react";

const CounterTwo = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const beginner = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={beginner}>Default</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default CounterTwo;
