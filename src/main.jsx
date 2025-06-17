import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Router from "./Router/Router";
import AuthProvider from "./Contexts/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  duration: 800,
  easing: "ease-in-out",
  once: false,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>
);
