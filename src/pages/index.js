import React from "react";
import Link from "gatsby-link";
import Chilling from "../images/chilling.svg";

const IndexPage = () => (
  <div className="text-center">
    <img src={Chilling} className="block mx-auto w-1/2" />
    <h2 className="bg-yellow inline-block my-8 p-3">
      illucent.info & illucent.design are under construction
    </h2>
  </div>
);

export default IndexPage;
