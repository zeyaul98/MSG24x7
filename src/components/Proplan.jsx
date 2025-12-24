import React, { useState } from "react";

const ProPlanCard = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-gray-700 bg-black p-6 text-white">

      {/* Title */}
      <h3 className="mb-6 text-center text-2xl font-semibold">
        Pro
      </h3>

      {/* Toggle */}
      <div className="mb-6 flex items-center justify-center gap-3 text-sm">
        <span className={!isAnnual ? "text-white" : "text-gray-400"}>
          Monthly
        </span>

        <div
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative h-6 w-11 cursor-pointer rounded-full bg-gray-600"
        >
          <span
            className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all duration-300 ${
              isAnnual ? "left-6" : "left-1"
            }`}
          />
        </div>

        <span className={isAnnual ? "text-white" : "text-gray-400"}>
          Annually
        </span>
      </div>

      {/* Price */}
      <div className="mb-6 text-center">
        {isAnnual ? (
          <>
            <p className="text-lg text-gray-500 line-through">₹68,988</p>
            <p className="text-4xl font-bold">₹62,500</p>
          </>
        ) : (
          <>
            <p className="text-lg text-gray-500 line-through">₹7,499</p>
            <p className="text-4xl font-bold">₹5,499</p>
          </>
        )}
        <p className="mt-1 text-xs text-gray-400">+ GST</p>
      </div>

      {/* Buy Button */}
      <button className="mb-6 w-full rounded-full bg-green-500 py-3 text-sm font-semibold text-black hover:bg-green-400">
        🛍️ Buy Now ({isAnnual ? "45% Off" : "35% Off"})
      </button>

      {/* Flow Builder Box */}
      <div className="rounded-xl bg-green-800 p-4 text-sm">
        <span className="mb-2 inline-block rounded bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
          Flow Builder
        </span>
        <p className="mt-2">
          <strong>5 Chatbot Flows:</strong>
          <br />
          ₹2,999/month (Charged Separately)
        </p>
      </div>

    </div>
  );
};

export default ProPlanCard;
