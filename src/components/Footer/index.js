import React from "react";
import Gatsby from "../../images/gatsbyjs.svg";
import Netlify from "../../images/netlify-color-bg.svg";


const Footer = () => (
  <div className="bg-grey">
    <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
          <a href="https://www.gatsbyjs.org" className="flex items-center no-underline text-white mx-2">
                <img src={Gatsby} className="block mx-auto w-32" />
          </a>
          <a href="https://www.netlify.com/" className="flex items-center no-underline text-white mx-2">
               <img src={Netlify} className="block mx-auto w-32" />
          </a>
          <a href="https://tailwindcss.com" className="flex items-center no-underline text-white mx-2">
            <svg
              className="fill-current h-8 mr-2 w-16"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
          </a>
       </div>
       <div className="flex flex-wrap items-center justify-start max-w-xl mx-auto p-4 md:p-8">
         <section className="builtWith">
           <p>built using <a href="https://github.com/taylorbryant/gatsby-starter-tailwind" className="no-underline text-white">
             Gatsby starter (version 1) styled with Tailwind </a> source <a href="https://github.com/illucent/illucent.info" className="no-underline text-white">
             illucent.info</a> 
         </p>
          {new Date().getFullYear()}
        </section>
     </div>
  </div>
);

export default Footer;
