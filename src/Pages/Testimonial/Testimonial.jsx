import React from "react";
import FeedbackCard from "./FeedbackCard";
import { FaHeart } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="res-padding w-full h-full mx-auto inline-flex justify-center items-center py-20 ">
      <div className="flex justify-between items-start gap-8">

        <div className="w-[30%] h-full">
          <p className="flex items-center gap-2 league uppercase tracking-wide font-bold text-lg"> <span className="text-red-500"><FaHeart size={20} /></span> Testimonial</p>
          <h1 className="text-[7.5rem] leading-36 uppercase font-normal text-teal-800 bebas">What do our users say?</h1>
        </div>

        <div className="w-[60%] h-full">
          <FeedbackCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
