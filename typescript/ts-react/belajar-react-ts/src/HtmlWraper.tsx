import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export default function HtmlWraper({
  variant,
  children,
  ...rest
}: ButtonProps) {
  return <button className={`class-with-${variant}`}>{children}</button>;
}
