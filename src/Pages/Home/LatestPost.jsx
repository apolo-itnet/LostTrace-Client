import Aos from "aos";
import React, { use, useEffect } from "react";
import PostCard from "../../Shared/PostCard";
import Button from "../../Shared/Button/Button";
import { Link } from "react-router";

const LatestPost = ({ postPromise }) => {
  const posts = use(postPromise);

  useEffect(() => {
    Aos.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div>
      <div className="text-center">

        {/* Heading */}
        <div className="py-4 bg-teal-800 text-base-100 w-full">
          <div className="res-padding">
            <h1 className="text-6xl text-white font-semibold bebas tracking-wide py-4">
              Latest Post
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 res-padding">
          {posts.map((post, index) => (
            <PostCard
              key={post._id}
              post={post}
              data-aos="fade-in"
              data-aos-delay={index * 150}
            ></PostCard>
          ))}
        </div>

        <div className="flex justify-center mt-2">
          <Link to="/all-posts">
            <Button label="View All Posts" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
