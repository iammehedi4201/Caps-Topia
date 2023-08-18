/* eslint-disable no-unused-vars */
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import picOne from "../../../assets/images/About.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TrandingProducts = () => {
  return (
    <div  data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200"  className="sm:p-8 sm:my-16">
      <h1 className="text-3xl font-bold mb-4">Trending Products</h1>
      <div className="swiper-container relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={2}
          navigation={true}
         
          breakpoints={{
            // Define breakpoints for responsive design
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log()}
        >
          <SwiperSlide className="flex justify-center">
            <div className="border rounded-lg shadow-md sm:p-4 bg-white">
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={picOne} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-lg shadow-md sm:p-4 bg-white">
              <div className="card mx-auto bg-base-100 shadow-xl">
                <figure>
                  <img src={picOne} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="border rounded-lg shadow-md sm:p-4 bg-white">
              <div className="card mx-auto bg-base-100 shadow-xl">
                <figure>
                  <img src={picOne} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-lg shadow-md sm:p-4 bg-white">
              <div className="card mx-auto bg-base-100 shadow-xl">
                <figure>
                  <img src={picOne} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-lg shadow-md sm:p-4 bg-white">
              <div className="card  mx-auto bg-base-100 shadow-xl">
                <figure>
                  <img src={picOne} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlides with content as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default TrandingProducts;
