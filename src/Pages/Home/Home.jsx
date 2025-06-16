import React, { useEffect } from "react";
import Slider from "./Slider";
import LatestPost from "./LatestPost";
import Aos from "aos";
import "aos/dist/aos.css";
import Testimonial from "../Testimonial/Testimonial";
import HowToWork from "../HowToWork/HowToWork";

const postPromise = fetch("http://localhost:5000/posts/latest").then((res) =>
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
      <section>
        <Slider />
      </section>
      <section>
        <LatestPost postPromise={postPromise} />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <HowToWork/>
      </section>
    </div>
  );
};

export default Home;
