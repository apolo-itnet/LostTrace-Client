import React from "react";

const LoaderFull = () => {
  return (
    <div>
      <div className=" absolute inset-0 z-50 bg-sky-50/10 backdrop-blur-[2px] gap-2 w-full h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-transparent text-teal-400 text-4xl animate-spin flex items-center justify-center border-t-teal-400 rounded-full">
          <div className="w-12 h-12 border-4 border-transparent text-amber-400 text-2xl animate-spin flex items-center justify-center border-t-amber-400 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default LoaderFull;
