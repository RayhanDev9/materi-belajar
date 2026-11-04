import NotFound from "@/app/not-found";
import React from "react";

export default async function ReviewsDetail({
  params,
}: {
  params: Promise<{ reviewsId: string; productId: string }>;
}) {
  const { reviewsId, productId } = await params;
  if (Number(reviewsId) > 1000) {
    return <NotFound />;
  }
  return (
    <div>
      Reviews {reviewsId} for Detail products {productId}
    </div>
  );
}
