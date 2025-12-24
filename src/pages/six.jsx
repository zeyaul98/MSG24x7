import React from "react";
import Baseplan from "../components/baseplan"
import Proplan from "../components/proplan"

const ProPlanFeatures = () => {
  const features = [
    "Unlimited Free Service Conversations",
    "Unlimited Template Approvals",
    "Broadcasting & Retargeting",
    "Unlimited Agents & User Access",
    "Template Message & Chat APIs",
    "Broadcast Speed: 12000 Messages in 10 minutes",
    "20 Custom Attributes & 100 Tags",
    "Campaign Scheduler PRO",
    "Smart Agent Routing PRO",
    "Agent Transfer & Monitoring",
    "Click to WhatsApp Ads Manager",
    "Campaign Click Tracking PRO",
  ];

  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          🚀 0% Markup on WhatsApp Business API = More Savings for YOU! 🚀
        </h1>

        <p className="mx-auto max-w-2xl text-sm text-gray-400 sm:text-base">
          Business Owners, this is BIG!
        </p>
      </div>
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 items-stretch">

        
        <div className="md:col-span-3 flex flex-col justify-between">
          <Baseplan />
        </div>

        
        <div className="md:col-span-6">
          <h2 className="mb-4 text-xl font-semibold sm:text-3xl">
            Pro Plan + Flows + Ad Credits (All Features)
          </h2>

          <p className="mb-2 text-sm text-gray-400">
            Everything you need to Scale on WhatsApp – Speed onboarding in 10 minutes ⚡
          </p>

          <p className="mb-3 text-sm text-gray-400">
            India Conversation Pricing: Marketing: 0% markup on META Pricing,
            <span className="ml-2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-black">
              Click Here
            </span>
          </p>

          <ul className="space-y-1 text-sm">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-1">
                <span className="mt-1 text-green-500">✔</span>
                <span className="text-sm text-gray-300 sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT – PRO (SMALL) */}
        <div className="md:col-span-3 flex flex-col justify-between">
          <Proplan />
        </div>

      </div>
    </section>
  );
};

export default ProPlanFeatures;
