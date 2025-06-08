import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import AddPost from "../AddPost/AddPost";
import PrivateRoutes from "../Routes/PrivateRoutes";

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
    ],
  },
]);

export default Router;
