import React from "react";
import Link from "gatsby-link";
import Gatsby from "../../images/gatsbyjs.svg";
import Netlify from "../../images/netlify-color-bg.svg";
import Copyleft from "../../images/Licence_Art_Libre.svg";

const Footer = () => (
  <div className="bg-blue">
    <img src={Gatsby} className="block mx-auto w-32" />
    <img src={Netlify} className="block mx-auto w-32" />
    <div className="flex justify-between mx-auto w-32">
        <Link to="/" className="flex items-center no-underline text-white">
          <svg
            className="fill-current h-8 mr-2 w-32"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
        </Link>
    </div>
   <img src={Copyleft} className="block mx-auto w-1/2" />
  </div>
);

export default Footer;
