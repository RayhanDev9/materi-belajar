"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            Something went wrong globally!
          </h2>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <button
            onClick={() => reset()}
            className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 transition"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
