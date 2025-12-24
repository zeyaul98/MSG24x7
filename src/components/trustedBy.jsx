import React from "react";

const TrustedBy = () => {
  // 👉 LOGOS WITH IMAGES
  const logos = [
    { id: 1, name: "Blulife", img: "https://blulifeinternational.in/assets/images/public_site/footer-logo.png" },
    { id: 2, name: "Torero", img: "https://static.wixstatic.com/media/b60a7d_6059f44a487c4126b5a306b3fb05f952~mv2.jpg/v1/fit/w_2500,h_1330,al_c/b60a7d_6059f44a487c4126b5a306b3fb05f952~mv2.jpg" },
    { id: 3, name: "Eclat", img: "https://www.eclathealth.com/hs-fs/hubfs/raw_assets/public/EclatHealthSolutions_January2021/images/ECLAT_logo.png?width=340&height=156&name=ECLAT_logo.png" },
    { id: 4, name: "Spine", img: "https://esotericsoftware.com/files/branding/spine_logo_dark.png" },
    { id: 5, name: "HR Matrics", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpeAPDsJGh2CsafnWc9DfumRpUuaTgz6M5A&s" },
    { id: 6, name: "Collegejankari", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcXb1xxQiuKvE8T8hTbQXlAvD0QV2MW3qog&s" },
    { id: 7, name: "Kathiriya", img: "https://i0.wp.com/kathiriyasubsidyhouse.com/wp-content/uploads/2023/05/logo-kathariya.png?fit=511%2C109&ssl=1" },
    { id: 8, name: "Click4Delivery", img: "https://img.freepik.com/free-vector/free-delivery-logo-with-bike-man-courier_1308-48827.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 9, name: "Atharva", img: "https://static.wixstatic.com/media/2a20ce_ac4b7f4d1c6748119b884e411ddeb439~mv2.png" },
    { id: 10, name: "HealthTotal", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_czbJr-M_vqmNkJ8uoAfAEw2IyfeiFT8yDQ&s" },
  ];

  // 👉 STATS (same as before)
  const stats = [
    { count: "10,000+", text: "WhatsApp Business APIs" },
    { count: "10 Crore+", text: "WhatsApp Messages" },
    { count: "1,000 Crore+", text: "Revenue Driven for Businesses" },
    { count: "5+ Crores", text: "CTWA Ad Spend" },
  ];

  return (
    <section className="bg-black px-6 py-16 text-white">
      
      {/* Heading */}
      <h2 className="mb-12 text-center text-2xl font-semibold sm:text-3xl">
        Trusted by{" "}
        <span className="text-green-500">10,000+</span> Startup & Enterprises too
      </h2>

      {/* LOGOS */}
      <div className="mx-auto mb-16 grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center justify-center"
          >
            <img
              src={logo.img}
              alt={logo.name}
              className="max-h-12 object-contain grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      {/* STATS */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-xl border border-gray-700 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-700 p-6 text-center sm:border-b-0 sm:border-r last:border-r-0"
          >
            <p className="text-2xl font-bold sm:text-3xl">
              {item.count}
            </p>
            <p className="mt-2 text-sm text-gray-400">
              {item.text}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TrustedBy;
