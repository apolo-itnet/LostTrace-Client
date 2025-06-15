import React, { useEffect } from "react";
import Slider from "./Slider";
import LatestPost from "./LatestPost";
import Aos from "aos";

const postPromise = fetch("http://localhost:5000/posts/latest").then((res) =>
  res.json()
);

useEffect(() => {
    Aos.init({
      duration: 500,
      once: false,
    });
  }, []);

const Home = () => {
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
