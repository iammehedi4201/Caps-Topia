/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import useProduts from "../../../Hooks/useProducts";
import Product from "../Product/Product";
import img from "./walpaperjpg.jpg";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../../Layout/Main";

const Products = () => {
  const { searchProducts, searchValue } = useContext(DataContext);
  const [selectCatgoryValue, setselectCatgoryValue] = useState("See All");
  const [catagoryData, setCatagoryData] = useState([]);
  const [sortedValue, setSortedValue] = useState("Best Rating");
  const [sortedProducts, setSortedProducts] = useState([]);
  const location = useLocation();
  const routeName = location.pathname;

  //Load the data by useProducts Hook
  const [products, setProducts] = useProduts();

  //handle Catgory Value Change
  const handleCatgoryValueChange = (e) => {
    setselectCatgoryValue(e.target.value);
  };

  //Catagory Data load
  useEffect(() => {
    fetch(`http://localhost:4000/catagory/data?q=${selectCatgoryValue}`)
      .then((res) => res.json())
      .then((data) => setCatagoryData(data))
      .catch((error) => console.error(error));
  }, [selectCatgoryValue]);

  //handle Sorted Value change
  const handleSortValueChange = (e) => {
    setSortedValue(e.target.value);
  };
  useEffect(() => {
    fetch(`http://localhost:4000/sort/data?q=${sortedValue}`)
      .then((res) => res.json())
      .then((data) => setSortedProducts(data))
      .catch((error) => console.error(error));
  }, [sortedValue]);

  //handle Display productss
  let displayProducts;
  if (searchValue) {
    // If there's a search query, show search results
    displayProducts = searchProducts;
  } else if (selectCatgoryValue === "See All") {
    // If no specific category is selected
    if (sortedProducts.length === 0) {
      // If no sorting is applied, show all products
      displayProducts = products;
    } else {
      // If sorting is applied, show sorted products
      displayProducts = sortedProducts;
    }
  } else if (
    (selectCatgoryValue === "Curve Cap" || selectCatgoryValue === "Hip Hop Cap") &&
    sortedProducts.length === 0
  ) {
    // If the selected category is "Curve Cap" or "Hip Hop Cap" and no sorting is applied
    displayProducts = catagoryData;
  } else if (
    (selectCatgoryValue === "Curve Cap" || selectCatgoryValue === "Hip Hop Cap") &&
    sortedProducts.length > 0
  ) {
    // If the selected category is "Curve Cap" or "Hip Hop Cap" and sorting is applied
    displayProducts = sortedProducts.filter(product => product.category === selectCatgoryValue);
  } else {
    // Default to showing products from the selected category
    displayProducts = catagoryData;
  }

  const containerStyle = {
    backgroundImage: `url(${img})`, // Replace with the path to your background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="pt-16">
      <section className="w-full">
        <div
          className="card w-full  text-white shadow-xl "
          style={containerStyle}
        >
          <div className="card-body">
            <h4 className="text-blue-400 font-medium underline underline-offset-4 text-xl">
              Home{routeName}
            </h4>
            <div className="card-actions justify-center text-2xl font-medium">
              <h1 className="text-sm  sm:text-2xl font-medium underline underline-offset-8">
                <span className="text-orange ">Product</span> Page
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 ">
        <div className="flex gap-2 justify-between mt-3">
          <select
            className="w-1/3 px-2 py-1 border border-green-500 rounded-md focus:outline-none font-medium text-white"
            onChange={handleCatgoryValueChange}
          >
            <option value="See All">See All</option>
            <option value="Hip Hop Cap">Hip Hop Cap</option>
            <option value="Curve Cap">Curve Cap</option>
          </select>

          <div>
            <select
              className="block w-52 px-2 py-1 border border-green-500 rounded-md focus:outline-none font-medium text-white"
              onChange={handleSortValueChange}
            >
              <option value="Best Rating">Best Rating</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center pt-10">
        {displayProducts.map((item) => (
          <Product key={item.capId} item={item}></Product>
        ))}
      </section>
    </div>
  );
};

export default Products;
