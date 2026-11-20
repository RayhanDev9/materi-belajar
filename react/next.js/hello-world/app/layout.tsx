import React from "react";
import "./globals.css";
import ErrorWrapper from "./error-wrapper";

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
        <ErrorWrapper>
          <main>{children}</main>
        </ErrorWrapper>
      </body>
    </html>
  );
}
