import React, { Suspense } from "react";
import PostList from "./PostList";
import useAuth from "../../Hooks/useAuth";
import { myPostPromise } from "../../API/myPostApi";

const MyPost = () => {
  const { user } = useAuth();
  

  return (
    <div>
      <section className="w-full league ">
        <div className="py-12 bg-teal-800/70">
          <h1 className="text-4xl uppercase font-bold py-6 res-padding text-base-100">
            My Posted list
          </h1>
        </div>
        <Suspense>
          <PostList myPostPromise={myPostPromise(user.email)}></PostList>
        </Suspense>
      </section>
    </div>
  );
};

export default MyPost;
