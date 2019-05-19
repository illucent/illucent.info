import React from "react";
import Taken from "../images/taken.svg";

const NotFoundPage = () => (
  <div>
    <img src={Taken} className="block mx-auto w-1/2" />
    <h2 className="bg-yellow inline-block my-8 p-3">
      this once worked
      this doesn't work anymore
    </h2>
  </div>
);

export default NotFoundPage;
