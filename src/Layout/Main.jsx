/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import NavBar from "../Shared/NavBar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import CuponCard from "../Shared/CuponCard/CuponCard";
import Footer from "../Shared/Footer/Footer";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const Main = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  // console.log("The search products  are :-",searchProducts);

  //fetch Search Products
  useEffect(() => {
    fetch(`http://localhost:4000/capData/search?q=${searchValue}`)
      .then((res) => res.json())
      .then((data) => setSearchProducts(data))
      .catch((error) => console.error(error));
  }, [searchValue]);

  //Example: Show the header and footer only on specific paths
  const showHeaderFooter = !(
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup")
  );
  // console.log("The show Header value is :-", showHeaderFooter);

  //handleSearchValue
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  //handle clear Search Value
  const handleclearSearchValue = (e) => {
    setSearchValue("");
  };

  const value = {
    handleSearchValue,
    searchValue,
    searchProducts,
    handleclearSearchValue,
  };
  return (
    <DataContext.Provider value={value}>
      {showHeaderFooter && <NavBar />}
      <Outlet />
      {showHeaderFooter && <CuponCard />}
      {showHeaderFooter && <Footer />}
    </DataContext.Provider>
  );
};

export default Main;
