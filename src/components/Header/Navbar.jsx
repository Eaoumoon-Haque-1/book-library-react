import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {

const navLinkClass = ({ isActive }) =>
  `relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${
    isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
  }`;

const links = (
  <>
    <li className="mr-3.5">
      <NavLink to="/" end className={navLinkClass}>
        {({ isActive }) => (
          <span className="relative inline-block">
            Home
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                isActive ? "w-full" : "w-0"
              }`}
            ></span>
          </span>
        )}
      </NavLink>
    </li>

    <li className="mr-3.5">
      <NavLink to="/About" className={navLinkClass}>
        {({ isActive }) => (
          <span className="relative inline-block">
            About
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                isActive ? "w-full" : "w-0"
              }`}
            ></span>
          </span>
        )}
      </NavLink>
    </li>

    <li>
      <NavLink to="/ReadList" className={navLinkClass}>
        {({ isActive }) => (
          <span className="relative inline-block">
            Listed Books
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                isActive ? "w-full" : "w-0"
              }`}
            ></span>
          </span>
        )}
      </NavLink>
    </li>
  </>
);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BookVault</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-4">
        <button className="btn btn-active btn-success text-white font-extrabold">SignIN</button>
        <button className="btn btn-active btn-info text-white font-extrabold">SignUP</button>
      </div>
    </div>
  );
};

export default Navbar;
