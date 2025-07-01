import React from "react";

const Button = ({
  img,
  label,
  onClick,
  type = "button",
  disabled,
  className = "",
}) => {

  const baseClass = `btn text-sm league uppercase px-4 py-6 bg-teal-800 text-white border-none shadow-none rounded-lg relative overflow-hidden group z-10`;

  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`${baseClass} ${className}`}
      >
        <span className="absolute bg-teal-700 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
        <span className="absolute bg-teal-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
        {img} {label}
      </button>
    </div>
  );
};

export default Button;
