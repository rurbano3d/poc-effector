import React from "react";
import {createStore, createEvent} from 'effector';
import {useStore} from 'effector-react';

const increment = createEvent('increment')

const counter = createStore(1).on(increment, state => state + 1)

counter.watch(console.log)
function App() {
  const value = useStore(counter);

  const handleIncrement = () =>{
    increment();
  }

  return (
  <>
    <h1>{value}</h1>
    <button onClick={handleIncrement}>+</button>
  </>
  );
}

export default App;
