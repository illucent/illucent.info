import React from "react";
import Link from "gatsby-link";

const ContactPage = () => (
  <form name="contacts_form" method="post" data-netlify="true" className="mx-auto md:w-1/2">
    <label
      className="block font-bold mb-2  uppercase"
      htmlFor="email"
    >
      email
    </label>
    <input
      className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      id="email"
      type="email"
      placeholder="email@domain.info"
      name="email"
    />
    <label className="block font-bold mb-2  uppercase" htmlFor="message">
      Message
    </label>
    <textarea
      className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      placeholder="say something ..."
      rows="8"
      name="message"
    />
    <div
    data-netlify-recaptcha
    >
    </div>
     <button className="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded">
      submit
    </button>
  </form>
);

export default ContactPage;
