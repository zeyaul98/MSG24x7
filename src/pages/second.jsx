import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

const VideoUnavailable = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      
      
      <div className="
        flex flex-col sm:flex-row
        items-center justify-center
        gap-4
        bg-[#2f2f2f]
        w-full sm:w-[70%]
        h-[300px] sm:h-[400px]
        rounded
        relative
      ">
        
        
        <MdErrorOutline size={32} className="text-gray-300" />

       
        <div className="text-center sm:text-left text-white">
          <p className="text-base sm:text-lg font-semibold">
            Video unavailable
          </p>
          <p className="text-sm text-gray-300">
            This video is unavailable
          </p>
        </div>

 
        <a
          href="https://www.youtube.com"
          className="absolute bottom-4 right-4"
        >
          <FaYoutube
            size={28}
            className="text-gray-400 hover:text-red-500"
          />
        </a>

      </div>
    </div>
  );
};

export default VideoUnavailable;
