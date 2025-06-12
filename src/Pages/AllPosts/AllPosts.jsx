import React from "react";
import { Link, useLoaderData } from "react-router";
import SecondaryBtn from "../../Shared/Button/SecondaryBtn";
import PostCard from "../../Shared/PostCard";

const AllPosts = () => {
  const postData = useLoaderData();

  console.log(postData);

  return (
    <div>
      <h1>AllPosts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 res-padding">
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
