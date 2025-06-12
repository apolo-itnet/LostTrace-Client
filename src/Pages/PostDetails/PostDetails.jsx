import React from "react";

const PostDetails = () => {
  return (
    <div>
      <h1>PostDetails</h1>
      <div className="max-w-sm mx-auto p-4 bg-[#e0e5ec] rounded-2xl shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="Jose Leos"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-sm text-gray-600 font-medium">
              posted by Jose Leos
            </p>
          </div>
          <button className="text-blue-500 hover:text-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0zm5 0a2 2 0 114 0 2 2 0 01-4 0z" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1556912999-320cc89f0c57"
          alt="Post Image"
          className="w-full rounded-xl mb-4"
        />

        {/* Body */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          List of public corporations
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          All of the world's 10 largest companies as measured by market
          capitalization are American. Market capitalization is the total value
          of a company's entire purchased shares of stock...
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Upvote/Downvote */}
          <div className="flex space-x-2">
            <button className="px-2 py-1 rounded-lg bg-[#e0e5ec] shadow-inner text-sm flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 12h4v6h6v-6h4L10 3z" />
              </svg>
              <span>4</span>
            </button>
            <button className="px-2 py-1 rounded-lg bg-[#e0e5ec] shadow-inner text-sm text-red-500 flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17 8h-4V2H7v6H3l7 9z" />
              </svg>
              <span>1</span>
            </button>
          </div>

          {/* Share/Comment/Save */}
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 10c0-1.105-.895-2-2-2h-5V5.414a1 1 0 00-1.707-.707L4.586 9H2c-1.105 0-2 .895-2 2s.895 2 2 2h2.586l4.707 4.707A1 1 0 0010 17.586V14h6c1.105 0 2-.895 2-2z" />
              </svg>
              <span>33.7k</span>
            </div>
            <button className="hover:text-gray-800">Share</button>
            <button className="px-2 py-1 rounded-lg bg-[#e0e5ec] shadow-inner hover:shadow-md">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
