import React from "react";
import Image from "next/image";

async function Home() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
            {data.map((item) => (
              <div
                className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition"
                key={item.id}
              >
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-[200px] mx-auto flex justify-center items-center">
                    <img
                      className="max-h-[160px] group-hover:scale-110 transition transform duration-500 ease-in-out"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                </div>
                <div>
                  <button className="absolute top-0 right-0 bg-black p-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
