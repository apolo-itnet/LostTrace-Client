import React from "react";

const Button = ({label}) => {
  return (
    <div>
      <button className="btn w-full text-xs uppercase px-8 py-6 rounded-xl bg-teal-800 text-base-100 relative overflow-hidden group z-10">
        <span className="absolute bg-teal-700 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
        <span className="absolute bg-teal-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
        {label}
      </button>
    </div>
  );
};

export default Button;
