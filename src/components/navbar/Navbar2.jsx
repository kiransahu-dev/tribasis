import React, { useEffect, useState, useCallback } from "react";
import { BiSolidSun, BiSolidMoon, BiPhoneCall } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const ThemeIcon = theme === "dark" ? BiSolidSun : BiSolidMoon;

  return (
    <>
      <header
        className="
        sticky top-0 z-[99]
        border-b border-slate-200 dark:border-slate-800
        bg-white/80 dark:bg-slate-950/80
        backdrop-blur-md
        shadow-sm dark:shadow-slate-900/20
        transition-colors duration-300
        "
      >
        <nav className="container flex h-[72px] items-center justify-between">
          <a href="/#home" className="flex items-center gap-2 text-2xl font-extrabold tracking-tighter">
            <span className="text-slate-900 dark:text-white">TRI</span>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-600 bg-clip-text text-transparent">BASIS</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            {/* Home Dropdown */}
            <li className="group relative cursor-pointer">
              <a
                href="/#home"
                className="font-medium text-sm tracking-wide text-slate-700 dark:text-slate-300 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:after:w-full transition-colors"
              >
                Home
              </a>
            </li>

            {/* About Us */}
            <li>
              <a
                href="/#about"
                className="font-medium text-sm tracking-wide text-slate-700 dark:text-slate-300 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:after:w-full transition-colors"
              >
                About
              </a>
            </li>

            {/* Portfolio  */}
            <li className="group relative cursor-pointer">
              <a
                href="/#portfolio"
                className="font-medium text-sm tracking-wide text-slate-700 dark:text-slate-300 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:after:w-full transition-colors"
              >
                Portfolio
              </a>
            </li>

            {/* Services Mega Menu */}
            <li className="group relative cursor-pointer">
              <a
                href="/#services"
                className="font-medium text-sm tracking-wide text-slate-700 dark:text-slate-300 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:after:w-full transition-colors"
              >
                Services
              </a>
            </li>

            {/* Connect */}
            <li className="group relative cursor-pointer">
              <a
                href="/#contact"
                className="font-medium text-sm tracking-wide text-slate-700 dark:text-slate-300 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:after:w-full transition-colors"
              >
                Connect
              </a>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3 group ml-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 transition-transform group-hover:scale-110 dark:bg-indigo-500/20 dark:text-indigo-400">
                <BiPhoneCall className="text-xl" />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Call us</p>
                <a href="tel:+916371263407" className="text-sm font-bold text-slate-800 transition-colors hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400">
                  +91 6371263407
                </a>
              </div>
            </li>

            {/* Theme Toggle */}
            <li className="ml-2">
              <button 
                onClick={toggleTheme}
                className="flex items-center justify-center rounded-full p-2 text-slate-500 transition-all hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
                aria-label="Toggle Theme"
              >
                <ThemeIcon className="text-2xl" />
              </button>
            </li>
          </ul>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center rounded-full p-2 text-slate-500 transition-all hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
            >
              <ThemeIcon className="text-2xl" />
            </button>

            <button
              onClick={toggleMenu}
              className="flex items-center justify-center rounded-full p-2 text-slate-500 transition-all hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
            >
              {showMenu ? (
                <HiMenuAlt1 size={28} />
              ) : (
                <HiMenuAlt3 size={28} />
              )}
            </button>
          </div>
        </nav>
      </header>

      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar;
