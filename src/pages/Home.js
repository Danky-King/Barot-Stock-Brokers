import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [clients, setClients] = useState(0);
  const [activeClients, setActiveClients] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const clientsFinal = 3000;
    const activeFinal = 800;
    const yearsFinal = new Date().getFullYear() - 1995;

    let clientsCounter = 0;
    let activeCounter = 0;
    let yearsCounter = 0;

    const interval = setInterval(() => {
      if (clientsCounter < clientsFinal) clientsCounter += 30;
      if (activeCounter < activeFinal) activeCounter += 8;
      if (yearsCounter < yearsFinal) yearsCounter += 1;

      setClients(clientsCounter > clientsFinal ? clientsFinal : clientsCounter);
      setActiveClients(activeCounter > activeFinal ? activeFinal : activeCounter);
      setYears(yearsCounter > yearsFinal ? yearsFinal : yearsCounter);

      if (
        clientsCounter >= clientsFinal &&
        activeCounter >= activeFinal &&
        yearsCounter >= yearsFinal
      )
        clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[400px] flex flex-col justify-center items-center text-center bg-white">
        <div className="px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-black">
            Invest Smart, Trade Fast
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Empowering investors since <span className="font-semibold text-black">1995</span>
          </p>
          <a
            href="/services"
            className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold transition"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto p-10 text-center grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-black p-8 rounded-2xl shadow-md hover:scale-105 transition">
          <h2 className="text-5xl font-bold text-white">{clients}+</h2>
          <p className="mt-2 text-gray-300">Clients Served</p>
        </div>
        <div className="bg-black p-8 rounded-2xl shadow-md hover:scale-105 transition">
          <h2 className="text-5xl font-bold text-white">{activeClients}+</h2>
          <p className="mt-2 text-gray-300">Active Clients</p>
        </div>
        <div className="bg-black p-8 rounded-2xl shadow-md hover:scale-105 transition">
          <h2 className="text-5xl font-bold text-white">{years}+</h2>
          <p className="mt-2 text-gray-300">Years of Excellence</p>
        </div>
      </section>
    </Layout>
  );
}
