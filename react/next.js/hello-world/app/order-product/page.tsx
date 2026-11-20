"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProduct() {
  const router = useRouter();
  function handleOrder() {
    console.info("Pricing to Order ");
    router.replace("/");
  }
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleOrder}>Order</button>
    </div>
  );
}
