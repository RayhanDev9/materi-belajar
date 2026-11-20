// import NotFound from "@/app/not-found";
import { redirect } from "next/navigation";
import React from "react";

const getRandom = (value: number): number => {
  return Math.floor(Math.random() * value); // ✅ Pasti menghasilkan 0 atau 1
};

export default async function ReviewsDetail({
  params,
}: {
  params: Promise<{ reviewsId: string; productId: string }>;
}) {
  const random = getRandom(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }

  const { reviewsId, productId } = await params;
  if (Number(reviewsId) > 1000) {
    // return ;
    redirect("/products");
  }
  return (
    <div>
      Reviews {reviewsId} for Detail products {productId}
    </div>
  );
}
