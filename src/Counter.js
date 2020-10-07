import React, { useState } from "react";
import { connect } from "react-redux";

function Counter( props ) {
  const amount = props.state.count;
  const name = props.state.name;
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>counter</h1>
      <h2>{name}</h2>
      <p className="counter">{amount}</p>
      <div className="buttons">
        <button
          type="button"
          className="btn"
          onClick={() => setCount(count - 1)}
        >
          decrease
        </button>
        
        <button
          type="button"
          className="btn"
          onClick={() => setCount(0)}
        >
          reset
        </button>

        <button
          type="button"
          className="btn"
          onClick={() => setCount(count + 1)}
        >
          increase
        </button>
      </div>
    </div>
  );
}

export default (Counter);