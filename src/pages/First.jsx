import React from "react";
import { HiMiniTrophy } from "react-icons/hi2";
import { IoIosFlash } from "react-icons/io";
import { FaRocket } from "react-icons/fa";

const First = () => {
  console.log();
  

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 text-center">
    <div className="w-full bg-black flex justify-center py-4">
      <div className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 ">
        
        <HiMiniTrophy className="text-yellow-400" size={16} />
        <p className="text-xs sm:text-sm md:text-base font-medium text-white text-center">
          Best Digital Marketing & IT Company 
          <span className="text-green-500 font-semibold">
             —Awarded by BEA
          </span>
        </p>
        <IoIosFlash className="text-yellow-400" size={16} />
      </div> 
    </div>
    
            <h1 className="text-2xl sm:text-5xl md:text-5xl font-bold leading-tight">
          <span className="inline-flex items-center gap-2">
            <FaRocket className="text-yellow-500" />
            0% Markup on WhatsApp Business API
          </span>
          <br />
          <span className="mt-3 block">
            Sell 3X via WhatsApp{" "}
            <span className="text-yellow-400">✨</span>
          </span>
        </h1>
        <p className="mx-auto text-3xl mt-6 sm:text-base text-gray-500">
             WhatsApp Ads, Broadcasting, Automations, Payments in One platform
          powered by AI <span>✨</span>
        </p>
        <button className="bg-green-500 px-4 py-5 rounded-full font-semibold text-xl hover:bg-green-400 hover:scale-90 my-5"> Connect on WhatsApp</button>
    </div>
  );
};

export default First;
