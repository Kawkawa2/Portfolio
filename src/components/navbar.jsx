import "./style.css";
import { Link } from "react-router-dom";

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
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden text-gray-500 hover:bg-gray-100  focus:outline-none"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
              <li className="md:bg-transparent md:hover:bg-none hover:bg-gray-100">
                <Link
                  to="/"
                  aria-label="Go to home Page"
                  className="block py-2 pl-3 pr-4 text-blackrounded md:bg-transparent md  md:p-0  lg:hover:border-b-2 lg:hover:border-slate-900 md:border-b-0 border-b-2 border-opacity-5 border-b-black link"
                >
                  Home
                </Link>
              </li>
              <li className="md:bg-transparent  md:hover:bg-none  hover:bg-gray-100">
                <Link
                  to="/about"
                  aria-label="Go to about Page"
                  className="block py-2 pl-3 pr-4 text-blackrounded md:bg-transparent md md:p-0 lg:hover:border-b-2 lg:hover:border-slate-900 md:border-b-0 border-b-2 border-opacity-5 border-b-black link"
                >
                  About
                </Link>
              </li>
              <li className="md:bg-transparent  md:hover:bg-none  hover:bg-gray-100">
                <Link
                  to="/projects"
                  aria-label="Go to Projects Page"
                  className="block py-2 pl-3 pr-4 text-blackrounded md:bg-transparent md md:p-0 lg:hover:border-b-2 lg:hover:border-slate-900 md:border-b-0 border-b-2 border-opacity-5 border-b-black"
                >
                  Projects
                </Link>
              </li>
              <li className="md:bg-transparent md:hover:bg-none  hover:bg-gray-100">
                <Link
                  to="/contact"
                  aria-label="Go to Contacy Page"
                  className="block py-2 pl-3 pr-4 text-blackrounded md:bg-transparent md md:p-0 lg:hover:border-b-2 lg:hover:border-slate-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
