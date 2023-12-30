import React from "react";
import Products from "~/data/products";
import ProductCard from "./ProductCard";

export default function AllProducts() {
  return (
    <>
      <div className="w-6/6 my-10 flex justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 m-auto w-5/6 ">
            <div className="rounded-lg bg-white shadow dark:bg-gray-700">
              <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </h6>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <input
                    id="apple"
                    type="checkbox"
                    value=""
                    className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                  />

                  <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Apple (56)
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    id="fitbit"
                    type="checkbox"
                    value=""
                    className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                  />

                  <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Fitbit (56)
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="md:w-6/6 grid grid-cols-1 gap-4 sm:w-5/6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
              {Products.map((product) => {
                return (
                  <>
                    <ProductCard key={product.id} product={product} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
