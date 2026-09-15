import React, { useState } from "react";

import type { nama } from "./Person.types";
import { useAuth } from "./AuthContext";

export default function User() {
  const { isLogin } = useAuth();
  const user: nama | null = isLogin
    ? { frist: "Rayhan", last: "Wijadi" }
    : null;
  return <div>{`${user?.frist} ${user?.last}`}</div>;
}
