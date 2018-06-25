import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="illucent"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "HandheldFriendly", content: "True" }
      ]}
    />
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
