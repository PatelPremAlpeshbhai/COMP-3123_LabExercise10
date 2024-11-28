import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";

function Counter() {
  const count = useSelector((state) => state.counter.count); // Get counter value
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
