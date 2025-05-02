import { useCallback, useMemo, useState } from "react";

const TaskOne = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const expensiveValue = useMemo(() => {
    console.log("Heavy calculation...");
    return count * 1000;
  }, [count]);

  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>Expensive value: {expensiveValue}</h1>
      <button onClick={increment}>Increment count</button>
      <h1>{other}</h1>
      <button onClick={() => setOther(other + 1)}>Change other state</button>
    </div>
  );
};

export default TaskOne;
