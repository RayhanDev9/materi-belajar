import { useState } from "react";
import { useAuth } from "./AuthContext";

function Login() {
  const { isLogin, setIsLogin } = useAuth();
  return (
    <div>
      <button
        onClick={() => setIsLogin(!isLogin)}
      >{`${isLogin ? "Masuk" : "Keluar"}`}</button>
    </div>
  );
}

export default Login;
