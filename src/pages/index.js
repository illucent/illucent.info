import React from "react";
import Link from "gatsby-link";
// import {UndrawArtLover} from "react-undraw-illustrations";
// import Image from "../components/image";
import google_error from "../images/google_maps_error_v00000111.png";

let de=`&nbsp;<a target="_blank" href="https://developereconomics.net?utm_campaign=referrer&utm_source=website&utm_medium=banner&utm_content=1500x750&member_id=GwBK27Ed&lang=en"><img src="https://developer-economics.cdn.prismic.io/developer-economics/de7534bec98de830fffd502913842c3f6395e2e5_twitter_post_506x253.jpg"></a>`


const IndexPage = () => (
  <div>
    <h2 className="unicase bg-grey-light my-8 p-3">
      under construction
    </h2>
    <p>  
     <a href="https://developers.google.com/maps/documentation/javascript/v2tov3" alt="Upgrading Your Maps JavaScript API Application from V2 to V3" className="text-indigo hover:text-grey no-underline">Upgrading Your Maps JavaScript API Application from V2 to V3</a><br/>
     <a href="https://www.latecnosfera.com/2016/06/google-maps-api-error-missing-keymap-error-solved.html" alt="Google Maps API error: MissingKeyMapError [SOLVED]" className="text-indigo hover:text-grey no-underline">Google Maps API error: MissingKeyMapError [SOLVED]</a><br/>
     <a href="https://ssl-config.mozilla.org/" alt="SSL Configuration Generator" className="text-indigo hover:text-grey no-underline">SSL Configuration Generator</a><br/>
     <a href="https://movingtohttps.com" alt="Migrate from HTTP to HTTPS with ease" className="text-indigo hover:text-grey no-underline">Migrate from HTTP to HTTPS with ease </a> <br/>
     <a href="https://www.silkstream.net/blog/2017/11/pros-cons-lets-encrypt-free-ssl-certificate.html" alt="Pros & Cons of Let's Encrypt Free SSL Certificate" className="text-indigo hover:text-grey no-underline">Pros & Cons of Let's Encrypt Free SSL Certificate </a><br/>
     <a href="https://dev.to/booyaa/lets-encrypt-certificate-renewal-without-downtime-1njp" alt="Let's Encrypt certificate renewal without downtime" className="text-indigo hover:text-grey no-underline">Let's Encrypt certificate renewal without downtime </a><br/>
     <a href="https://www.thesslstore.com/blog/tls-1-3-everything-possibly-needed-know/" alt="TLS 1.3: Everything you need to know" className="text-indigo hover:text-grey no-underline">TLS 1.3: Everything you need to know </a><br/>
    <div
            dangerouslySetInnerHTML={{ __html: de }}
     />
  
     <h3 className="unicase bg-grey-light my-8 p-3">
      and / or you can hire me to modernize applications (re-develop refactor existing apps) to help me earn components to build spaceship and escape the planet earth
    </h3>
    
  </p>
  </div>
);

export default IndexPage;
