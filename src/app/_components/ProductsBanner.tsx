import React from "react";

export default function ProductsBanner() {
  return (
    <section className="bg-zinc-600 bg-[url('https://utfs.io/f/67f75731-acec-40ef-94da-f9986223c5b7-21x5eg.jpg')] bg-cover bg-center bg-no-repeat align-middle bg-blend-multiply">
      <div className="m-auto max-w-screen-xl py-32 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl ">
          Our newest collection
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:text-xl xl:px-48 ">
          A little something for everybody
        </p>
      </div>
      <a
        href="https://www.instagram.com/andresvidoza/   "
        className="relative top-0 p-2 font-medium text-white text-sm"
      >
        andres vidoza
      </a>
    </section>
  );
}
