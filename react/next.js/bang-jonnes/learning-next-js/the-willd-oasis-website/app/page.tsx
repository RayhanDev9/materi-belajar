import Link from "next/link";
import React from "react";
import Navigation from "./components/Navigation";
import { title } from "process";

export const metadata = {
  title: "The Wild Oasis",
};

export default function Home() {
  return (
    <div>
      <h1>The Wild Oasis. Welcome to pradise</h1>
    </div>
  );
}
