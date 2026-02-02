import React from "react";
import { BiPhoneCall } from "react-icons/bi";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`
        fixed top-0 bottom-0 z-50 h-screen w-[75%]
        bg-gradient-to-b from-[#0b4f6c] to-[#062f3f]
        px-8 pt-24 pb-6 text-white
        transition-all duration-300 ease-in-out
        md:hidden
        ${showMenu ? "left-0" : "-left-[100%]"}
      `}
    >
      {/* Logo / Brand */}
      <div className="mb-10">
        <p className="mt-1 text-sm text-white/70">
          Web Development Agency
        </p>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex flex-col gap-6 text-lg font-medium">
          <li>
            <a href="/#home" className="hover:text-[#6fbf4a]">
              Home
            </a>
          </li>

          <li>
            <a href="/#about" className="hover:text-[#6fbf4a]">
              About Us
            </a>
          </li>

          <li>
            <a href="/#portfolio" className="hover:text-[#6fbf4a]">
              Portfolio
            </a>
          </li>

          <li>
            <a href="/#services" className="hover:text-[#6fbf4a]">
              Services
            </a>
          </li>

          <li>
            <a href="/#footer" className="hover:text-[#6fbf4a]">
              Connect
            </a>
          </li>
        </ul>
      </nav>

      {/* Divider */}
      <div className="my-8 h-px bg-white/20" />

      {/* Contact */}
      <div className="flex items-center gap-3">
        <BiPhoneCall className="h-8 w-8 rounded-md bg-[#6fbf4a] p-1 text-xl text-black" />
        <div>
          <p className="text-sm text-white/70">Call us</p>
          <a href="tel:+916371263407" className="text-lg font-semibold">
            +91 6371263407
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-8 text-sm text-white/60">
        © {new Date().getFullYear()} Tribasis. All rights reserved.
      </div>
    </div>
  );
};

export default ResponsiveMenu;