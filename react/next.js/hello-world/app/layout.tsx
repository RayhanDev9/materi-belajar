import { chdir, title } from "process";
import React from "react";

export const metadata = {
  title: "Next.js",
  description: "Generate by next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
