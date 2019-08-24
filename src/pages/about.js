import React from "react";
import Link from "gatsby-link";
import Copyleft from "../images/Licence_Art_Libre.svg";
import ArtLibre from "../images/silver_ratio_artlibre_svg_inkscape_v000002.jpg";


let antiifCampaign = `<a href="https://francescocirillo.com/pages/anti-if-campaign">
  <img height="60" width="120"
  src="//cdn.shopify.com/s/files/1/0257/1675/t/152/assets/banner_ive-joined.gif"
  alt="I have joined Anti-IF Campaign"></a>`


let devBadge = `<a href="https://dev.to/devtech">
  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Andrew Starodubtev's DEV Profile" height="30" width="30">
</a>`


const AboutPage = () => (
  <div className="flex flex-col md:flex-row items-center"> 
    <div className="flex flex-wrap">
      <div className="leading-loose pl-4 text-justify">
        <div className="markdown w-full mx-auto py-2 px-4 bg-grey-lightest mb-4">
        Hi! I am Andrew Starodubtsev freelancer full stack web developer / WebOps engineer / independent and lifelong learner / digital artist, trying to
        make invisible visible, urbanist, moving everything to the internet, collecting lost & found objects, walking around the city, drinking 100% robusta coffee.

       <a href="https://linkedin.com/in/andrewstarodubtsev" target="blank" rel="noreferrer noopener" title="LinkedIn profile" className="text-center text-grey-dark no-underline rounded hover:text-black bg-gray-300">  LinkedIn</a>
       <a href="https://github.com/illucent" target="blank" rel="noreferrer noopener" title="github profile" className="text-center text-grey-dark no-underline rounded hover:text-black bg-gray-300">  github</a>
       <a href="https://earn.com/andrewstarodubtsev" target="blank" rel="noreferrer noopener" title="earn.com" className="text-center text-grey-dark no-underline rounded hover:text-black bg-gray-300">  earn.com</a>
       <div
            dangerouslySetInnerHTML={{ __html: devBadge }}
        />
       <a href="mailto:devtech@illucent.info" target="blank" rel="noreferrer noopener" title="e-mail" className="text-center text-grey-dark no-underline rounded hover:text-black bg-gray-300">  e-mail</a>
       <a href="tel:+443300271545" target="blank" rel="noreferrer noopener" title="phone number" className="text-center text-grey-dark no-underline rounded hover:text-black bg-gray-300">  phone number </a> +44(33)00271545
          <div
            dangerouslySetInnerHTML={{ __html: antiifCampaign }}
        />
       <a href="https://pbreadinglist.herokuapp.com/users/illucent" target="blank" rel="noreferrer noopener" title="my reading list" className="text-center text-grey-dark no-underline rounded hover:text-black bg-gray-300">  my reading list</a>
       my public gpg key <a href="https://pgp.surfnet.nl/pks/lookup?op=get&search=0xEBB8D8915B3B1802" target="blank" rel="noreferrer noopener" title="pub gpg key 0xEBB8D8915B3B1802" className="text-center text-grey-dark no-underline rounded hover:text-black">  0xEBB8D8915B3B1802</a>  (expired)
        <p>
        Copyleft: Unless otherwise stated, the content of this site is free,<br/>
        you can copy it, distribute it and modify it according to the terms of the Free Art License https://artlibre.org
        </p>
        <div className="max-w overflow-hidden">
             <img src={ArtLibre} className="w-full" alt="ArtLibre" />
        </div>
        <p>
        Inkscape Document Properties License 
        </p>
        <a href="http://artlibre.org" className="flex items-center no-underline mx-2">
                  <img src={Copyleft} height="60"/>
        </a>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
