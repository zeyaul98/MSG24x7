import React from "react";

const ProPlanCard = () => {
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-gray-700 bg-black p-6 text-white">
      
      {/* Title */}
      <h3 className="mb-6 text-center text-2xl font-semibold">
        Pro
      </h3>

      {/* Toggle */}
      <div className="mb-6 flex items-center justify-center gap-3 text-sm">
        <span className="text-white">Monthly</span>
        <div className="relative h-6 w-11 rounded-full bg-gray-600">
          <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white" />
        </div>
        <span className="text-gray-400">Annually</span>
      </div>

      {/* Price */}
      <div className="mb-6 text-center">
        <p className="text-lg text-gray-500 line-through">₹7,499</p>
        <p className="text-4xl font-bold">₹5,499</p>
        <p className="mt-1 text-xs text-gray-400">+ GST</p>
      </div>

      {/* Buy Button */}
      <button className="mb-6 w-full rounded-full bg-green-500 py-3 text-sm font-semibold text-black hover:bg-green-400">
        🛍️ Buy Now (35% Off)
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
