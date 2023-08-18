/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Product = ({ item }) => {

  // console.log("The item is :",item);

  const { capId, name, imgs, price, ratings } = item;

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="200"
      className="w-full max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700
            space-y-5
            "
    >
      <a href="#">
        <img
          className="p-5 mx-auto rounded-xl ring-2 ring-red-500"
          src={imgs}
          alt={name}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className=" text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {/* This is React Rating  */}
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
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {ratings}
          </span>
        </div>
        <div className="flex items-center justify-between max-[335px]:flex-col ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-auto sm:h-12 sm:w-auto md:h-16 md:w-auto lg:h-20 lg:w-auto"
            viewBox="0 0 100 100"
          >
            <text
              x="50"
              y="50"
              fontFamily="Arial"
              fontSize="30"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              ৳ {price}
            </text>
          </svg>
          <Link
            to={`/productDetails/${capId}`}
            className="max-[335px]:btn-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:px-5 px-3 py-2.5 text-center md:text-base dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
