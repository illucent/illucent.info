import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { typography } from "../utils/typography.js";
import QRCode from "qrcode.react";

import appleTouchIcon from '../images/favicons/apple-touch-icon.png';
import favicon32 from '../images/favicons/favicon-32x32.png';
import favicon16 from '../images/favicons/favicon-16x16.png';
import maskIcon from '../images/favicons/safari-pinned-tab.svg';


import "./index.css";
import "./001-body-bg-color-fix.css";
import "../../static/fonts/iosevka/webfont.css"


let diagonalLine = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
    <polygon points="100 0 100 10 0 10" />
  </svg>`


const TemplateWrapper = ({ children, location }) =>  {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
                       <div className="flex flex-col font-mono min-h-screen text-grey-darkest site">
                       <Helmet
                         title="under construction lab / blog / portfolio"
                         meta={[
                           {/* https://gethead.info */},
                           { name: "description", content: "Sample" },
                           { name: "keywords", content: "html5, web, python, react" },
                           { name: "viewport", content: "width=device-width, initial-scale=1" },
                           { name: "HandheldFriendly", content: "True" },
                           { name: "msapplication-TileColor", content: "#da532c" },
                           { name: "HandheldFriendly", content: "True" },
                           { name: "theme-color", content: "#ffffff" },
                           { name: "google-site-verification", content: "x1dhNjhhi7Yy9Nf2yFNHrGlD-xbOi799Yzzwi748gVo" },
                            {/* pinterest */},
                           { name: "p:domain_verify", content: "eafcf2f128b092ce09fc06c62547d2f8" },
                         ]}
                         bodyAttributes={{
                               class: "root"
                         }}
                       />

                       <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
                       <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
                       <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
                       <link rel="mask-icon" href={maskIcon} color="#5bbad5" />
                       <link rel="amphtml" href="https://mercury.postlight.com/amp?url=https://illucent.tech" />
  
                         <Header />
                           <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full site-content">
                                   {children()}
                          <QRCode
                            value={url}
                            size={200}
                            bgColor={"#ffffff"}
                            fgColor={"#3d4852"}
                            level={"Q"}
                            includeMargin={true}
                            renderAs={"svg"}
                          />
                         {console.log(url,{url} )}
                          </div>
                         <Footer />
                       </div>
);
};

            
TemplateWrapper.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}


export default TemplateWrapper
