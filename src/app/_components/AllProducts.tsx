"use client";

import React, { useState } from "react";
import Products from "~/data/products";
import ProductCard from "./ProductCard";

export default function AllProducts() {
  const [filter, setFilter] = useState("");

  const filteredProducts = Products.filter((product) => {
    // Check if the product name contains the filter value (case-insensitive)
    return product.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <div className="w-6/6 my-10 flex justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* <div className="col-span-1 m-auto w-5/6 ">
            <div className="rounded-lg bg-white shadow dark:bg-gray-700">
              <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </h6>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <select
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setFilter(e.target.value)
                    }
                    className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                  >
                    <option value="lewis">Lewis Hamilton</option>
                    <option value="lando">Lando Norris</option>
                    <option value="sebastian">Sebastian Vettel</option>
                    <option value="max">Max Verstappen</option>
                    <option value="charles">Charles Leclerc</option>
                    <option value="carlos">Carlos Sainz</option>
                    <option value="pierre">Pierre Gasly</option>
                    <option value="daniel">Daniel Ricciardo</option>
                    <option value="sergio">Sergio Perez</option>
                    <option value="esteban">Esteban Ocon</option>
                    <option value="lance">Lance Stroll</option>
                    <option value="fernando">Fernando Alonso</option>
                    <option value="yuki">Yuki Tsunoda</option>
                    <option value="kimi">Kimi Raikkonen</option>
                    <option value="antonio">Antonio Giovinazzi</option>
                    <option value="mick">Mick Schumacher</option>
                    <option value="nikita">Nikita Mazepin</option>
                    <option value="george">George Russell</option>
                    <option value="nicholas">Nicholas Latifi</option>
                  </select>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="md:w-6/6 grid grid-cols-1 gap-4 sm:w-5/6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
              {filteredProducts.length === 0
                ? null
                : filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
