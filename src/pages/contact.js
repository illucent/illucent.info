import React from "react";
import Link from "gatsby-link";


const ContactPage = () => (
  <form name="contact_form" method="POST" data-netlify="true" className="mx-auto md:w-1/2">
    <p className="leading-loose mb-8">
      Here is an example of a form built using Tailwind. Click{" "}
      <a
        href="https://tailwindcss.com/docs/examples/forms"
        className="font-bold no-underline text-grey-darkest"
      >
        here
      </a>{" "}
      to see more examples.
    </p>

    <label
      className="block font-bold mb-2 text-xs uppercase"
      htmlFor="email"
    >
      email
    <input
      className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      id="email"
      type="email"
      placeholder="email"
    />
    </label>

    <label
      className="block font-bold mb-2 text-xs uppercase"
      htmlFor="first-name"
    >
      First Name
     <input
      className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      id="first-name"
      name="first-name"
      type="text"
      placeholder="First Name"
    />
    </label>

    <label className="block font-bold mb-2 text-xs uppercase" htmlFor="message">
      Message
    <textarea
      className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      placeholder="Say something..."
      rows="8"
    />
    </label>
    <div data-netlify-recaptcha></div>
    <button className="border-b-4 border-grey-darker hover:border-grey-dark bg-grey-dark hover:bg-grey font-bold px-6 py-3 rounded text-sm text-white">
      Submit
    </button>
  </form>
);

export default ContactPage;
