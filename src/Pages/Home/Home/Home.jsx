/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import TrandingProducts from "../TrandingProducts/TrandingProducts";
import About from "../About/About";
import PopularProducts from "../PopularProducts/PopularProducts";
import ShopDetail from "../ShopDetails/ShopDetail";
import TeamDetails from "../TeamDetails/TeamDetails";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import Testimonial from "../Testimonial/Testimonial";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TrandingProducts></TrandingProducts>
      <About></About>
      <PopularProducts></PopularProducts>
      <ShopDetail></ShopDetail>
      <TeamDetails></TeamDetails>
      <CoreFeatures></CoreFeatures>
      <Testimonial></Testimonial>
      <ScrollToTop
        smooth
        className="p-1.5"
      />
    </div>
  );
};

export default Home;
