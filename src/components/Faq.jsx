import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const faqs = [
    {
      question:
        "After Payment how will the setup happen? How much time will it take?",
      answer:
        "After payment, our onboarding team will contact you within 10 minutes and guide you through the setup process, which usually completes within the same day.",
    },
    {
      question: "Can anyone help me to build my Chatbot?",
      answer:
        "Yes! Our team provides full support to help you build and launch your chatbot.",
    },
    {
      question: "What is 7-Day Money back guarantee?",
      answer:
        "If you are not satisfied within 7 days, you can request a full refund—no questions asked.",
    },
    {
      question: "Will my number get blocked? Is this via Official WhatsApp API?",
      answer:
        "We use the official WhatsApp Business API, which minimizes the risk of number bans.",
    },
    {
      question: "Can I send multiple messages in a conversation?",
      answer:
        "Yes, you can send multiple messages within a single conversation session.",
    },
  ];

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-black px-6 py-5 text-white">
      <div className="mx-auto max-w-5xl">

        <div className="space-y-2">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-700 px-6 py-2"
            >
              
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-base font-semibold sm:text-lg">
                  {index + 1}. {item.question}
                </span>

                <span className="ml-4 text-2xl font-light">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              
              {openIndex === index && (
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
