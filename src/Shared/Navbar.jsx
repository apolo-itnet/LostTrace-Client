import { use, useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import {
  FaHome,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
  FaPlus,
  FaList,
  FaCheckCircle,
  FaMoon,
  FaSun,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiContactsBook3Line } from "react-icons/ri";
import Button from "./Button/Button";
import SecondaryBtn from "./Button/SecondaryBtn";
import { motion } from "framer-motion";
import { slideDown } from "../Utility/animation";
import { AuthContext } from "../Contexts/AuthContexts";
import { toastError, toastSuccess } from "../Utility/notification";
import { Toaster } from "react-hot-toast";
import LoaderFull from "./Laoder/LoaderFull";
import { ChevronDownIcon, ChevronUpIcon, Contact, Users } from "lucide-react";

const Navbar = ({ toggleTheme, theme }) => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const avatarMenuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }

      // Close avatar menu if clicked outside
      if (
        avatarMenuRef.current &&
        !avatarMenuRef.current.contains(event.target)
      ) {
        setIsAvatarMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignout = async () => {
    setIsDropdownOpen(false);
    setIsLoading(true);

    try {
      await logOut();
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      toastSuccess("Successfully signed out!");
      // navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.error("Sign-out error:", error);
      toastError(`Sign-out failed: ${error.message}`, {
        style: { color: "red" },
      });
    }
  };

  const navLinks = [
    { label: "Home", href: "/", icon: <FaHome /> },
    { label: "Browse Posts", href: "/all-posts", icon: <FaSearch /> },
    { label: "About Us", href: "/about", icon: <HiOutlineUsers /> },
    { label: "Contact", href: "/contact", icon: <RiContactsBook3Line /> },
  ];

  const privateLinks = [
    { label: "Add Post", href: "/add-post", icon: <FaPlus /> },
    { label: "My Post", href: "/my-posted-list", icon: <FaList /> },
    { label: "Feedback", href: "/feedback", icon: <FaCheckCircle /> },
  ];

  return (
    <div>
      {isLoading && <LoaderFull />}
      <Toaster reverseOrder={false} />

      <div className="flex justify-between items-center py-2 border-b border-gray-100 res-padding manrope">
        <motion.div
          variants={slideDown(0.2)}
          initial="initial"
          animate="animate"
          className="navbar flex justify-between items-center w-full"
        >
          {/* Mobile: Menu + Logo */}
          <div className="navbar-start flex items-center gap-2">
            {/* Mobile Menu Button */}
            <div className="relative lg:hidden" ref={mobileMenuRef}>
              <button
                onClick={() => setIsMobileMenuOpen((p) => !p)}
                className="btn btn-ghost"
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Mobile Dropdown Menu */}
              <div
                className={`absolute left-0 top-full mt-2 w-56 bg-base-100 shadow-lg rounded-lg transition-all duration-300 ease-in-out
                  ${
                    isMobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }
                `}
              >
                <ul className="flex flex-col gap-1 p-2">
                  {/* Public nav links */}
                  {navLinks.map((link, index) => (
                    <li key={index} className="list-none">
                      <NavLink
                        to={link.href}
                        className={({ isActive }) =>
                          `flex items-center px-3 py-3 gap-2 rounded-md transition-all ease-in-out duration-300 text-xs 
            ${
              isActive
                ? "bg-teal-700 text-base-100"
                : "hover:bg-teal-800 hover:text-base-100"
            }`
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.icon} <span>{link.label}</span>
                      </NavLink>
                    </li>
                  ))}

                  {/* Private nav links if logged in */}
                  {user &&
                    privateLinks.map((link, index) => (
                      <li key={index} className="list-none">
                        <NavLink
                          to={link.href}
                          className={({ isActive }) =>
                            `flex items-center px-3 py-3 gap-2 rounded-md transition-all ease-in-out duration-300 text-xs 
                          ${
                            isActive
                              ? "bg-teal-700 text-base-100"
                              : "hover:bg-teal-800 hover:text-base-100"
                          }`
                          }
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.icon} <span>{link.label}</span>
                        </NavLink>
                      </li>
                    ))}

                  {/* Auth section for mobile */}
                  {user ? (
                    <li>
                      <button
                        onClick={() => {
                          handleSignout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm border border-transparent hover:border-teal-700 transition-colors ease-in-out duration-300 cursor-pointer"
                      >
                        <FaSignOutAlt /> Signout
                      </button>
                    </li>
                  ) : (
                    <>
                      <li>
                        <Link
                          to="/signin"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <SecondaryBtn className="w-full" label={"Sign In"} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/signup"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Button className="w-full" label={"Sign Up"} />
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Logo */}
            <div >
              <Link to="/" className="hidden lg:flex">
                <img
                  src={"https://i.postimg.cc/0jyV0sJ7/Lost-Trace-Logo.png"}
                  alt="Lost Trace Logo"
                  className="w-22"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex justify-center items-center">
            <ul className="text-sm font-medium flex items-center gap-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-3 rounded-md transition-all ease-in-out duration-300 
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

          {/* Right side: Avatar or Auth */}
          <div className="navbar-end flex-1 gap-6">
            {user ? (
              <div className="relative hidden lg:block" ref={avatarMenuRef}>
                {/* Avatar Button */}
                <button
                  onClick={() => setIsAvatarMenuOpen((p) => !p)}
                  className="w-full flex items-center gap-2 btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                >
                  <div className="w-10 rounded-full">
                    {user.photoURL ? (
                      <img
                        src={
                          user?.photoURL ||
                          "https://i.postimg.cc/C5kPH183/user-2.png"
                        }
                        alt="User"
                      />
                    ) : (
                      <FaUserCircle className="w-10 h-10" />
                    )}
                  </div>
                  {/* Smooth rotating arrow */}
                  <div
                    className={`transform transition-transform duration-300 ease-in-out hidden lg:flex ${
                      isAvatarMenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDownIcon className="text-teal-700 w-6 h-6" />
                  </div>
                </button>

                {/* Dropdown Menu (Avatar) */}
                <div
                  className={`absolute right-0 mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-60 flex-col gap-2 transition-all duration-300 ease-in-out
                  ${
                    isAvatarMenuOpen
                      ? "opacity-100 translate-y-0 flex"
                      : "opacity-0 -translate-y-2 pointer-events-none hidden"
                  }
                `}
                >
                  {privateLinks.map((link, index) => (
                    <li key={index} className="list-none w-full">
                      <NavLink
                        to={link.href}
                        className={({ isActive }) =>
                          `flex items-center px-3 py-3 gap-2 rounded-md transition-all ease-in-out duration-300 text-xs 
                          ${
                            isActive
                              ? "bg-teal-700 text-base-100"
                              : "hover:bg-teal-800 hover:text-base-100"
                          }`
                        }
                        onClick={() => setIsAvatarMenuOpen(false)}
                      >
                        {link.icon} <span>{link.label}</span>
                      </NavLink>
                    </li>
                  ))}

                  <li className="w-full list-none">
                    <button
                      onClick={() => {
                        handleSignout();
                        setIsAvatarMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-3 rounded-md text-xs border border-transparent hover:border-teal-700 transition-colors ease-in-out duration-300 cursor-pointer"
                    >
                      <FaSignOutAlt /> Signout
                    </button>
                  </li>
                </div>
              </div>
            ) : (
              <div className="md:flex gap-4 hidden">
                <Link to="/signin">
                  <SecondaryBtn className="px-6" label={"Sign In"} />
                </Link>
                <Link to="/signup">
                  <Button className="px-6" label={"Sign Up"} />
                </Link>
              </div>
            )}
          </div>
        </motion.div>

        {/* Theme Button */}
        <div className="pl-2">
          <button onClick={toggleTheme} className="btn btn-circle text-xl">
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
