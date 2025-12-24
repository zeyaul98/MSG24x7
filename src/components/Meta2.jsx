import React from "react";

const Meta2 = () => {
  const items = [
    {
      title:
        "Click2WhatsApp Ads Manager (₹500 FREE Ad Credits included in Offer)",
      description:
        "3X Your leads with our WhatsApp Ad manager. Run ads on Instagram and Facebook that land on Whatsapp. Connect Chatbots & WhatsApp Payments to Convert Customers Instantly. Create, Analyse and Run Ads seamlessly via MSG24x7.",
      btnText: "Get Offer Now (Upto 40% Off) →",
      img: "/2.jpg",
    },
    {
      title: "WhatsApp Carousel, Coupon Code & Utility Messages",
      description:
        "Carousel Messages have 2X Click through rates than normal single image messages! Use Latest Templates like Coupon Code and Timer to boost your conversions and send Utility Messages for transaction and updates, alerts etc.",
      btnText: "Get Offer Now (Upto 40% Off) →",
      img: "3.jpg",
    },
    {
      title: "WhatsApp Payments for Quick Payment Collection",
      description:
        "Collect payments via Paytm, PhonePe, Google Pay, Netbanking, Cards etc seamlessly via Razorpay or PayU gateway within WhatsApp. Broadcast Payment Order Messages and get all reporting in one single dashboard.",
      btnText: "Get Offer Now (Upto 40% Off) →",
      img: "4.jpg",
    },
  ];

  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl space-y-24">
        {items.map((item, index) => (
          <div
            key={index}
            className={`grid items-center gap-12 md:grid-cols-2 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-full max-w-md rounded-xl"
              />
            </div>

            {/* CONTENT */}
            <div>
              <h3 className="mb-4 text-2xl font-semibold sm:text-3xl">
                ✨ {item.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>

              <button className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-black hover:bg-green-400">
                {item.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meta2;
