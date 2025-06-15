import React from "react";
import { Link } from "react-router";
import SecondaryBtn from "./Button/SecondaryBtn";
import useAuth from "../Hooks/useAuth";

const PostCard = ({ post, ...props }) => {
  const {user} = useAuth();
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
      <div className="rounded-4xl border border-base-300 shadow-none bg-base-100  hover:shadow-xs hover:-translate-y-1 transition-all duration-500 ease-in-out h-full manrope">
        <div className="flex flex-col min-h-full">
          {/* Header */}
          <div className="inline-block flex-col items-center">
            <div className="w-full h-56">
              <img
                src={photo || "https://via.placeholder.com/48"}
                alt="FlyChat"
                className=" object-cover object-center w-full h-full rounded-tr-4xl rounded-tl-4xl "
              />
            </div>
            <p
              className={`font-bold tracking-widest uppercase p-2 text-white text-center text-lg ${
                postType === "lost" ? "bg-amber-400" : "bg-teal-800"
              }`}
            >
              {postType}
            </p>
          </div>

          {/*  Details */}
          <div className="flex-grow space-y-2 p-3 flex flex-col items-start text-sm ">
            <h2 className="text-xl font-bold line-clamp-1">{itemTitle}</h2>

            {/* Description */}
            <p className="text-left line-clamp-1 pr-2">{description}</p>

            {/* Rewards */}
            <div className="text-left flex gap-2 items-center mb-2">
              <p className="font-medium ">Rewards:</p>
              <p className="text-blue-600 font-semibold">{rewards}</p>
              <p className="text-sm text-gray-500">/- bdt</p>
            </div>
            <div>
              <p></p>
            </div>
          </div>

          {/* Button */}
          <div className="flex w-full justify-center items-center pb-4">
            <Link to={`/posts/${_id}`}>
              <SecondaryBtn label={"View Details"}></SecondaryBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
