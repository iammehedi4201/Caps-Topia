// eslint-disable-next-line no-unused-vars
import React from "react";
import profileImg from "../../assets/images/model.png";

const Banner = () => {
  return (
    <div className="relative  flex justify-around  bg-white pt-[120px] pb-[16px] lg:pt-[150px] ">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content flex flex-col">
              <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                Discover the Best Deals on Fashion, Electronics, Home Goods, and
                More!
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color">
                With TailGrids, business and students thrive together. Business
                can perfectly match their staffing to changing demand throughout
                the dayed.
              </p>
              <ul className="flex flex-wrap w-full justify-start items-center ">
                <li className="">
                  <a
                    href="/#"
                    className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                      </svg>
                    </span>
                    BUY NOW
                  </a>
                </li>

              </ul>
              <div className="pt-16 clients w-full">
                <h6 className="flex items-center  mb-3 text-sm font-medium text-body-color">
                  Some Of Our Clients
                  <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
                </h6>

                <div className="flex items-center space-x-4">
                  <img
                    className="h-6 sm:h-6"
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                  />

                  <img
                    className=" h-6 sm:h-6"
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                  />

                  <img
                    className=" h-6 sm:h-6"
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative  z-10  pt-11 lg:pt-0">
                <img
                  src={profileImg}
                  alt="hero"
                  className="max-w-sm  mx-auto lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
