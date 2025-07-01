import React from "react";
import { Link } from "react-router";
import SecondaryBtn from "./Button/SecondaryBtn";
import useAuth from "../Hooks/useAuth";
import Button from "./Button/Button";
import { Eye } from "lucide-react";

const PostCard = ({ post, ...props }) => {
  const { user } = useAuth();
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
      <div className="rounded-2xl  shadow-none bg-base-100  hover:shadow-xs hover:-translate-y-1 transition-all duration-500 ease-in-out h-full manrope ">
        <div className="flex flex-col min-h-full">
          {/* Header */}
          <div className="inline-block flex-col items-center relative">
            <div className="w-full h-50">
              <img
                src={photo || "https://via.placeholder.com/48"}
                alt="FlyChat"
                className=" object-cover object-center w-full h-full rounded-tr-2xl rounded-tl-2xl "
              />
              <p
                className={`league font-bold uppercase text-white flex items-center justify-start pl-3 text-sm absolute -top-2 -right-2 size-20 rounded-full ${
                  postType === "lost" ? "bg-amber-400" : "bg-teal-800"
                }`}
              >
                {postType}
              </p>
            </div>
          </div>

          {/*  Details */}
          <div
            className={`border-b border-x rounded-b-2xl ${
              postType === "lost" ? "border-amber-400" : " border-teal-800"
            }`}
          >
            <div className="flex-grow space-y-2 p-3 flex flex-col items-start text-sm manrope ">
              <h2 className="text-base uppercase font-semibold line-clamp-1">{itemTitle}</h2>

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
            <div className="flex w-full h-full justify-center items-center pb-4">
              {postType === "lost" ? (
                <Link to={`/post-details/${_id}`}>
                  <SecondaryBtn label="View Details" />
                </Link>
              ) : (
                <Link to={`/post-details/${_id}`}>
                  <Button
                    label="View Details"
                    // img={<Eye size={18} />}
                    className=""
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
