import { useState } from "react";
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
} from "react-icons/fa";
import Button from "./Button/Button";
import SecondaryBtn from "./Button/SecondaryBtn";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/", icon: <FaHome /> },
    { label: "Lost & Found", href: "/items", icon: <FaSearch /> },
  ];

  const privateLinks = [
    { label: "Add Item", href: "/addItem", icon: <FaPlus /> },
    { label: "My Items", href: "/myItems", icon: <FaList /> },
    { label: "All Recovered", href: "/recovered", icon: <FaCheckCircle /> },
  ];

  return (
    <div className="navbar py-4 bg-base-100 border-b border-base-300 res-padding manrope">
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
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
            // data-tip={currentUser.displayName || "User"}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {/* <div className="w-10 rounded-full">
                {currentUser.photoURL ? (
                  <img src={currentUser.photoURL} alt="User" />
                ) : (
                  <FaUserCircle className="w-10 h-10" />
                )}
              </div> */}
            <div className="w-10 rounded-full">
              {/* <img src={currentUser.photoURL} alt="User" /> */}
              <img src={"https://i.postimg.cc/021Dnhq7/woman-pic-4.jpg"} alt="User" />
              <FaUserCircle className="w-10 h-10" />
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
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link to="/signin">
            <SecondaryBtn label={<h1>Sign in</h1>}></SecondaryBtn>
          </Link>
          <Link to="/signup">
            <Button label={<h1>Sign UP</h1>}></Button>
          </Link>
        </div>

        <div>
          <button>
            <FaMoon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
