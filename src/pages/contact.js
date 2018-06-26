import React from "react";
import Link from "gatsby-link";


const ContactPage = () => (
  <form name="contact_form" method="POST" data-netlify="true" className="mx-auto md:w-1/2">
    <div
      className="flex flex-wrap -mx-3 mb-6"
    >
       <div
        className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
       >
          <label 
             className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
             for="grid-first-name"
          >
            First Name
          </label>
          <input 
            name="firstname"
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight"
            id="grid-first-name"
            type="text"
            placeholder="John"
          >
          <p 
           className="text-red text-xs italic"
          >Please fill out this field.
          </p>
       </div>
       <div 
         className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
       >
          <label 
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-email"
          >
            email
          </label>
          <input 
            name="email"
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight"
            id="grid-email"
            type="text"
            placeholder="email@domain.com"
          >
          <p
          className="text-red text-xs italic"
          >
          Please fill out this field.
          </p>
       </div>
       </div>
       <div 
         className="flex flex-wrap -mx-3 mb-6"
       >
       <div 
         className="w-full px-3"
       >
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs mb-2"
            for="grid-message"
          >
            Message
          </label>
          <textarea
             name="message"
             className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight"
             id="grid-message"
             placeholder="message"
          >
         </textarea>
          <p 
          className="text-grey-dark text-xs italic"
          >
          Make it as long and as You like
         </p>
      </div>
  </div>
  <div
  data-netlify-recaptcha
  >
  </div>
  <button 
    className="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded"
    type="submit"
    >
      Submit
    </button>
  </form>
);

export default ContactPage;
