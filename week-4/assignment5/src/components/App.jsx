import React, { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [counts, setCounts] = useState([
    { id: 1, sum: 0 },
    { id: 2, sum: 0 },
    { id: 3, sum: 0 },
  ]);

  const [nextCounterId, setNextCounterId] = useState(4);

  const allCounts = () => {
    setCounts((prevCount) =>
      prevCount.map((count) => ({
        ...count,
        sum: count.sum + 1,
      }))
    );
  };

  const handleCountChange = (id, delta) => {
    setCounts((prevCount) =>
      prevCount.map((count) => {
        if (count.id === id) {
          return {
            id: id,
            sum: count.sum + delta,
          };
        }
        return count;
      })
    );
  };

  const addCounter = () => {
    setCounts((prevCount) => [
      ...prevCount,
      {
        sum: 0,
        id: nextCounterId,
      },
    ]);
    setNextCounterId((prevId) => prevId + 1);
  };

  return (
    <div>
      <h1>App Component</h1>
      <button onClick={allCounts}>All+1</button>
      {counts.map((count) => (
        <Counter
          id={count.id}
          key={count.id.toString() ? count.id.toString() : count.id}
          sum={count.sum}
          changeCount={handleCountChange}
        />
      ))}
      <button onClick={addCounter}>Add a Counter</button>
    </div>
  );
};

export default App;
