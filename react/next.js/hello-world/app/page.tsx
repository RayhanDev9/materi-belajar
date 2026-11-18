import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      {" "}
      <h1>Welcome home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">products</Link>
      <Link href="/articels/breaking-news-123?lang=en">Read in englis</Link>
      <Link href="/articels/breaking-news-123?lang=fr">Read in englis</Link>
    </>
  );
}
