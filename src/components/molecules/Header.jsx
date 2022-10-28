import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-400 bg-opacity-75 w-full h-100">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="cyberlearn"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white"
              activeClassName="border-b-2 border-white"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
              activeClassName="border-b-2 border-white"
            >
              Detail
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded text-white">
            <Link to="/login">Login</Link>
          </button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900 text-white">
            <Link to="/Register">Register</Link>
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
