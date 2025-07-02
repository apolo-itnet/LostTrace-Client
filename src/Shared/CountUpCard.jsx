import React, { useEffect } from "react";
import "../CustomCSS/CountUpCard.css";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Aos from "aos";

const status = [
  {
    text: "Founds",
    number: 1200,
    description: "Successfully returned to owners",
  },
  {
    text: "Lost",
    number: 1500,
    description: "Reported by users nationwide",
  },
  {
    text: "New Users",
    number: 2500,
    description: "Registered and actively posting",
  },
];

const CountUpCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    Aos.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {status.map((item, index) => (
        <div
          key={index}
          className="outer"
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          <div className="dot" />
          <div className="card p-8 justify-end items-end ">
            <p className="description">{item.description}</p>

            <h1 className="text">
              {inView && <CountUp end={item.number} duration={3} />}
            </h1>
            <p className="text-lg text-amber-400 font-semibold uppercase  tracking-wider ">
              {item.text}
            </p>
            <div className="line topl" />
            <div className="line leftl" />
            <div className="line bottoml" />
            <div className="line rightl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountUpCard;
