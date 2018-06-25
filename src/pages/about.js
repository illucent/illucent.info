import React from "react";
import Link from "gatsby-link";
import cautiousDog from "../images/cautious-dog.svg";

const AboutPage = () => (
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-2/3 md:mr-8">
      <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
        full stack employee / independent learner / digital artist

Copyleft: Unless otherwise stated, the content of this site is free, you can copy it, distribute it and modify it according to the terms of the Free Art License http://artlibre.org
http://linkedin.com/in/andrewstarodubtsev
https://github.com/illucent
devtech@illucent.info
callto: +380(99)0047245
https://illucent.info
<a href="CV-2018-06-25002749.8264014470300.pdf">CV</a>
      </p>
    </div>

    <div className="w-2/3 md:w-1/3">
      <img src={cautiousDog} />
    </div>
  </div>
);

export default AboutPage;
