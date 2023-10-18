import React from "react";
import "./style.css";

export default function Navbar() {
  return (
    <div>
      <nav className="">
        <div className=" flex flex-wrap items-center justify-between md:mt-4">
          <a href="/" className="flex items-center">
            <span className="self-center md:text-2xl text-xl font-semibold whitespace-nowrap">
              {"<Kawkawa/>"}
            </span>
          </a>

          <div className="flex md:hidden">
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200  focus:outline-none"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <span className="relative px-2 py-2 transition-all ease-in duration-75 group-hover:bg-white  rounded-md">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium  mt-4  md:flex-row md:space-x-8 md:mt-0  md:shadow-none shadow-xl  rounded-lg md:rounded-none bg-white overflow-hidden md:bg-transparent ">
              <li className="md:bg-transparent md:hover:bg-none hover:bg-gradient-to-br from-red-100 via-red-200 to-yellow-100">
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-blackrounded md:bg-transparent md  md:p-0  lg:hover:border-b-2 lg:hover:border-slate-900 md:border-b-0 border-b-2 border-opacity-5 border-b-black link"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="md:bg-transparent  md:hover:bg-none  hover:bg-gradient-to-br from-red-100 via-red-200 to-yellow-100">
                <a
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-blackrounded md:bg-transparent md md:p-0 lg:hover:border-b-2 lg:hover:border-slate-900 md:border-b-0 border-b-2 border-opacity-5 border-b-black link"
                >
                  About
                </a>
              </li>
              <li className="md:bg-transparent  md:hover:bg-none  hover:bg-gradient-to-br from-red-100 via-red-200 to-yellow-100">
                <a
                  href="/projects"
                  className="block py-2 pl-3 pr-4 text-blackrounded md:bg-transparent md md:p-0 lg:hover:border-b-2 lg:hover:border-slate-900 md:border-b-0 border-b-2 border-opacity-5 border-b-black"
                >
                  Projects
                </a>
              </li>
              <li className="md:bg-transparent md:hover:bg-none  hover:bg-gradient-to-br from-red-100 via-red-200 to-yellow-100">
                <a
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-blackrounded md:bg-transparent md md:p-0 lg:hover:border-b-2 lg:hover:border-slate-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none ">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                Hire me
              </span>
            </button> */}
    </div>
  );
}
