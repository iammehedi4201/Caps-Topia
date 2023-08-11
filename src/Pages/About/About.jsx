// eslint-disable-next-line no-unused-vars
import React from "react";
import picOne from "../../assets/images/About.jpg";

const About = () => {
  return (
    <div className="hero  ">
      <div className="hero-content  flex-col lg:flex-row ">
        <div className=" md:w-2/5 lg:w-1/4 5 w-3/5 relative ">
          <img src={picOne} className="w-3/4 rounded-lg shadow-2xl " />
          <img src={picOne} className="w-1/2 rounded-lg shadow-2xl absolute  top-1/2 right-5 ring-8 ring-offset-8 ring-white " />
        </div>

        <div className="lg:w-1/2 space-y-3 mx-12 mt-16">
          <p className="text-orange text-xl font-medium">About Us</p>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6 leading-7 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            impedit, omnis provident atque accusamus sunt hic tenetur nisi
            nostrum illum rerum amet quis quia ipsum, natus perferendis dolores
            sed? Esse! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Soluta magni vero inventore. Architecto, molestias temporibus?
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
