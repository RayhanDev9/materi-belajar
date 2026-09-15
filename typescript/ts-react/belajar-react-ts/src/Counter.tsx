import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

interface CounterType {
  count: number;
}

interface UpdateCounter {
  type: "increment" | "deccrement";
  payload: number;
}

interface Reset {
  type: "reset";
}

type CounterAction = UpdateCounter | Reset;

function reducer(state: CounterType, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "deccrement":
      return { count: state.count - action.payload };
    case "reset":
      return {
        count: 0,
      };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{`count : ${state.count}`}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Tambah Nilai Counter :
      </button>
      <button onClick={() => dispatch({ type: "deccrement", payload: 10 })}>
        Kurang Nilai Counter :
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>
        Reset Counter :
      </button>
    </div>
  );
}
