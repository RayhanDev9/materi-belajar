import { chdir, title } from "process";
import React from "react";

export const metadata = {
  title: {
    default: "Muhamda Rayhan - learning next.js",
    template: "%s | Learning",
    // absolute: "",
  },
  description: "Generate by next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
