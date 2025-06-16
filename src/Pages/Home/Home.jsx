import React, { useEffect } from "react";
import Slider from "./Slider";
import LatestPost from "./LatestPost";
import Aos from "aos";
import "aos/dist/aos.css";

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
    </div>
  );
};

export default Home;
