import React from "react";
import { Link, useLoaderData } from "react-router";
import PostCard from "../../Shared/PostCard";

const AllPosts = () => {
  const postData = useLoaderData();

  return (
    <div>
      {/* Heading */}
      <div className="py-4 bg-teal-800 text-base-100 sticky top-18.5 z-10 w-full">
        <div className="res-padding">
          <h1 className="text-6xl font-semibold bebas tracking-wide py-4">
            All Post
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 res-padding">
        {postData.map((post, index) => (
          <PostCard
            key={post._id}
            post={post}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          ></PostCard>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
