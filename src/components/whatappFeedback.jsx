import React from "react";

const WhatsAppFeatures = () => {
  const features = [
    {
      id: 1,
      icon: "🧠",
      title: "Upload Contacts and Start Broadcasting",
      highlight: "Broadcasting",
      desc: "Smart Campaign Manager for managing contacts and smooth broadcasting to unlimited users. Broadcast to thousands of users in minutes. Get template approvals in 10 seconds!",
    },
    {
      id: 2,
      icon: "💥",
      title: "Ensure High Delivery via Smart Retries & Retargeting",
      highlight: "Smart Retries & Retargeting",
      desc: "Retarget on the basis on Clicks, Replies, Delivered and more. Setup up to 3 automated retries for failed messages to ensure high delivery.",
    },
    {
      id: 3,
      icon: "🤝",
      title: "Multi-Human Live Chat Support",
      highlight: "Live Chat Support",
      desc: "Add unlimited team members and assign chats in an automated manner with smart agent routing. Shared team inbox to solve customer support on WhatsApp.",
    },
    {
      id: 4,
      icon: "🧩",
      title: "Drag & Drop Chatbot Builder",
      highlight: "Chatbot Builder",
      desc: "Build Chatbots in 10 minutes with our drag and drop flow builder. Connect your APIs and integrations seamlessly to build efficient and complex Chatbots @2,999 / month",
    },
    {
      id: 5,
      icon: "🛍️",
      title: "Build Catalog – Sell on WhatsApp",
      highlight: "Sell on WhatsApp",
      desc: "Build catalogs, add your products and collect payments within WhatsApp seamlessly! All included in Drag & Drop Flow Builder! @2,999 / month",
    },
  ];

  return (
    <section className="bg-black px-6 py-6 text-white">
      <div className="mx-auto max-w-7xl">
        
        
        <div className="mb-14 max-w-3xl ">
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
            Build Seamless Customer Experiences on{" "}
            <span className="text-green-500">WhatsApp</span> ⚡
          </h2>
          <p className="text-sm text-gray-400 sm:text-base">
            Conversion-Driven Features Designed to Boost Your Revenue
          </p>
        </div>

        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-gray-700 bg-black p-6 transition hover:border-green-500"
            >
              <h3 className="mb-3 text-lg font-semibold">
                <span className="mr-2">{item.icon}</span>
                {item.title.replace(item.highlight, "")}
                <span className="text-green-500">
                  {item.highlight}
                </span>
              </h3>

              <p className="text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatsAppFeatures;
