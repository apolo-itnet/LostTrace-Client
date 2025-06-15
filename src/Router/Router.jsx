import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import AddPost from "../AddPost/AddPost";
import PrivateRoutes from "../Routes/PrivateRoutes";
import PostDetails from "../Pages/PostDetails/PostDetails";
import LoaderFull from "../Shared/Laoder/LoaderFull";
import MyPost from "../Pages/MyPostedList/MyPost.";
import AllPosts from "../Pages/AllPosts/AllPosts";
import UpdatePost from "../AddPost/UpdatePost";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/add-post",
        element: (
          <PrivateRoutes>
            <AddPost />
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-post",
        loader: () => fetch(`http://localhost:5000/posts`),
        element: <AllPosts />,
        hydrateFallbackElement: <LoaderFull />,
      },
      {
        path: "/posts/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/posts/${params.id}`),
        element: (
          <PrivateRoutes>
            <PostDetails />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <LoaderFull />,
      },
      {
        path: "/my-posted-list",
        element: (
          <PrivateRoutes>
            <MyPost />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-post/:id",
        element: (
          <PrivateRoutes>
           <UpdatePost/>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Router;
