import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;

  return {
    title: `Product ${productId}`,
  };
};

export default async function productDetails({ params }: Props) {
  const productId = (await params).productId;
  return (
    <div>
      <h1>About Detail Product {productId}</h1>
    </div>
  );
}
