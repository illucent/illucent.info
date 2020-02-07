import React from "react";
import Link from "gatsby-link";
import Copyleft from "../images/Licence_Art_Libre.svg";
import ArtLibre from "../images/silver_ratio_artlibre_svg_inkscape_v000002.jpg";
import FontawesomeExtermalLinkAlt from "../images/external-link-alt-solid.svg";


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
        make invisible visible, experimenting, urbanist, moving everything to the internet, collecting lost & found objects, walking around the city, drinking 100% robusta coffee, sometimes i experience impostor syndrome <a href="https://raptori.dev/blog/impostor-syndrome-vs-the-dunning-kruger-effect" target="blank" rel="noreferrer noopener" title="Impostor Syndrome vs the Dunning-Kruger Effect" className="text-center text-grey-dark no-underline rounded hover:text-black bg-gray-300">1<img src="../images/external-link-alt-solid.svg" height="25" width="25"/></a>, <a href="https://medium.com/smells-like-team-spirit/an-amateurs-guide-to-turning-impostor-syndrome-into-an-asset-1bac56917d46" target="blank" rel="noreferrer noopener" title="An amateur’s guide to turning impostor syndrome into an asset" className="text-center text-grey-dark no-underline rounded hover:text-black bg-gray-300">2<img src=src="../images/external-link-alt-solid.svg" height="25" width="25"/></a>, <a href="https://dev.to/kathryngrayson/share-your-experiences-with-impostor-syndrome" target="blank" rel="noreferrer noopener" title="Share Your Experiences with Impostor Syndrome" className="text-center text-grey-dark no-underline rounded hover:text-black bg-gray-300">3<img src=src="../images/external-link-alt-solid.svg" height="25" width="25"/></a> or FOMO.
       <a href="https://linkedin.com/in/andrewstarodubtsev" target="blank" rel="noreferrer noopener" title="LinkedIn profile" className="text-center text-grey-dark no-underline rounded hover:text-black bg-gray-300">  LinkedIn</a>
       <a href="https://github.com/illucent" target="blank" rel="noreferrer noopener" title="github profile" className="text-center text-grey-dark no-underline rounded hover:text-black bg-gray-300">  github</a>
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
        you can copy it, distribute it and modify it according to the terms of the <a href="https://artlibre.org" target="blank" rel="noreferrer noopener" title="Free Art License" className="text-center text-grey-dark no-underline rounded hover:text-black">Free Art License </a>
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
