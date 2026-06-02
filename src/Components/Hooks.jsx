// React Hooks are functions that let you use state and other React features without writing a class.
// They were introduced in React 16.8 and have become a fundamental part of modern React development. Here are some of the most commonly used hooks:
// 1. useState: This hook allows you to add state to functional components. 
// It returns an array with two elements: the current state value and a function to update it.
// 2. useEffect: This hook lets you perform side effects in functional components, 
// such as fetching data, subscribing to events, or manually changing the DOM.
// 3. useContext: This hook allows you to access the context value in functional components,
// which is useful for sharing data across the component tree without passing props down manually.
// 4. useReducer: This hook is an alternative to useState for managing more complex state logic. 
// It takes a reducer function and an initial state, and returns the current state and a dispatch function.
// 5. useRef: This hook allows you to create a mutable ref object that persists across renders. 
// It can be used to access DOM elements or store mutable values that do not trigger re-renders when updated.

import React, { useState, useEffect } from "react";

function Hooks() {
  const [count, setCount] = useState(0);   

    useEffect(() => {
        console.log("Component has mounted or updated.");
    }, [count]); // This effect runs only when the count state changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count)}>Current Value</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Hooks;