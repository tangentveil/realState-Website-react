import React from "react";

// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

// import link
import { Link } from "react-router-dom";

// import logo
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <>
      <header className="py-6 mb-12 border-b">
        <div className="container mx-auto flex justify-between items-center ssm:flex-col md:flex-row">
          {/* logo */}
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>

          <div className="flex justify-start items-center ssm:flex-col">
            <ul className="flex justify-between items-center gap-6 ssm:flex-col ssm:py-4 md:flex-row">
              <li className="bg-violet-200 px-4 py-2 rounded-lg transition">
                <Link to="/">Rent</Link>
              </li>
              <li className="hover:bg-violet-200 px-4 py-2 rounded-lg transition">
                <Link to="/">Buy</Link>
              </li>
              <li className="hover:bg-violet-200 px-4 py-2 rounded-lg transition">
                <Link to="/">Sell</Link>
              </li>
              <li className="flex hover:bg-violet-200 px-4 py-2 rounded-lg transition">
                <Link to="/">ManageProperty</Link>
                <RiArrowDownSLine className="dropdown-icon-secondary" />
              </li>
              <li className="flex hover:bg-violet-200 px-4 py-2 rounded-lg transition">
                <Link to="/">Resources</Link>
                <RiArrowDownSLine className="dropdown-icon-secondary" />
              </li>
            </ul>
          </div>

          {/* buttons */}
          <div className="flex items-center gap-6">
            <Link
              className="hover:text-violet-900 hover:bg-violet-200 px-4 py-2 rounded-lg transition"
              to=""
            >
              Log in
            </Link>
            <Link
              className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition"
              to=""
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
