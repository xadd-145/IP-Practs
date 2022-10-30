//App.js for hooks
import React, { useState,useEffect } from "react";

function App() {
  /*HookCounterBasic
  const [count, setCount] = useState(0)
  function HookCounter() {
    setCount(count + 1)*/

  //HookCounter2
  const initialCount = 0
  const [Count, setCount] = useState(initialCount)
  function Reset() {
    setCount(initialCount)
  }
  function Increment() {
    setCount(Count + 2)
  }
  function Decrement() {
    setCount(Count - 2)
  }
  function Multiply() {
    setCount(Count * 2)
  }
  function Divide() {
    setCount(Count / 2)
  }

  /*HookCounterBasic
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })*/
  return (
    <div>
      {/*<h1>{count}</h1>
      <p>You clicked {count} times</p>
      <button onClick={HookCounter}>Count {count}</button>*/}
      Count: {Count}
      <br></br>
      <button onClick={Reset}>Reset</button>
      <button onClick={Increment}>Increment by 2</button>
      <button onClick={Decrement}>Decrement by 2</button>
      <button onClick={Multiply}>Multiply by 2</button>
      <button onClick={Divide}>Divide by 2</button>
    </div>
  );
}

export default App;
//Run NPM START

