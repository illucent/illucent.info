import React from "react";
import Link from "gatsby-link";
import Logo from "../../images/website-logo-transparent-v.000001.svg";

const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <nav className="bg-grey-light">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
    
        <Link to="/" className="flex items-center no-underline text-white">
            <img src={Logo} className="block mx-auto w-32 fill-current h-8 mr-2" />
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          id="nav"
          className="hidden md:flex md:items-center w-full md:w-auto"
        >
          <div className="text-sm">
            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline hover:text-grey text-black"
            >
              about
            </Link>
            <Link
              to="/contact"
              className="block md:inline-block mt-4 md:mt-0 no-underline hover:text-grey text-black"
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
