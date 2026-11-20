"use client";

import React, { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export default function ErrorWrapper({ children }: WrapperProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Simulated error in layout");
  }

  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <button
          onClick={() => setHasError(true)}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600 transition-colors"
        >
          Simulate Error
        </button>
      </div>
      {children}
    </div>
  );
}
