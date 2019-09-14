import React from "react";
import Link from "gatsby-link";

import supra_analog_tv_001 from "../images/v000001211-pprocess.png";
import supra_analog_tv_002 from "../images/v000001-pprocess.png";
import supra_analog_tv_003 from "../images/DSCN5634DSCN5634-pprocess.png";
import supra_analog_tv_004 from "../images/DSCN5633-DSCN5633-pprocess.png";


const SupraPage = () => (
 <div className="flex flex-col md:flex-row items-center"> 
    <div className="flex flex-wrap">
      <div className="leading-loose pl-4 text-justify">
        <div className="markdown w-full mx-auto py-2 px-4 bg-grey-lightest mb-4">

           <h3 className="unicase bg-grey-light my-8 p-3">
           I have "SUPRA CTV-21NX (Сhassis-3Y11)" analog TV for sale (semi-working blinking / genuine spare parts disassemble), 1500 UAH, contact me if interested.
           </h3>
            <div className="max-w overflow-hidden">
                 <img src={supra_analog_tv_001} className="w-full" alt="ArtLibre" />
            </div>
            <div className="max-w overflow-hidden">
                 <img src={supra_analog_tv_002} className="w-full" alt="ArtLibre" />
            </div>
            <div className="max-w overflow-hidden">
                 <img src={supra_analog_tv_003} className="w-full" alt="ArtLibre" />
            </div>
            <div className="max-w overflow-hidden">
                 <img src={supra_analog_tv_004} className="w-full" alt="ArtLibre" />
            </div>
  
        </div>
      </div>
    </div>
  </div>
);


export default SupraPage;
