import { chdir, title } from "process";
import React from "react";

export const metadata = {
  title: "Next.js",
  description: "Generate by next.js",
};

// ✅ BENAR
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>Product Header</header>
      <main>{children}</main>
      <footer>Product Footer</footer>
    </div>
  );
}
