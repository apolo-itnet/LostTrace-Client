import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/signin',
        element: <Signin/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  },
]);

export default Router;
