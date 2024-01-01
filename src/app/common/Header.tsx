"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import Cart from "../_components/Cart";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const menuItems = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Products",
      url: "/products",
    },

    // {
    //   id: 4,
    //   name: "Contact",
    //   url: "/contact",
    // },
  ];

  const subMenuItems = [
    {
      id: 1,
      name: "Children's Ministry",
      url: "/#",
    },
    {
      id: 2,
      name: "Youth",
      url: "/#",
    },
    {
      id: 3,
      name: "Pathfinders",
      url: "/#",
    },
    {
      id: 4,
      name: "Adventurers",
      url: "/#",
    },
  ];

  return (
    <>
      <div className="m-auto w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={Logo} className="m-0 w-32 p-0" alt="Logo" />
          </a>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <Cart />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium hover:text-gray-500 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
              {menuItems.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      className=" block rounded px-3 py-2 text-xl font-bold text-gray-900 hover:bg-gray-100 sm:hover:text-gray-500 md:p-0 md:hover:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              {/* <li aria-labelledby="dropdownNavbarLink">
                <button
                  id="doubleDropdownButton"
                  type="button"
                  className="flex px-3 items-center justify-between w-full hover:bg-gray-100 md:hover:bg-transparent md:hover:text-btn-primary d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={toggleDropdown}
                >
                  Departments
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transform transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="doubleDropdown"
                  className={`z-10 absolute ${
                    dropdownOpen ? "block" : "hidden"
                  } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                >
                  <ul
                    className="py-5 text-sm text-gray-700 dark:text-gray-200 "
                    aria-labelledby="doubleDropdownButton"
                  >
                    {subMenuItems.map((item) => {
                      return (
                        <li key={item.id}>
                          <Link
                            href={item.url}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
