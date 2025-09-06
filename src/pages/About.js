import React from "react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto p-10 text-center">
        <h2 className="text-4xl font-bold mb-8 text-black">About Us</h2>

        {/* About Us Section */}
        <div className="bg-black text-white p-6 rounded-2xl shadow-md mb-8 text-left">
          <p className="mb-4">
            Established in 1995, Barot Stock Brokers has grown from a visionary idea into one of the most respected names in the Indian financial services industry. The firm was founded and is driven by the three Barot brothers, whose shared passion for finance, integrity, and service excellence laid the foundation for a company built on trust, innovation, and long-term relationships.
          </p>
          <p className="mb-4">
            From the beginning, our mission has been clear — to empower investors with reliable research, transparent execution, and personalized guidance in the fast-paced world of stock markets. Over nearly three decades, we have consistently delivered best-in-class stockbroking services, earning the confidence of clients ranging from individual investors to business houses.
          </p>
          <p className="mb-4">
            As markets evolved, so did we. Guided by foresight and commitment to client success, the Barot brothers expanded the company’s portfolio beyond stockbroking to create a comprehensive financial services platform. Today, we provide:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-300">
            <li>Stockbroking & Trading Services – Seamless trading experiences backed by technology and deep market expertise.</li>
            <li>Insurance Solutions – Covering life, health, motor, and general insurance with complete protection for every stage of life.</li>
            <li>Mutual Funds & Wealth Management – Tailored investment strategies, driven by research and proper analysis, designed to build sustainable wealth.</li>
            <li>Investment Advisory – Strategic guidance combining market insights, risk management, and financial planning.</li>
          </ul>
          <p className="mb-4">
            What truly sets Barot Stock Brokers apart is the philosophy instilled by its founders — a blend of tradition, trust, and technology. In a highly competitive market, we have continued to dominate by focusing on quality of service, ethical practices, and client-first solutions.
          </p>
          <p className="mb-4">
            With nearly three decades of legacy, the Barot brothers continue to steer the company with the same vision:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-300">
            <li>To maintain excellence in service,</li>
            <li>To expand opportunities for investors, and</li>
            <li>To remain a trusted partner in every financial journey.</li>
          </ul>
          <p>
            At Barot Stock Brokers, we believe in more than transactions. We believe in building enduring relationships, creating long-term value, and shaping a future where every client’s financial goals are achieved with confidence.
          </p>
        </div>

        {/* Founders’ Message */}
        <h2 className="text-3xl font-bold mb-4 text-black">Founders’ Message</h2>
        <div className="bg-black text-white p-6 rounded-2xl shadow-md text-left">
          <p className="mb-4">
            When we founded Barot Stock Brokers in 1995, our vision was simple yet ambitious — to create a financial services company built on trust, integrity, and long-term value. Coming from a family-driven entrepreneurial spirit, we, the three Barot brothers, shared a common belief: that investors deserve not just services, but genuine guidance and care for their financial growth.
          </p>
          <p className="mb-4">
            Over the years, our journey has been shaped by three core principles:
          </p>
          <ul className="list-decimal list-inside mb-4 text-gray-300">
            <li>Excellence in Service – Delivering quality solutions with consistency and reliability.</li>
            <li>Research-Driven Insights – Providing clients with proper analysis to support confident decisions.</li>
            <li>Client-Centric Growth – Building relationships that go beyond transactions and last for generations.</li>
          </ul>
          <p className="mb-4">
            From our beginnings in stockbroking, we have expanded into insurance, mutual funds, and investment advisory, making Barot Stock Brokers a one-stop destination for comprehensive financial solutions. Yet, our core remains unchanged — every decision we make is guided by our clients’ best interests.
          </p>
          <p className="mb-4">
            As we look to the future, our promise is to continue innovating, adapting, and leading with values, while ensuring that each client’s financial journey is secure, rewarding, and fulfilling.
          </p>
          <p className="font-semibold text-gray-200">– The Barot Brothers</p>
        </div>
      </section>
    </Layout>
  );
}
