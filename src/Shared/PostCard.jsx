import React from "react";
import { Link } from "react-router";
import SecondaryBtn from "./Button/SecondaryBtn";

const PostCard = ({ post, ...props }) => {
  const {
    _id,
    itemTitle,
    postType,
    category,
    brandModel,
    color,
    description,
    date,
    time,
    location,
    district,
    identityMark,
    documentNumber,
    photo,
    rewards,
  } = post;
  return (
    <div {...props}>
      <div className="rounded-xl border border-base-300 p-4 bg-base-100 hover:border-teal-800 hover:shadow-sm hover:-translate-y-1 transition-all duration-500 space-y-4 h-full">
        <div className="flex flex-col justify-center gap-2 min-h-full ">
          {/* Header */}
          <div className="flex items-center gap-4 w-full">
            <div className="">
              <img
                src={photo || "https://via.placeholder.com/48"}
                alt="FlyChat"
                className=" w-24 h-14 object-contain"
              />
            </div>
            <div className="flex flex-col justify-center items-start border-l-2 border-gray-300 pl-2 ">
              <h3 className="text-lg font-semibold text-gray-800">{itemTitle}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span>{location}</span>
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="flex-grow space-y-3 py-4">
            {/* Title */}
            <h2 className="text-lg font-medium text-gray-800 text-left">
              {itemTitle}
            </h2>

            {/* Job Type & Time */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{postType}</span>
              <span className="mx-1">•</span>
              <span className="flex items-center gap-1">
                {date}
              </span>
            </div>

            {/* Description */}
            <p className="text-left text-sm text-gray-500 line-clamp-2">
              {description}
            </p>
            
          </div>

          {/* Salary */}
          <div className="text-left flex gap-2 items-center mb-3">
            <span className="text-sm font-medium text-gray-500">
              Salary Range:
            </span>
            <p className="text-blue-600 font-semibold text-sm">
              {rewards}
            </p>
            <p className="text-sm text-gray-500">/monthly</p>
          </div>

          {/* Button */}
          <div className="flex w-full justify-center items-center">
            <Link to={`/posts/${_id}`}>
              <SecondaryBtn label={"View Details"}>
              </SecondaryBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
