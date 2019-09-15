import React from "react";
import kiosk_not_found from "../images/DSCN5663DSCN5663_404_there_was_a_kiosk.png";

const NotFoundPage = () => (
  <div className="flex flex-col md:flex-row items-center"> 
      <div className="flex flex-wrap">
        <div className="leading-loose pl-4 text-justify">
            <div className="markdown w-full mx-auto py-2 px-4 bg-grey-lightest mb-4">
  
             <div className="max-w overflow-hidden">
                 <img src="../images/DSCN5663DSCN5663_404_there_was_a_kiosk.png" className="w-full" alt="404" />
             </div>
  
            <h2 className="bg-yellow inline-block my-8 p-3">
             404
            </h2>
                    </div>
              </div>
        </div>
  </div>
);

export default NotFoundPage;
