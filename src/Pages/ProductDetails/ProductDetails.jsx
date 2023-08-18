/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import imgTwo from "./wallpepar.jpg";
import { useLoaderData, useLocation } from "react-router-dom";
import Rating from "react-rating";
import './ProductDetails.css'

const ProductDetails = () => {
  const carData = useLoaderData();
  const { name, imgs, price, ratings, description } = carData;
  const [selectedImage, setSelectedImage] = useState(imgs[0]);
  const location = useLocation();
  const routeName = location.pathname;

  // console.log("The slectedImage is :-", selectedImage);

  //handle selected Image
  const handleSelectedImg = (e) => {
    setSelectedImage(e.target.src);
  };

  //handle previous images
  const handlePrevImages = (e) => {
    const currentIndex = imgs.indexOf(selectedImage); // Find the index of the currently selected image
    const prevIndex = (currentIndex - 1 + imgs.length) % imgs.length; // Calculate the index of the previous image
    // Set the selected image to the image at the previous index
    setSelectedImage(imgs[prevIndex]);
  };

  //handle Next Images
  const handleNextImages = (e) => {
    const currentIndex = imgs.indexOf(selectedImage); // Find the index of the currently selected image
    const nextIndex = (currentIndex + 1) % imgs.length; // Calculate the index of the next image
    // Set the selected image to the image at the next index
    setSelectedImage(imgs[nextIndex]);
  };

  const containerStyle = {
    backgroundImage: `url(${imgTwo})`, // Replace with the path to your background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="pt-20">
      <section className="w-full">
        <div
          className="card w-full  text-white shadow-xl "
          style={containerStyle}
        >
          <div className="card-body">
            <h4 className="text-blue-300  text-lg font-medium underline underline-offset-4">
              Home{routeName}
            </h4>
            <div className="card-actions justify-center text-2xl font-medium">
              <h1 className="text-sm  sm:text-2xl font-medium underline underline-offset-4 ">
                <span className="text-orange">Product Details</span> Page
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- component --> */}

      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0  overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-96">
                  <a
                    className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2 cursor-pointer"
                    onClick={handlePrevImages}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-500"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      ></path>
                    </svg>
                  </a>
                  <img
                    className="object-cover w-full lg:h-full"
                    src={selectedImage}
                    alt=""
                  />
                  <a
                    className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2 cursor-pointer"
                    onClick={handleNextImages}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-500"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="flex-wrap hidden md:flex ">
                  {imgs.slice(1).map((img, index) => (
                    <div key={index} className="w-1/2 p-2 sm:w-1/4">
                      <a
                        onClick={handleSelectedImg}
                        className="block border border-orange-300 dark:border-2 dark:hover:border-red-500 hover:border-red-500"
                      >
                        <img
                          src={img}
                          alt=""
                          className="object-cover w-full lg:h-20"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                    New
                  </span>
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-orange md:text-4xl">
                    {name}
                  </h2>
                  <div className="flex items-center mb-6">
                    <ul className="flex mr-2">
                      <li>
                        <Rating
                          readonly
                          placeholderRating={ratings}
                          emptySymbol={
                            <svg
                              className="w-4 h-4 text-gray-200 dark:text-gray-600"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          }
                          placeholderSymbol={
                            <svg
                              className="w-4 h-4 text-yellow-300 mr-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          }
                          fullSymbol={
                            <svg
                              className="w-4 h-4 text-yellow-300 mr-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          }
                        />
                      </li>
                    </ul>
                    <p className="text-xs dark:text-gray-400 ">
                      {parseInt(ratings) + " customer reviews"}
                    </p>
                  </div>
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                    Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor
                    amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum
                    dor amet Lorem ispum dor amet Lorem ispum dor amet
                  </p>
                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span>৳{price}</span>
                    <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                      ৳{price}
                    </span>
                  </p>
                  <p className="text-green-600 dark:text-green-300 ">
                    {parseInt(ratings)} in stock
                  </p>
                </div>
                <div className="flex items-center mb-8">
                  <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                    Colors:
                  </h2>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    <button className="p-1 mb-2 mr-2 border border-transparent hover:border-orange-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                      <div className="w-6 h-6 bg-cyan-300"></div>
                    </button>
                    <button className="p-1 mb-2 mr-2 border border-transparent hover:border-orange-400 dark:border-gray-800 dark:hover:border-gray-400">
                      <div className="w-6 h-6 bg-green-300 "></div>
                    </button>
                    <button className="p-1 mb-2 border border-transparent hover:border-orange-400 dark:border-gray-800 dark:hover:border-gray-400">
                      <div className="w-6 h-6 bg-red-200 "></div>
                    </button>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                    Size:
                  </h2>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-orange-400 dark:border-gray-400 hover:text-orange-600 dark:hover:border-gray-300 dark:text-gray-400">
                      XL
                    </button>
                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-orange-400 hover:text-orange-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                      S
                    </button>
                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-orange-400 hover:text-orange-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                      M
                    </button>
                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-orange-400 hover:text-orange-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                      XS
                    </button>
                  </div>
                </div>
                <div className="w-32 mb-8 ">
                  <label className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Quantity
                  </label>
                  <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                      placeholder="1"
                    />
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                    <button className="flex items-center justify-center w-full p-4 text-purple-500 border border-purple-500 rounded-md dark:text-gray-200 dark:border-purple-600 hover:bg-purple-600 hover:border-purple-600 hover:text-gray-100 dark:bg-purple-600 dark:hover:bg-purple-700 dark:hover:border-purple-700 dark:hover:text-gray-300">
                      Add to Cart
                    </button>
                  </div>
                  <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                    <button className="flex items-center justify-center w-full p-4 text-purple-500 border border-purple-500 rounded-md dark:text-gray-200 dark:border-purple-600 hover:bg-purple-600 hover:border-purple-600 hover:text-gray-100 dark:bg-purple-600 dark:hover:bg-purple-700 dark:hover:border-purple-700 dark:hover:text-gray-300">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------=--=- */}
    </div>
  );
};

export default ProductDetails;
