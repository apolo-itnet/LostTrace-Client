import Aos from "aos";
import React, { use, useEffect } from "react";
import PostCard from "../../Shared/PostCard";

const LatestPost = ({ postPromise }) => {
  const posts = use(postPromise);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    })
  }, []);

  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 res-padding">
          {posts.map((post, index) => (
            <PostCard
              key={post._id}
              post={post}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            ></PostCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
