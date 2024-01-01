import React from "react";
import Image from "next/image";
import { formatPrice } from "~/lib/utils";
import  AddToCartButton from "./AddToCartButton";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[]; // Assuming images are represented as an array of strings (file paths, URLs, etc.)
  tags: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <div
        key={product.id}
        className="w-full rounded-lg bg-white shadow hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
      >
        <Link href={`/product/${product.id}`}>
          <div className="overflow-hidden">
            <Image
              src={
                product.images[0] ??
                "https://canvogh.com/cdn/shop/products/pro-previews454928823_720x720.png?v=1644424323"
              }
              width={500}
              height={500}
              className="m-auto object-cover transition-all duration-300 hover:scale-110 hover:opacity-80"
              alt={product.name}
            />
          </div>
        </Link>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="mt-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center"></div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {formatPrice(product.price, { currency: "ZAR" })}
            </span>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </>
  );
}
