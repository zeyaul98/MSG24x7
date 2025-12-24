import React from "react";

const GoLiveSection = () => {
  const points = [
    {
      id: 1,
      text: "Free WhatsApp Business API (Website Needed)",
    },
    {
      id: 2,
      text: "Free Onboarding Call",
    },
    {
      id: 3,
      text: "Free Blue Tick Application (PR and News Link should be provided by CX)",
    },
    {
      id: 4,
      text: "Live Chat, Email & Call Support",
    },
    {
      id: 5,
      text: "7-day Money back Guarantee",
    },
    {
      id: 6,
      text: "FBM Verification Assistance",
    },
  ];

  return (
    <section className="bg-black px-15 py-16 text-white">
      <div className="mx-auto max-w-7xl text-center">

       
        <div className="mb-8 flex justify-center">
          <span className="rounded-full bg-green-200 px-6 py-2 text-sm font-semibold text-green-900">
            Get Offer Now — Upto 40% Off
          </span>
        </div>

        
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          Go Live in 10 minutes ⚡
        </h2>

       
        <p className="mb-16 text-sm text-gray-400 sm:text-base">
          Speed Onboarding & Effective Customer Support included in all Offers
        </p>

        
        <div className="grid gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {points.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3"
            >
              <span className="mt-1 text-green-500">✔</span>
              <p className="text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GoLiveSection;
