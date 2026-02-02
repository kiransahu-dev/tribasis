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
        relative z-[99]
        border-b border-[#6fbf4a]/30
        bg-gradient-to-r
        from-[#0b4f6c]
        via-[#0e7490]
        to-[#0b4f6c]
        text-white
        shadow-lg
        "
      >
        <nav className="container flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a href="/#home" className="text-2xl font-bold tracking-wide">
            TRI
            <span className="text-[#6fbf4a]">BASIS</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-10 md:flex">
            {/* Home Dropdown */}
            <li className="group relative cursor-pointer">
              <a
                href="/#home"
                className=" relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#6fbf4a] after:transition-all after:duration-300 hover:after:w-full "
              >
                Home
              </a>
            </li>

            {/* About Us */}
            <li>
              <a
                href="/#about"
                className=" relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#6fbf4a] after:transition-all after:duration-300 hover:after:w-full "
              >
                About Us
              </a>
            </li>

            {/* Portfolio  */}
            <li className="group relative cursor-pointer">
              <a
                href="/#portfolio"
                className=" relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#6fbf4a] after:transition-all after:duration-300 hover:after:w-full "
              >
                Portfolio
              </a>
            </li>

            {/* Services Mega Menu */}
            <li className="group relative cursor-pointer">
              <a
                href="/#services"
                className=" relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#6fbf4a] after:transition-all after:duration-300 hover:after:w-full "
              >
                Services
              </a>
            </li>

            {/* Connect */}
            <li className="group relative cursor-pointer">
              <a
                href="/#footer"
                className=" relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#6fbf4a] after:transition-all after:duration-300 hover:after:w-full "
              >
                Connect
              </a>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <BiPhoneCall className=" h-8 w-8 rounded-md bg-[#6fbf4a] p-1 text-xl hover:bg-[#5aaa3f]" />
              <div>
                <p className="text-sm">Call us</p>
                <a href="tel:+91123456789" className="text-lg">
                  +91 6371263407
                </a>
              </div>
            </li>

            {/* Theme Toggle */}
            <ThemeIcon
              onClick={toggleTheme}
              className="cursor-pointer text-2xl text-[#f7931e]"
            />
          </ul>

          {/* Mobile */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeIcon
              onClick={toggleTheme}
              className="cursor-pointer text-2xl text-[#f7931e]"
            />

            {showMenu ? (
              <HiMenuAlt1 size={30} onClick={toggleMenu} />
            ) : (
              <HiMenuAlt3 size={30} onClick={toggleMenu} />
            )}
          </div>
        </nav>
      </header>

      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
