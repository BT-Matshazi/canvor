import React from "react";
import Products from "~/data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <>
    <div className="flex justify-center my-10 ">
      <div className="2xl:gap-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 sm:w-5/6 md:w-4/6">
        {Products.map((product) => {
          return (
            <>
              <ProductCard key={product.id} product={product} />
            </>
          );
        })}
      </div></div>
    </>
  );
}
