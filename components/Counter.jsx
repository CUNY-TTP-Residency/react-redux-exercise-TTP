// Create components/Counter.jsx
import React, { Component } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onClear, onDecrementBy5, onIncrementBy5 }) => (
  <div>
    <h1> Value: {value} </h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onIncrementBy5}> +5 </button>
    <button onClick={onDecrementBy5}> -5 </button>
    <button onClick={onDecrement}> - </button>
    <button onClick={onClear}> Clear </button>
  </div>
);

export default Counter;
