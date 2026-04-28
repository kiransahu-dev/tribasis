import React from "react";
import { BiPhoneCall } from "react-icons/bi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Connect", href: "#contact" },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowMenu && setShowMenu(false)}
      />

      {/* Menu Sidebar */}
      <div
        className={`
          fixed top-0 bottom-0 z-50 h-screen w-[75%] sm:w-[60%]
          bg-white dark:bg-slate-950
          border-r border-slate-200 dark:border-slate-800
          shadow-2xl shadow-slate-900/20 dark:shadow-slate-900/80
          px-8 pt-24 pb-6 
          transition-transform duration-300 ease-in-out
          md:hidden flex flex-col
          ${showMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <li
                key={link.name}
                className={`transition-all duration-500 ease-out transform ${showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${showMenu ? i * 100 : 0}ms` }}
              >
                <a
                  href={link.href}
                  className="block py-2 text-lg font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                  onClick={() => setShowMenu && setShowMenu(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            
            {/* Phone */}
            <li 
              className={`mt-4 pt-6 border-t border-slate-200 dark:border-slate-800 transition-all duration-500 ease-out ${showMenu ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${showMenu ? navLinks.length * 100 : 0}ms` }}
            >
              <div className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 transition-transform group-hover:scale-110 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <BiPhoneCall className="text-xl" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Call us</p>
                  <a href="tel:+916371263407" className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    +91 6371263407
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ResponsiveMenu;