import React, { useEffect } from "react";
import Slider from "./Slider";
import LatestPost from "./LatestPost";
import Aos from "aos";
import "aos/dist/aos.css";
import Testimonial from "../Testimonial/Testimonial";
import HowToWork from "../HowToWork/HowToWork";
import FAQAccordion from "../../Shared/FAQAccordion";

const postPromise = fetch("https://lost-trace.vercel.app/posts/latest").then((res) =>
  res.json()
);

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div>
      <section className="relative bg-slate-200">
        <Slider />
      </section>
      <section>
        <LatestPost postPromise={postPromise} />
      </section>
      <section>
        <HowToWork />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <FAQAccordion/>
      </section>
    </div>
  );
};

export default Home;
