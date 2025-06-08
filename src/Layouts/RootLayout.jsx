import React, { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Shared/Footer";
import "aos/dist/aos.css";
import Aos from "aos";
import LoaderFull from "../Shared/Laoder/LoaderFull";

const RootLayout = () => {
  const { state } = useNavigation();

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
    <div className="flex flex-col">
      <section className="sticky top-0 z-50 transition duration-300">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
      </section>
      <section className="flex-grow">
        {state === "loading" ? <LoaderFull /> : <Outlet />}
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default RootLayout;
