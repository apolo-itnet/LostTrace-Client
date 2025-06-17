import React, { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { Outlet, useLocation, useNavigation } from "react-router";
import Footer from "../Shared/Footer";
import "aos/dist/aos.css";
import Aos from "aos";
import LoaderFull from "../Shared/Laoder/LoaderFull";
import titleMap from "../Hooks/titleMap";
import { match } from "path-to-regexp";

const RootLayout = () => {
  const { state } = useNavigation();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    let matchedTitle = "Lost Trace";

    for (const route of titleMap) {
      const matched = match(route.path, { decode: decodeURIComponent });
      if (matched(currentPath)) {
        matchedTitle = route.title;
        break;
      }
    }
    document.title = `${matchedTitle} | Lost Trace`;
  }, [location]);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div className="w-full flex flex-col min-h-screen">
      <section className="sticky top-0 z-50 transition duration-300">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
      </section>
      <section className="flex-grow">
        {state === "loading" ? <LoaderFull /> : <Outlet />}
      </section>
      <section className="mt-auto">
        <Footer />
      </section>
    </div>
  );
};

export default RootLayout;
