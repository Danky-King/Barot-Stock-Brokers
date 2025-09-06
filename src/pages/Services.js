import React from "react";
import Layout from "../components/Layout";

export default function Services() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto p-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-white">Trading</h3>
            <p className="mt-2 text-gray-300">
              Stock, commodities, and derivative trading on NSE/BSE with advanced tools.
            </p>
          </div>
          <div className="bg-black p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-white">Portfolio Management</h3>
            <p className="mt-2 text-gray-300">
              Tailored portfolio management for long-term growth and risk management.
            </p>
          </div>
          <div className="bg-black p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-white">Research & Analysis</h3>
            <p className="mt-2 text-gray-300">
              In-depth market research, fundamental & technical analysis.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
