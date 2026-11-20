import Link from "next/link";
import React from "react";

export const metadata = {
  title: {
    absolute: "blog",
  },
};

export default async function BlogPage() {
  // ⏱️ Buat simulasi delay 2 detik di sini:
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay");
    }, 2000);
  });

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>My blog</h1>
    </div>
  );
}
