import React from "react";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto p-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">Contact Us</h2>
        <form className="max-w-md mx-auto bg-black p-6 rounded-2xl shadow-md flex flex-col space-y-4">
          <input type="text" placeholder="Name" className="p-3 rounded-md bg-black text-white" />
          <input type="email" placeholder="Email" className="p-3 rounded-md bg-black text-white" />
          <textarea placeholder="Message" className="p-3 rounded-md bg-black text-white" rows="4"></textarea>
          <button type="submit" className="bg-white text-black hover:bg-gray-300 p-3 rounded-md font-semibold">
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
}
