import React from "react";
import FeedbackCard from "./FeedbackCard";
import { FaHeart } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="res-padding w-full h-screen mx-auto inline-flex justify-center items-center overflow-auto">
      <div className="flex justify-between items-center gap-8">
        <div className="w-[30%]">
          <p className="flex items-center gap-2 manrope tracking-widest"> <span className="text-red-500"><FaHeart /></span> Testimonial</p>
          <h1 className="text-[7rem] leading-40 uppercase font-bold text-teal-800 bebas">What do our users say?</h1>
        </div>
        <div className="w-[60%] h-full">
          <FeedbackCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
