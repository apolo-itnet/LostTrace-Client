import React, { useEffect } from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer";
import "aos/dist/aos.css";
import Aos from "aos";

const RootLayout = () => {
  useEffect(() => {
    Aos.init({
      once: true
    })
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="sticky top-0 z-50 transition duration-300">
        <Navbar />
      </section>
      <section className="flex-grow">
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default RootLayout;
