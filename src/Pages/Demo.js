import React, { useReducer } from "react";
import { DECRE, INCRE } from "../store/action";
import intialState from "../store/intialState";
import reducer from "../store/Reducer";

export default function Demo() {
  const [state, dispatch] = useReducer(reducer, intialState);
  console.log(state);
  const incre = () => {
    dispatch(INCRE(6));
  };

  const decre = () => {
    dispatch(DECRE(3));
  };
  return (
    <div>
      <h1>Result: {state.count}</h1>
      <button onClick={incre}>Click Incre</button>
      <button onClick={decre}>Click Decre</button>
    </div>
  );
}
