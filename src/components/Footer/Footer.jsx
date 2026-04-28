import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const emailRef = useRef();

  const handleSubscribe = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        { email: emailRef.current.value },
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
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-indigo-600/20 blur-[100px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/10 blur-[120px]" />
      </div>

      {/* Top border accent */}
      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div data-aos="fade-up" data-aos-delay="0" className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
                <svg viewBox="0 0 512 512" className="h-7 w-7 text-white" fill="currentColor">
                  <path d="M256 80L432 384H80L256 80Z" />
                  <path d="M256 160L336 300H176L256 160Z" fillOpacity="0.3" />
                  <rect x="236" y="300" width="40" height="84" fillOpacity="0.4" />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tighter text-white">
                TRI<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">BASIS</span>
              </h2>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              We build scalable, high-performance digital solutions that help
              businesses grow faster with modern technology and bold strategy.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                  <FaLocationArrow size={12} />
                </span>
                Bengaluru, India
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                  <FaMobileAlt size={12} />
                </span>
                +91 6371263407
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-fuchsia-500/20 text-fuchsia-400">
                  <FaEnvelope size={12} />
                </span>
                tribasis.services@gmail.com
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "Portfolio", id: "portfolio" },
                { label: "Services", id: "services" },
                { label: "Contact", id: "contact" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-all duration-200 hover:text-white"
                  >
                    <span className="h-px w-0 bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-all duration-300 group-hover:w-4" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-purple-400">
              Company
            </h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Our Story", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <span className="group flex cursor-pointer items-center gap-2 text-sm text-slate-400 transition-all duration-200 hover:text-white">
                      <span className="h-px w-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 transition-all duration-300 group-hover:w-4" />
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
              Stay in the Loop
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              Get the latest updates on digital growth, delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                ref={emailRef}
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-indigo-500 focus:bg-white/10 focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/40"
              >
                <span className="relative z-10">Subscribe</span>
                <FaArrowRight className="relative z-10 text-xs transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </form>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/_tribasis/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400 hover:scale-110"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587379651598"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-110"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://x.com/tribasiskikas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400 hover:scale-110"
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text font-semibold text-transparent">
              TRIBASIS
            </span>
            . All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Crafted with precision &amp; passion in India 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
