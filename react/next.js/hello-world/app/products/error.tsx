"use client";

import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const relod = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <h2 style={{ color: "red" }}>Terjadi Kesalahan: {error.message}</h2>
      <button onClick={() => relod()}>Try again</button>
    </div>
  );
}
