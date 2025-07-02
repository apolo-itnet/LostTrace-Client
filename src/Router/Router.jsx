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
import FeedbackForm from "../Pages/Testimonial/FeedbackForm";
import ErrorPage from "../Shared/ErrorPage";
import About from "../Pages/AboutUs/About";
import Contact from "../Pages/ContactUs/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
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
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
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
        path: "/all-posts",
        loader: () => fetch(`https://lost-trace.vercel.app/posts`),
        element: <AllPosts />,
        hydrateFallbackElement: <LoaderFull />,
      },
      {
        path: "/post-details/:id",
        loader: ({ params }) =>
          fetch(`https://lost-trace.vercel.app/posts/${params.id}`),
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
            <UpdatePost />
          </PrivateRoutes>
        ),
      },
      {
        path: "/feedback",
        element: (
          <PrivateRoutes>
            <FeedbackForm />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Router;
