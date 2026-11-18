"use client";
import Link from "next/link";
import React, { use } from "react";

// ✅ Yang benar:
export default function NewsArticel({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang } = use(searchParams);
  return (
    <div>
      <h1>News Articel </h1>
      <p>Reading {lang}</p>
      <div>
        <Link href={`/articels/${articleId}?lang=en`}>English</Link>
        <Link href="/articels/id?lang=es">Spains</Link>
        <Link href="/articels/id?lang=fr">France</Link>
      </div>
    </div>
  );
}
