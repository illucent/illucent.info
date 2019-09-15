import React from "react";
import Taken from "../images/DSCN5663DSCN5663_404_there_was_a_kiosk.jpg";

const NotFoundPage = () => (
  <div>
    <img src={Taken} className="block mx-auto w-1/2" />
    <h2 className="bg-yellow inline-block my-8 p-3">
     404
    </h2>
  </div>
);

export default NotFoundPage;
