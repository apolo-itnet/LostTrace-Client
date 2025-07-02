import react from "react";
import { Link } from "lucide-react";
import { NavLink } from "react-router";
import {
  SiCodepen,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin as Linkedin,
  SiX,
} from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiContactsBook3Line } from "react-icons/ri";

export const languages = ["En", "Es", "Fr", "De", "Ru"];

export const footerLinks = [
  { label: "Browse Posts", href: "/all-posts", icon: <FaSearch /> },
  { label: "About Us", href: "/about", icon: <HiOutlineUsers /> },
  { label: "Contact", href: "/contact", icon: <RiContactsBook3Line /> },
];

export const socials = [
  { href: "", icon: <SiGithub /> },
  { href: "", icon: <Linkedin /> },
  { href: "", icon: <SiCodepen /> },
  { href: "", icon: <SiX /> },
  { href: "", icon: <SiInstagram /> },
  { href: "", icon: <SiFacebook /> },
];

const Footer = () => {
  return (
    <footer className="flex flex-col  justify-center items-center res-padding overflow-hidden bg-slate-200 py-6 border-t border-gray-100">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-start align-bottom py-10">

        <div className="heading col-span-2 self-start">
          <h1 className="bebas opacity-40">
            <span className="text-7xl md:text-9xl xl:text-[14rem] leading-10 xl:leading-[10rem] text-teal-800">
              LOST
            </span>
            <span className="text-7xl md:text-9xl xl:text-[14rem] leading-10 xl:leading-[10rem] text-amber-400 -ml-2">
              TRACE
            </span>
          </h1>
          <p className="text-teal-800 w-xs">
            {" "}
            Lost Trace is a smart lost and found platform that helps users
            quickly post, search, and recover missing items with ease and
            security.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 text-xs text-teal-800 hover:underline"
          >
            More about us{" "}
            <span className="inline-block size-[10px] rounded-full bg-amber-400" />
          </a>
        </div>

        <div className="navMenu self-center lg:self-end lg:justify-self-end  ">
          <ul className="text-sm font-medium flex flex-col items-start gap-3">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-2 py-2 rounded-md transition-all ease-in-out duration-300 
                      ${
                        isActive
                          ? "bg-teal-700 text-base-100"
                          : "hover:bg-teal-800 hover:text-base-100"
                      } `
                  }
                >
                  {link.icon} {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="social-icon self-end justify-self-end">
          <ul className="flex flex-col gap-4">
            {socials.map((item, index) => (
              <li key={index} className="cursor-pointer bg-transparent">
                <a
                  href={item.href}
                  className="transition-color h-full w-full text-teal-800 duration-300 hover:text-amber-400"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="flex flex-col self-end text-right text-xs text-teal-800 md:text-center">
          <span>© 2025 — Copyright</span>
          <span>All Rights reserved</span>
        </p>
      </div>

      {/* <div className="absolute top-1/2 -right-[40%] z-0 w-lg  -translate-y-1/2 rounded-full bg-amber-400/5 p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
        <div className="size-full rounded-full bg-amber-400/10 p-14 md:p-20">
          <div className="size-full rounded-full bg-amber-400/20" />
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
