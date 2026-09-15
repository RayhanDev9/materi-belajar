import type React from "react";
import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

// // Inisialisasi awal dengan null

interface AuthProviderProps {
  children: ReactNode;
}


export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuth harus di gunakan di dalam Auth Provider");
  }

  return context;
}
