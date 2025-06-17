import React from "react";
import FeedbackCard from "./FeedbackCard";
import { FaHeart } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="res-padding w-full h-full mx-auto inline-flex justify-center items-center pt-30 ">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start justify-center items-center gap-8 w-full">

        <div className="lg:w-[30%] w-full h-full">
          <p className="flex items-center gap-2 league uppercase tracking-wide font-bold text-lg"> <span className="text-red-500"><FaHeart size={20} /></span> Testimonial</p>
          <h1 className="lg:text-[7.5rem] md:text-6xl text-5xl lg:leading-36 uppercase font-normal text-teal-800 bebas">What do our users say?</h1>
        </div>

        <div className="lg:w-[60%] w-full h-full">
          <FeedbackCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
