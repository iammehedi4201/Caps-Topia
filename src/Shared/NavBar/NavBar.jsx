// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/icons/logo.png";
import profilePic from "../../assets/images/model.png";

const NavBar = () => {
  return (
    <div className=" fixed z-50 top-0 left-0 w-full  Nav-bar border-2 border-green-300">
      <div className="navbar " style={{backgroundColor:"#FFFBF0"}}>
        <div className="navbar-start  flex-1 ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-black text-md font-bold">Home </a>
              </li>
              <li>
                <a className="text-black text-md font-bold">Product</a>
                <ul className="p-2">
                  <li>
                    <a className="text-black text-md font-bold">Bags</a>
                  </li>
                  <li>
                    <a className="text-black text-md font-bold">Jacket</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="text-black text-md font-bold">About Us</a>
              </li>
              <li>
                <a className="text-black text-md font-bold">Contact Us</a>
              </li>
            </ul>
          </div>
          <a href="#" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex flex-1 ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-black text-md font-bold">Home</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary  className="text-black text-md font-bold">Products</summary>
                <ul className="p-2">
                  <li  >
                    <a className="text-black text-md font-bold">Bags</a>
                  </li>
                  <li>
                    <a className="text-black text-md font-bold">Jackets</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="text-black text-md font-bold">About Us </a>
            </li>
            <li>
              <a className="text-black text-md font-bold">Contact Us </a>
            </li>
          </ul>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img className="object-cover" src={profilePic} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
