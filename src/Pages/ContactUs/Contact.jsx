import React from 'react';
import { Mail, Phone, MapPin, User, MessageSquareText } from "lucide-react";
const Contact = () => {
  return (
    <div>
        <section className="w-full min-h-screen bg-slate-200 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-8 md:p-16">
        <h2 className="text-3xl md:text-5xl font-black bebas text-center text-teal-800 mb-12 uppercase">
          Contact <span className="text-amber-400">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Info Side */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-teal-800">
              <Mail className="text-amber-400" />
              <p className="text-sm md:text-base">support@losttrace.com</p>
            </div>
            <div className="flex items-center gap-4 text-teal-800">
              <Phone className="text-amber-400" />
              <p className="text-sm md:text-base">+880 1234 567890</p>
            </div>
            <div className="flex items-center gap-4 text-teal-800">
              <MapPin className="text-amber-400" />
              <p className="text-sm md:text-base">
                Chittagong, Bangladesh
              </p>
            </div>
          </div>

          {/* Right Form Side */}
          <form className="space-y-6">
            <div className="flex items-center border-b border-teal-800/30 focus-within:border-amber-400 py-2">
              <User className="text-teal-800 mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full outline-none bg-transparent text-teal-800 placeholder:text-teal-800/60"
              />
            </div>

            <div className="flex items-center border-b border-teal-800/30 focus-within:border-amber-400 py-2">
              <Mail className="text-teal-800 mr-3" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full outline-none bg-transparent text-teal-800 placeholder:text-teal-800/60"
              />
            </div>

            <div className="flex items-center border-b border-teal-800/30 focus-within:border-amber-400 py-2">
              <MessageSquareText className="text-teal-800 mr-3" />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="w-full outline-none bg-transparent text-teal-800 placeholder:text-teal-800/60 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-amber-400 text-teal-800 px-6 py-3 rounded-full font-semibold hover:bg-amber-500 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;