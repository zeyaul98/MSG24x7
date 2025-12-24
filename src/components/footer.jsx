import React, { useEffect, useState } from "react";

const OfferFooter = () => {
  // 48 hours = 172800 seconds
  const [seconds, setSeconds] = useState(24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    <div className="w-full fixed bottom-0 bg-yellow-800 p-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        
        <p className="text-white text-sm md:text-base">
          😊 Big Bumper Offer ends in :
          <span className="ml-2 font-semibold">
            {hours} h : {minutes} m : {secs} s
          </span>
        </p>

        <button className="rounded-md bg-orange-500 px-5 py-2 text-sm font-semibold text-white">
          Claim Offer
        </button>
      </div>
    </div>
  );
};

export default OfferFooter;
