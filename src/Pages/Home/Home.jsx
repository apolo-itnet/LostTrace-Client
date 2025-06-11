import React from "react";
import Slider from "./Slider";
import LatestPost from "./LatestPost";

const postPromise = fetch("http://localhost:5000/posts").then((res) =>
  res.json()
);

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
