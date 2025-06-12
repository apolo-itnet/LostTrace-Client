import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
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
} from "react-icons/fa";
import Button from "./Button/Button";
import SecondaryBtn from "./Button/SecondaryBtn";
import { motion } from "framer-motion";
import { slideDown } from "../Utility/animation";
import { AuthContext } from "../Contexts/AuthContexts";
import { toastError, toastSuccess } from "../Utility/notification";
import { Toaster } from "react-hot-toast";
import LoaderFull from "./Laoder/LoaderFull";

const Navbar = ({ toggleTheme, theme }) => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    { label: "Browse Listings", href: "/all-post", icon: <FaSearch /> },
  ];

  const privateLinks = [
    { label: "Add Post", href: "/add-post", icon: <FaPlus /> },
    { label: "My Post", href: "/my-posted-list", icon: <FaList /> },
    { label: "All Recovered", href: "/recovered", icon: <FaCheckCircle /> },
  ];

  return (
    <div>
      {isLoading && <LoaderFull/>}
      <Toaster reverseOrder={false} />
      <div className="flex justify-center items-center py-1 bg-base-100 border-b border-gray-100  res-padding manrope">
        <motion.div
          variants={slideDown(0.2)}
          initial="initial"
          animate="animate"
          className="navbar "
        >
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="flex items-center gap-2">
                      {link.icon} {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Logo */}
            <Link to="/">
              <img
                src={"https://i.postimg.cc/0jyV0sJ7/Lost-Trace-Logo.png"}
                alt="Lost Trace Logo"
                className="w-22"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navLinks.map((link, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Link to={link.href}>
                    {link.icon} <span className="">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dropdown avatar menu*/}
          <div className="navbar-end gap-6">
            {user ? (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                  data-tip={user.displayName || "User"}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 s"
                >
                  {privateLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="flex items-center gap-2"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {link.icon} <span className="">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={handleSignout}
                      className="flex items-center gap-2"
                    >
                      <FaSignOutAlt /> Signout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-4">
                <Link to="/signin">
                  <SecondaryBtn label={<h1>Sign in</h1>}></SecondaryBtn>
                </Link>
                <Link to="/signup">
                  <Button label={<h1>Sign UP</h1>}></Button>
                </Link>
              </div>
            )}
          </div>
        </motion.div>

        <div>
          <button onClick={toggleTheme} className="btn btn-circle  text-xl">
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
