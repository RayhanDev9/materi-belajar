import React from "react";

interface HeadingProps {
  children: string;
}

export default function Heading({ children }: HeadingProps) {
  return <h1>{children}</h1>;
}
