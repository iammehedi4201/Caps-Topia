/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import logo from "../../assets/icons/logo.png";
import profilePic from "../../assets/images/model.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../Layout/Main";

const NavBar = () => {
  const { user, Logout } = useContext(AuthContext);
  const { handleSearchValue,handleclearSearchValue,searchValue} = useContext(DataContext);
  const navigate = useNavigate();

  // console.log("user is ",user);
  //handle logOut
  const handleLogOut = async (e) => {
    try {
      await Logout();
      toast.success("LogOut Successfully ");
      // navigate("/login")
    } catch (error) {
      toast.error(error);
    }
  };

  //handle Enter Button
  // const handleEnterButton = (event) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault(); // Prevent default form submission
  //     console.log("Enter button is clicked ");
  //   }
  // };

  return (
    <div className=" fixed  z-10 top-0 left-0 w-full  Nav-bar border-2 border-green-300">
      <div className="navbar" style={{ backgroundColor: "#FFFBF0" }}>
        <div className="navbar-start  flex-1 ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-900"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-100 rounded-box w-52"
            >
              <li>
                <Link to="/" className="text-black text-md font-bold">
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-black text-md font-bold">
                  Products
                </Link>
                <ul className="p-2">
                  <li>
                    <Link className="text-black text-md font-bold">Bags</Link>
                  </li>
                  <li>
                    <Link className="text-black text-md font-bold">Jacket</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/aboutus" className="text-black text-md font-bold">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-black text-md font-bold">Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link href="#" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex flex-1 ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="text-black text-md font-bold">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-black text-md font-bold">
                  Products
                </summary>
                <ul className="p-2">
                  <li>
                    <Link to="/products" className=" text-md font-bold">
                      Bags
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-md font-bold">Jackets</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/aboutus" className="text-black text-md font-bold">
                About Us{" "}
              </Link>
            </li>
            <li>
              <Link className="text-black text-md font-bold">Contact Us </Link>
            </li>
          </ul>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={searchValue}
              onChange={handleSearchValue}
              // Add this event handler to clear the search value
              onBlur={handleclearSearchValue}
            />
          </div>
          {user?.email ? (
            <>
              {" "}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img className="object-cover" src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link>Settings</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogOut}>Logout</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
