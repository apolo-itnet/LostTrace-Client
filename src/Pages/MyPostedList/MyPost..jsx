import React, { Suspense, useState } from "react";
import PostList from "./PostList";
import useAuth from "../../Hooks/useAuth";
import { myPostPromise } from "../../API/myPostApi";
import { ListCheck, ListTodo } from "lucide-react";
import LoaderFull from "../../Shared/Laoder/LoaderFull";

const MyPost = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div>
      <section className="w-full league  text-white">
        <div className="sticky top-20.5 bottom-5 z-10">
          {/* Tabs */}
          <div className="py-8 bg-teal-800">
            <div className="res-padding">
              <h1 className="text-6xl font-semibold bebas tracking-wider py-4 ">
                {activeTab === "active" ? "Post List" : "Recovery List"}
              </h1>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="inline-flex justify-start items-center space-x-2 res-padding bg-teal-800 rounded-br-full pb-3 border-t border-base-300 ">
            <a
              className={`flex items-center flex-shrink-0 px-5 py-3 border-b-4 text-lg font-medium cursor-pointer ${
                activeTab === "active" ? "border-b-4 border-amber-400" : ""
              }`}
              onClick={() => setActiveTab("active")}
            >
              <ListCheck size={22} /> Active
            </a>
            <a
              className={`flex items-center flex-shrink-0 px-5 py-3 border-b-4 text-lg font-medium cursor-pointer  ${
                activeTab === "recovered" ? "border-b-4 border-amber-400" : ""
              }`}
              onClick={() => setActiveTab("recovered")}
            >
              <ListTodo size={22} /> Recovered
            </a>
          </div>
        </div>

        {/* Suspense Fallback */}
        <Suspense fallback={<LoaderFull/>}>
          <PostList
            myPostPromise={myPostPromise(user?.email, activeTab)}
            activeTab={activeTab}
          />
        </Suspense>
      </section>
    </div>
  );
};

export default MyPost;
