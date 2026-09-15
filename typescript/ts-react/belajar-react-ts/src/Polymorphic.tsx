import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

// Gabungkan props bawaan elemen HTML target, lalu buang kunci yang bentrok
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

// Mapping styling untuk padding dan ukuran font per size
const sizeStyles: Record<
  NonNullable<TextOwnProps<React.ElementType>["size"]>,
  string
> = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg font-semibold",
};

// Mapping styling untuk warna teks
const colorStyles: Record<
  NonNullable<TextOwnProps<React.ElementType>["color"]>,
  string
> = {
  primary: "text-blue-600",
  secondary: "text-gray-600",
};

export default function Polymorphic<E extends React.ElementType = "div">({
  size = "md",
  color = "primary",
  as,
  children,
  className = "",
  ...rest
}: TextProps<E>) {
  // Tentukan elemen yang dirender (default ke 'div')
  const Component = as || "div";

  const paddingAndSize = sizeStyles[size];
  const textColor = colorStyles[color];

  return (
    <Component
      className={`inline-block ${paddingAndSize} ${textColor} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
