import React from "react";
import Link from "gatsby-link";

const ContactPage = () => (
  <form name="contacts_form" method="post" data-netlify="true" className="mx-auto md:w-1/2">
    <label
      className="block font-bold mb-2 text-xs uppercase"
      htmlFor="first-name"
    >
      First Name
    </label>
    <input
      className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      id="first-name"
      type="text"
      placeholder="Bill"
      name="name"
    />
    <label
      className="block font-bold mb-2 text-xs uppercase"
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
    <label className="block font-bold mb-2 text-xs uppercase" htmlFor="message">
      Message
    </label>
    <textarea
      className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      placeholder="Say something..."
      rows="8"
      name="message"
    />
    <div
    data-netlify-recaptcha
    >
    </div>
    <button className="border-b-4 border-grey-darker hover:border-grey-dark bg-grey-dark hover:bg-grey font-bold px-6 py-3 rounded text-sm text-white">
      Submit
    </button>
  </form>
);

export default ContactPage;
