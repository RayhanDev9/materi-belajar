"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const FILTER_OPTIONS = [
  { filter: "all", label: "All Cabins" },
  { filter: "small", label: "1\u20133 guest" },
  { filter: "medium", label: "3\u20135 guest" },
  { filter: "large", label: "5\u201312 guest" },
] as const;

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800">
      {FILTER_OPTIONS.map(({ filter, label }) => (
        <Button
          key={filter}
          filter={filter}
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}

interface ButtonProps {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: React.ReactNode;
}

function Button({ filter, handleFilter, activeFilter, children }: ButtonProps) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}
