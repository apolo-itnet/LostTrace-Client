import React from "react";
import { slideUp } from "../../Utility/animation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-slate-200">
      <div className="w-full h-[calc(100vh-80px)]  flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl text-center">
          <motion.h1
            {...slideUp(0.1)}
            className="text-4xl md:text-6xl font-black bebas uppercase text-teal-800 mb-8"
          >
            About <span className="text-amber-400">Lost Trace</span>
          </motion.h1>

          <div className="max-w-3xl leading-relaxed tracking-wide font-light mx-auto space-y-6 manrope te">
            <motion.p {...slideUp(0.2)}>
              Lost Trace is a powerful lost and found platform designed to
              reunite people with their missing items. Whether it's a gadget,
              document, or valuable personal item, our system allows users to
              quickly post and trace their losses in real time.
            </motion.p>
            <motion.p {...slideUp(0.25)}>
              Our goal is to build a safe, smart, and supportive community where
              honesty is rewarded. We believe that even the smallest act of
              return can make a big difference.
            </motion.p>
            <motion.p {...slideUp(0.3)}>
              From advanced search filters to real-time updates and reward
              systems, Lost Trace simplifies the recovery process like never
              before.
            </motion.p>

            <motion.p {...slideUp(0.35)}>
              Join our mission to make lost items found — with trust,
              technology, and togetherness.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
