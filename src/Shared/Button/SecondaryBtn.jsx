import React from "react";

const SecondaryBtn = ({ label, img, onClick,  }) => {
  return (
    <button onClick={onClick} className="btn border-none shadow-none bg-transparent hover:bg-transparent relative cursor-pointer py-6 px-6 text-center font-barlow flex justify-center items-center text-sm uppercase rounded-lg transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-transparent focus:outline-offset-4 overflow-hidden">
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-amber-400 absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0" />
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-amber-400 absolute group-hover:h-[80%] h-[50%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0" />
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-amber-400 absolute h-[50%] group-hover:h-[80%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0" />
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-amber-400 absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0" />
       {img}{label}
    </button>
  );
};

export default SecondaryBtn;
