import React from "react";

export default function DetailProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h2>Featured</h2>
    </div>
  );
}
