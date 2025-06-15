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
      <section className="w-full league">
        <div>
          {/* Tabs */}
          <div className="py-8 bg-teal-800 text-base-100">
            <div className="res-padding">
              <h1 className="text-6xl font-semibold bebas tracking-wider py-4">
                {activeTab === "active" ? "Post List" : "Recovery List"}
              </h1>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-start items-center space-x-2 res-padding">
            <a
              className={`flex items-center flex-shrink-0 px-5 py-3 border-b text-lg font-medium cursor-pointer ${
                activeTab === "active" ? "border-b-2 border-amber-400" : ""
              }`}
              onClick={() => setActiveTab("active")}
            >
              <ListCheck size={22} /> Active
            </a>
            <a
              className={`flex items-center flex-shrink-0 px-5 py-3 border-b text-lg font-medium cursor-pointer ${
                activeTab === "recovered" ? "border-b-2 border-amber-400" : ""
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
