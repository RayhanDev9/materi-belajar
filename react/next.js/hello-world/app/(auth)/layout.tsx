"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex gap-4 mb-4">
        {navLinks.map((link) => {
          // Cek apakah halaman yang dibuka sama dengan href link ini
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={
                isActive ? "font-bold text-blue-500 mr-4" : "text-blue-500 mr-4"
              }
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
      <h2>AuthLayout</h2>
    </div>
  );
}
