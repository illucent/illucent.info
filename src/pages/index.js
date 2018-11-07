import React from "react";
import Link from "gatsby-link";
import Installation from "../images/undraw_app_installation_mbdv.svg";

const IndexPage = () => (
  <div className="text-center">
    <img src={Installation} className="block mx-auto w-1/2" />
    <h2 className="bg-grey-light inline-block my-8 p-3">
      illucent.info & illucent.design are under construction
    </h2>
    <p>
     <a href="https://developers.google.com/maps/documentation/javascript/v2tov3" title="Upgrading Your Maps JavaScript API Application from V2 to V3">Upgrading Your Maps JavaScript API Application from V2 to V3</a>
     <a href="https://www.silkstream.net/blog/2017/11/pros-cons-lets-encrypt-free-ssl-certificate.html" title="Pros & Cons of Let's Encrypt Free SSL Certificate">Pros & Cons of Let's Encrypt Free SSL Certificate<a>
     <a href="https://dev.to/booyaa/lets-encrypt-certificate-renewal-without-downtime-1njp" title="Let's Encrypt certificate renewal without downtime">Let's Encrypt certificate renewal without downtime</a>
    </p>
     <h3 className="bg-grey-light inline-block my-8 p-3">
      or you can hire me to refactor existing code to earn some resources for this website reconstruction
    </h3>
  </div>
);

export default IndexPage;
