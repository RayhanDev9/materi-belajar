"use client";

import React, { useState } from "react";

export default function CounterClinet() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      Counter Page
      <p>Counter : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}
