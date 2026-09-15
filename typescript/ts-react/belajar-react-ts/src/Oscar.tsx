import React from "react";

interface OscarProps {
  children: React.ReactNode;
}
export default function Oscar({ children }: OscarProps) {
  return <>{children}</>;
}
