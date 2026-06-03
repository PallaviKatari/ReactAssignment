import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const doubleCount = useMemo(
    () => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  const doubleCount1 = useMemo(
    () => {
    console.log("Calculating...");
    return doubleCount / 2;
  }, [doubleCount]);

  return (
    <div>
      <h2>useMemo Demo</h2>

      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <p>Double Count: {doubleCount1}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default UseMemoDemo;