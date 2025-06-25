import React from "react";
import CountUpCard from "../../Shared/CountUpCard";
import SecondaryBtn from "../../Shared/Button/SecondaryBtn";

const HowToWork = () => {
  return (
    <div className="bg-teal-900 w-full h-full">
      <div className="res-padding py-20">
        <div className="pb-20">
          <h1 className="lg:text-9xl md:text-8xl text-6xl text-center text-amber-400 font-semibold bebas tracking-wide py-4 ">
            ONE SITE, ONE POST, AND THE AREA IS ALARMED
          </h1>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 league">
          <div className="flex-1 ">
            <p className="text-xl font-semibold text-amber-400/80 pb-8">
              Do you have question about our service? Please don't hesitate to
              contact us
            </p>
            <SecondaryBtn label="Contact Us" className="text-white " />
          </div>

          <div className="flex-4 flex flex-wrap justify-end items-center gap-4">
            <div>
              <h1 className="md:text-7xl text-4xl text-center  text-amber-400 font-semibold bebas tracking-wide py-4 ">achievements <span className="text-4xl">of</span> this months </h1>
              <CountUpCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToWork;
