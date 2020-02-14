import React, { useReducer } from "react";
import "./App.css";

interface IAction {
  type: string;
  payload: any;
}

function App(): JSX.Element {
  const initialValue: number = 0,
    reducer = (state: number, action: IAction): number => {
      switch (action.type) {
        case "ADD":
          return state + 1;
        case "SUB":
          return state - 1;
        case "RES":
          return (state = 0);
        default:
          return state;
      }
    };
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div className="App">
      <h1>Counter</h1>
      <div>{state}</div>
      <div>
        <button onClick={() => dispatch({ type: "ADD", payload: 0 })}>+</button>
        <button onClick={() => dispatch({ type: "SUB", payload: 0 })}>-</button>
        <button onClick={() => dispatch({ type: "RES", payload: 0 })}>x</button>
      </div>
    </div>
  );
}

export default App;
