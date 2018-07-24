import React from "react";
import Taken from "../images/taken.svg";

const NotFoundPage = () => (
  <div>
    <img src={Taken} className="block mx-auto w-1/2" />
    <h2 className="bg-yellow inline-block my-8 p-3">
      The requested URL [URL] was not found on this server.
    </h2>
  </div>
);

export default NotFoundPage;
