import { Building2, DollarSign, Eye, MapPin } from "lucide-react";
import React, { use } from "react";
import { Link } from "react-router";

const PostList = ({ myPostPromise }) => {
  // Destructure from resolved promise
  const { posts = [], totalPosts = 0, recoveredCount = 0 } = use(myPostPromise);

  return (
    <div className="res-padding space-y-8">
      {/* 🔢 Count Display */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-800">
          Total Posts: <span className="text-blue-600">{totalPosts}</span>
        </h2>
        <h2 className="text-xl font-bold text-gray-800">
          Recovered Posts:{" "}
          <span className="text-green-600">{recoveredCount}</span>
        </h2>
      </div>

      {/* 📦 Post Cards */}
      {posts.map((post) => (
        <div
          key={post._id}
          className="max-w-5xl mx-auto flex justify-between items-start gap-6 p-6 border border-gray-200 hover:border-blue-500 rounded-xl hover:-translate-y-2 transition duration-500 ease-in-out group bg-white shadow-sm"
        >
          {/* 🖼️ Image */}
          <div className="flex items-center pr-4 mr-4 border-r border-gray-300 group-hover:border-blue-500 transition duration-300 ease-in-out">
            <img
              src={post.photo || "/fallback.png"}
              alt="Post Image"
              className="w-32 h-14 object-contain"
            />
          </div>

          {/* 📄 Details */}
          <div className="flex-1 space-y-1">
            <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>

            <p className="flex items-center gap-2 text-gray-600">
              <Building2 size={18} />
              {post.title}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                {post.location}
              </p>

              <p className="flex items-center gap-2 font-semibold">
                <DollarSign size={18} />
                <span className="text-blue-600">{post.rewards}</span>
              </p>
            </div>

            <span className="text-sm px-2 py-1 rounded-md bg-blue-100 text-blue-800 inline-block mt-1">
              {post.postType}
            </span>
          </div>

          {/* 🔍 View Button */}
          <div className="flex items-center justify-center">
            <Link
              to={`/posts/${post._id}`}
              className="btn btn-primary !rounded-full w-10 h-10 p-6 flex items-center justify-center"
            >
              <Eye className="cursor-pointer" size={20} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
