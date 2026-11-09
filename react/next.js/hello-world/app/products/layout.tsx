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
      <body>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
