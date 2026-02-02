import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const emailRef = useRef();

  const handleSubscribe = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        {
          email: emailRef.current.value,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        toast.success("Subscribed successfully! 🎉");
        emailRef.current.value = "";
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="rounded-t-3xl bg-gradient-to-r from-[#06384b] via-[#0b4f6c] to-[#06384b] text-white">
      <section className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-8 py-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-wide">
              TRI<span className="text-[#6fbf4a]">BASIS</span>
            </h1>

            <p className="text-sm text-white/80">
              We build scalable, high-performance digital solutions that help
              businesses grow faster with modern technology.
            </p>

            <div className="flex items-center gap-3 text-sm text-white/80">
              <FaLocationArrow className="text-[#6fbf4a]" />
              <span>Bengaluru, India</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/80">
              <FaMobileAlt className="text-[#6fbf4a]" />
              <span>+91 6371263407</span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2">
            <div>
              <h2 className="mb-4 text-lg font-semibold">Important Links</h2>
              <ul className="space-y-3 text-sm text-white/80">
                <li
                  onClick={() => scrollToSection("home")}
                  className="cursor-pointer hover:text-[#6fbf4a]"
                >
                  Home
                </li>
                <li
                  onClick={() => scrollToSection("about")}
                  className="cursor-pointer hover:text-[#6fbf4a]"
                >
                  About
                </li>
                <li
                  onClick={() => scrollToSection("services")}
                  className="cursor-pointer hover:text-[#6fbf4a]"
                >
                  Services
                </li>
                <li
                  onClick={() => scrollToSection("portfolio")}
                  className="cursor-pointer hover:text-[#6fbf4a]"
                >
                  Portfolio
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-semibold">Company</h2>
              <ul className="space-y-3 text-sm text-white/80">
                {["Privacy Policy", "About Us", "Services"].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-[#6fbf4a]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="mb-4 text-lg font-semibold">Stay Connected</h2>
              <p className="mb-3 text-sm text-white/80">
                Send your email to know better
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex items-center gap-2"
              >
                <input
                  ref={emailRef}
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="
                  flex-1 rounded-full px-4 py-2 text-sm text-black
                  focus:outline-none focus:ring-2 focus:ring-[#6fbf4a]
                  "
                />
                <button
                  type="submit"
                  className="
                  rounded-full
                  bg-[#f7931e]
                  px-4 py-2
                  text-sm font-semibold
                  text-white
                  transition-all
                  hover:bg-[#e68415]
                  "
                >
                  Send
                </button>
              </form>
              {/* Social connect */}
              <div className="mt-5 flex gap-4">
                <a
                  href="https://www.instagram.com/_tribasis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="cursor-pointer text-2xl transition-all hover:scale-110 hover:text-[#d62976]" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61587379651598"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="cursor-pointer text-2xl transition-all hover:scale-110 hover:text-[#1877F2]" />
                </a>

                <a
                  href="https://x.com/tribasiskikas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="cursor-pointer text-2xl transition-all hover:scale-110 hover:text-[#1DA1F2]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 py-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} TRIBASIS. All rights reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
