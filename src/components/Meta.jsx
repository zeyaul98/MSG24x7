import React from "react";
import Meta2 from "./Meta2.jsx";

const MetaPlatform = () => {
  const points = [
    "Direct WhatsApp Business API access",
    "Pay only what META charges - No hidden fees",
    "Slash your customer engagement costs instantly",
  ];

  return (
    <section className="bg-black px-6 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>

          <h3 className="mb-3 text-lg font-semibold">
            META’s actual cost — <span className="text-green-500">0% Markup!</span> 💬💰
          </h3>

          <p className="mb-6 text-sm text-gray-400">
            Ideal for businesses scaling notifications, support & sales on
            WhatsApp—without inflated pricing
          </p>

          {/* POINTS (MAP) */}
          <ul className="mb-8 space-y-3">
            {points.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-green-500">✔</span>
                <span className="text-sm text-gray-300">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mb-6 text-sm text-gray-300">
            🔥 Act Now! Get your FREE WABA strategy session now
          </p>

          <button className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-black hover:bg-green-400">
            Get Offer Now (Upto 40% Off) →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/1.jpg"
            alt="Meta Platform Dashboard"
            className="w-full max-w-md rounded-xl"
          />
        </div>

      </div>
      <Meta2/>
    </section>
  );
};

export default MetaPlatform;
