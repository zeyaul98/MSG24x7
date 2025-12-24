import React from 'react'
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";


const menu = () => {
  return (
   
        
        <div className="absolute left-0 top-[70px] w-full border-t border-gray-800 bg-black">
          <div className="flex flex-col gap-8 px-6 py-10">
            
            <a className="text-xl text-white">
              View Offer Plans
            </a>

            <a className="text-xl text-white">
              Testimonials
            </a>

            <div className="flex items-center gap-3 text-green-500">
              <FaWhatsapp size={22} />
              <span className="text-lg font-medium">WhatsApp</span>
            </div>

            <button className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-4 text-lg font-semibold text-black">
              Get Offer Now
              <FaArrowRight size={18} />
            </button>
          </div>
        </div>
      
    
  )
}

export default menu