import { useState } from "react";
import { FaBars, FaTimes, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Menu from "./menu.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className=" sticky top-0 z-50 w-full bg-black">
      <div className="mx-auto  flex h-[70px] max-w-7xl items-center justify-between px-4">
        
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="MSG24x7"
            className="h-9 w-9"
          />

          <div className="leading-tight text-white">
            <p className="text-base font-semibold">MSG24x7</p>
            <p className="text-[11px] text-gray-400">
              Powered by DIGINTRA
            </p>
          </div>

          <div className="mx-2 hidden h-6 w-px bg-gray-600 sm:block" />

          <div className="hidden sm:flex items-center gap-2 text-green-500">
            <FaWhatsapp size={18} />
            <span className="text-sm font-medium">WhatsApp</span>
          </div>
        </div>

        {/* toggle button wenqn open in mobile pirpose */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>

        {/* it is for lagge scrreen  */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm text-white hover:text-gray-300">
            View Offer Plans
          </a>
          <a className="text-sm text-white hover:text-gray-300">
            Testimonials
          </a>
          <button className="flex items-center gap-2 rounded-md bg-green-500 px-5 py-2 text-sm font-semibold text-black hover:bg-green-600">
            Get Offer Now <FaArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* for mobile */}
        {open ? <Menu /> : null}
    </header>
  );
};

export default Navbar;
