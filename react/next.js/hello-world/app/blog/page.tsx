import Link from "next/link";
import React from "react";

export const metadata = {
  title: {
    absolute: "blog",
  },
};

export default function page() {
  return (
    <div>
      <Link href="/">Home</Link>My blog
    </div>
  );
}
