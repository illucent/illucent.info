import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

import appleTouchIcon from '../images/favicons/apple-touch-icon.png';
import favicon32 from '../images/favicons/favicon-32x32.png';
import favicon16 from '../images/favicons/favicon-16x16.png';
import maskIcon from '../images/favicons/safari-pinned-tab.svg';

import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="illucent"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "HandheldFriendly", content: "True" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "HandheldFriendly", content: "True" },
        { name: "theme-color", content: "#ffffff" }
      ]}
    />
  
  <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}/>
  <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
  <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
  <link rel="mask-icon" href={maskIcon} color="#5bbad5"/>
  
    <Header />
    <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
