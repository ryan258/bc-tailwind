import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="text-center pt-8 md:pt-16">
        <h1 className="font-bold text-xl mb-4 uppercase font-serif">Contact</h1>
        <p className="uppercase font-bold text-lg mb-4">
          For inquiries, please message
          <br />
          <a href="#" className="font-normal">
            bryanceemusic@gmail.com
          </a>
        </p>
        <h2 className="font-bold text-lg uppercase">Management</h2>
        <p className="uppercase">Managed by Lorem & Ipsum</p>
      </section>
      {/* <section>
        <form className="mx-auto md:w-1/2">
          <p className="mb-8 leading-loose">
            Here is an example of a form built using the official Tailwind CSS
            Custom Forms plugin.{` `}
            <a
              className="font-bold text-gray-700 no-underline"
              href="https://github.com/tailwindcss/custom-forms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the docs
            </a>
            .
          </p>

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            First Name
          </label>

          <input
            className="w-full mb-6 form-input"
            id="first-name"
            placeholder="Bill"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
            Last Name
          </label>

          <input
            className="w-full mb-6 form-input"
            id="last-name"
            placeholder="Murray"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            id="message"
            placeholder="Say something..."
            rows="8"
          />

          <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
            Submit
          </button>
        </form>
      </section> */}
    </Layout>
  );
}

export default ContactPage;
