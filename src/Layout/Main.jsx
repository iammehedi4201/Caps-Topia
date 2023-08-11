/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "../Shared/NavBar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import CuponCard from "../Shared/CuponCard/CuponCard";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();

  //Example: Show the header and footer only on specific paths
  const showHeaderFooter = !(
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup")
  );
  console.log("The show Header value is :-", showHeaderFooter);

  return (
    <div>
      {showHeaderFooter && <NavBar />}
      <Outlet />
      {showHeaderFooter && <CuponCard />}
      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default Main;
