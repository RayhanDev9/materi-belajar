import { useReducer, useState } from "react";
const initialStep = { count: 0, step: 1 };

function reducer(state, action) {
  console.info(state, action);
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.pyload };
    case "setStep":
      return { ...state, step: action.pyload };
    case "reset":
      return initialStep;

    default:
      throw new Error("Unknow");
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  const initialStep = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialStep);
  const { count, step } = state;

  // const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", pyload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", pyload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
