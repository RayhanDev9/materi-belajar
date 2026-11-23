"use client";

import React, { useState } from "react";
// 1. Tentukan bentuk objek User
interface User {
  id: number;
  name: string;
}
export default function Counter({ users }: { users: User[] }) {
  const [counter, setCounter] = useState(0);
  console.info(users);
  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
}
