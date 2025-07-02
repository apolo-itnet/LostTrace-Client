import React from "react";

const About = () => {
  return (
    <div>
      <section className="w-full min-h-screen bg-slate-200 flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-black bebas uppercase text-teal-800 mb-8">
            About <span className="text-amber-400">Lost Trace</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-teal-800 font-light max-w-3xl mx-auto">
            Lost Trace is a powerful lost and found platform designed to reunite
            people with their missing items. Whether it's a gadget, document, or
            valuable personal item, our system allows users to quickly post and
            trace their losses in real time.
            <br />
            <br />
            Our goal is to build a safe, smart, and supportive community where
            honesty is rewarded. We believe that even the smallest act of return
            can make a big difference.
            <br />
            <br />
            From advanced search filters to real-time updates and reward
            systems, Lost Trace simplifies the recovery process like never
            before.
            <br />
            <br />
            Join our mission to make lost items found — with trust, technology,
            and togetherness.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
