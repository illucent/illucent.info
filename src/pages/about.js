import React from "react";
import Link from "gatsby-link";
import Copyleft from "../images/Licence_Art_Libre.svg";


let antiifCampaign = `<a href="http://cirillocompany.de/pages/anti-if">
  <img height="60" width="120"
  src="https://cdn.shopify.com/s/files/1/0257/1675/t/147/assets/banner_ive-joined.gif"
  alt="I have joined Anti-IF Campaign"></a>`


const AboutPage = () => (
  <div className="flex flex-col md:flex-row items-center"> 
    <div className="flex flex-wrap">
      <div className="leading-loose pl-4 text-justify">
        Hi! I am Andrew Starodubtsev freelancer full stack web developer / digital artist / independent and lifelong learner.
        <br/>
        <p>
        https://linkedin.com/in/andrewstarodubtsev <br />
        https://github.com/illucent <br />
        https://illucent.info <br />
        callto: 380(99)0047245 <br />
        email: devtech at illucent.info
        </p>
        <div>
        Copyleft: Unless otherwise stated, the content of this site is free,<br/>
        you can copy it, distribute it and modify it according to the terms of the Free Art License http://artlibre.org
            <a href="http://artlibre.org" className="flex items-center no-underline mx-2">
                      <img src={Copyleft} height="60"/>
            </a>
        </div>
        <div
            dangerouslySetInnerHTML={{ __html: antiifCampaign }}
        />
      </div>
    </div>
  </div>
);

export default AboutPage;
