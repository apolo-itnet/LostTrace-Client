import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link, useLoaderData } from "react-router";
import Button from "../../Shared/Button/Button";
import RecoveryPost from "./RecoveryPost";

const PostDetails = () => {
  //GET FIREBASE USER
  const { user } = useAuth();
  const userPostData = useLoaderData();

  //FETCH USER DATA FROM MONGODB
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(
        `http://localhost:5000/users/${userPostData.email}`
      );
      const data = await res.json();
      setUserData(data);
    };
    if (userPostData.email) {
      fetchUserData();
    }
  }, [user]);

  //IF POST TYPE IS LOST AND FOUND THE BUTTON IS LOST, ELSE IT IS FOUND
  const postType =
    userPostData.postType === "lost" ? "Found This!" : "This is Mine!";

  // DISBALED THE BUTTON POSTED USER CAN'T CLICK THE BUTTON
  const isPostedByUser = user?.email === userPostData?.email;

  //IF POST IS RECOVERED THE BUTTON IS DISABLED
  const isRecovered = userPostData.status === "recovered";

  return (
    <div>
      <div className="w-full mx-auto p-4 res-padding flex gap-10 items-center justify-between manrope">
        {/* Left Side */}
        <div className="flex-1 flex-col  mb-4">
          {/* Header */}

          <div className="w-full flex justify-center items-center">
            <div className="w-lg flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <img
                  src={
                    userData?.photoURL ||
                    "https://i.postimg.cc/rpZPq7cP/user-4.png"
                  }
                  alt="Posted By"
                  className="w-12 h-12 rounded-full"
                />
                <p className="text-sm text-gray-600 ">
                  posted by{" "}
                  <span className="font-bold"> {userData?.name || ""}</span>
                </p>
              </div>
              <button className="text-blue-500 hover:text-blue-700">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0zm5 0a2 2 0 114 0 2 2 0 01-4 0z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="w-full flex justify-center items-center ">
            <img
              src={userPostData.photo || "https://via.placeholder.com/48"}
              alt="Post Image"
              className="w-[512px] h-[512px] object-cover object-top rounded-xl mb-4  border border-base-300 hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 uppercase">
          {/* Body */}
          <div className="mb-4">
            <h3 className="text-4xl font-semibold league uppercase text-teal-600">
              {userPostData.itemTitle}
            </h3>

            <div className="w-60 flex items-center mb-4 border border-base-300 rounded-lg py-2 gap-3 ">
              <p className="text-center font-bold border-r border-gray-600 px-2">
                Post Type{" "}
              </p>
              <p className="text-center text-gray-600">
                {userPostData.postType}
              </p>
            </div>

            <div className=" text-base font-semibold">
              <p> Description </p>
              <p className="text-sm font-normal text-gray-600">
                {userPostData.description}
              </p>
            </div>
          </div>
          <div className="flex gap-2 pb-4">
            <p className="font-bold">Category</p>
            <p className="text-gray-600">{userPostData.category}</p>
          </div>
          <div className="flex flex-col gap-2 py-4">
            <div className="flex gap-2">
              <p className="font-bold">Lost Date -</p>
              <p>{userPostData.date}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold">Lost Time -</p>
              <p>{userPostData.time}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p className="font-bold">Lost Location -</p>
              <p>{userPostData.location}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold">Lost District -</p>
              <p>{userPostData.district}</p>
            </div>
          </div>
          <div className="flex gap-2 py-6">
            <p className="font-bold">Rewards - </p>
            <p className="font-bold text-teal-600">{userPostData.rewards}</p>
          </div>
          {isPostedByUser ? (
            <div className="inline-flex flex-col gap-2 ">
              <Button
                label="You cannot recover your own post"
                type="button"
                disabled
                className="text-red-500"
              />
              <p className="text-red-500 text-sm font-medium">
                You are the owner of the post
              </p>
            </div>
          ) : isRecovered ? (
            <div className="inline-flex flex-col gap-2 ">
              <Button label="Already Recovered" type="button" disabled className="text-red-500" />
              <p className="text-red-500 text-sm font-medium">
                This post is already recovered
              </p>
            </div>
          ) : (
            <div className="flex">
              <Button
                label={postType}
                type="button"
                onClick={() =>
                  document.getElementById("recovery-modal").showModal()
                }
              />
              <RecoveryPost post={userPostData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
