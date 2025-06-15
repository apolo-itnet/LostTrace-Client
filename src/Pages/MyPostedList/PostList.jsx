import React, { use } from "react";
import { Eye, MapPin, BookA, ListChecks, DollarSign, Pen } from "lucide-react";
import { Link } from "react-router";
// import EmptyPostAnimation from "../../Shared/Animation/EmptyPostAnimation";

const PostList = ({ myPostPromise }) => {
  const myPostData = use(myPostPromise);

  // if (!posts.length) return <EmptyPostAnimation />;

  return (
    <div className="res-padding space-y-8 py-10">
      {myPostData.map((post) => (
        <div
          key={post._id}
          className="max-w-5xl mx-auto flex justify-between gap-6 p-6 border border-gray-200 hover:border-teal-400 rounded-xl hover:-translate-y-2 transition duration-500 ease-in-out group bg-white shadow-sm"
        >
          <div className="flex items-center pr-4 mr-4 border-r border-gray-300">
            <img
              src={post.photo || "/fallback.png"}
              alt="Post Image"
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>

          <div className="flex-1 space-y-1">
            <h2 className="text-2xl font-bold text-gray-800">
              {post.itemTitle}
            </h2>
            <p className="flex items-center gap-2 text-gray-600">
              <ListChecks size={18} /> Category - {post.category}
            </p>

            <div className="flex flex-col gap-1 text-gray-600">
              <p className="flex items-center gap-2">
                <MapPin size={18} /> Location - {post.location}
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <DollarSign size={18} />
                Rewards - <span className="text-blue-600"> {post.rewards}</span>
              </p>
            </div>

            <p className="px-2 py-1 rounded-md bg-blue-100 text-blue-800 inline-block mt-1">
              {post.postType}
            </p>
          </div>

          <div className="flex gap-1 items-center">
            <div className="flex items-center justify-center cursor-pointer">
              <Link
                to={`/posts/${post._id}`}
                className="btn bg-teal-800 hover:bg-amber-400 transition-colors ease-out duration-300 !rounded-lg w-8 h-8 p-5 flex items-center justify-center  "
              >
                <button>
                  <Eye className=" text-base-100 cursor-pointer" size={18} />
                </button>
              </Link>
            </div>

            <div className="flex items-center justify-center cursor-pointer">
              <Link
                to={`/posts/${post._id}`}
                className="btn bg-amber-400 hover:bg-teal-800 transition-colors ease-out duration-300 !rounded-lg w-8 h-8 p-5 flex items-center justify-center  "
              >
                <button>
                  <Pen className=" text-base-100 cursor-pointer" size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
