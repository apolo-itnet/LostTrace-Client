import Lottie from "lottie-react";
import React from "react";
import animationData from "../../Animation/no-data-found-lottie.json";

const EmptyPostAnimation = () => {
  return (
    <div>
      {/* Animation */}
      <div className="flex justify-center items-center gap-6 flex-wrap px-4 py-1">
        <div className="w-48 sm:w-64 md:w-72">
          <Lottie animationData={animationData} loop={true} />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center items-start gap-2 text-gray-300">
          <h1 className="text-2xl sm:text-3xl font-bold uppercase">
            No Posts Found
          </h1>
          <p className="text-base text-gray-400  ">
            Create a post if you lost something
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyPostAnimation;
