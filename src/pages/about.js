import React from "react";
import Link from "gatsby-link";
import cautiousDog from "../images/cautious-dog.svg";

let antiifCampaign = `<a href="http://cirillocompany.de/pages/anti-if">
  <img height="60" width="120"
  src="http://cdn.shopify.com/s/files/1/0257/1675/t/147/assets/banner_ive-joined.gif"
  alt="I have joined Anti-IF Campaign"></a>`


const AboutPage = () => (
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-2/3 md:mr-8">
      <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
        full stack employee / independent learner / digital artist
<br/>
<p>
Copyleft: Unless otherwise stated, the content of this site is free, you can copy it, distribute it and modify it according to the terms of the Free Art License http://artlibre.org
    <a href="http://artlibre.org" className="flex items-center no-underline text-white mx-2">
              <img src={Copyleft} className="block mx-auto w-32" />
    </a>
</p>
  http://linkedin.com/in/andrewstarodubtsev
https://github.com/illucent
devtech@illucent.info
callto: +380(99)0047245
https://illucent.info
      </p>
    <div
            dangerouslySetInnerHTML={{ __html: antiifCampaign }}
    />

    </div>
    
    <div className="w-2/3 md:w-1/3">
      <img src={cautiousDog} />
    </div>
  </div>
);

export default AboutPage;
