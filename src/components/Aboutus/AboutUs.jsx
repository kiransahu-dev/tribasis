import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLightbulb, FaRocket, FaPaintBrush, FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import AboutBg from "../../assets/about.png";

const AboutUs = () => {
  const formRef = useRef();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
      once: false,
    });
    AOS.refresh();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    emailjs
      .sendForm(
        "service_j2u3d32",
        "template_m8lscdl",
        formRef.current,
        "nfLzVZCCYFDIyhBd9"
      )
      .then(
        () => {
          setLoading(false);
          setMsg("Message sent successfully!");
          formRef.current.reset();
          setTimeout(() => setMsg(""), 5000);
        },
        () => {
          setLoading(false);
          setMsg("Failed to send message. Try again.");
        }
      );
  };

  return (
    <>
      <section className="relative w-full overflow-hidden py-20 lg:py-32" id="about">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${AboutBg})` }}
          />
          {/* Dark gradient overlay for modern look, lightened to show image */}
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 flex flex-col items-center justify-center">
          
          {/* Decorative central glow */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500 opacity-20 blur-[120px]"></div>

          <div className="flex flex-col items-center justify-center gap-16 text-center w-full">
            {/* Top Text Content */}
            <div data-aos="fade-up" className="max-w-4xl flex flex-col items-center rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur-md p-8 md:p-12 shadow-2xl">
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                About{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent pb-2">
                  Tribasis
                </span>
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-slate-300 md:text-lg max-w-3xl">
                <p>
                  <strong className="font-semibold text-white">Tribasis</strong> is a
                  premier web development agency focused on building
                  high-performance websites that help businesses stay ahead of
                  their competitors.
                </p>

                <p>
                  We believe a website is more than just design. It’s your first
                  impression, your credibility, and a powerful business asset.
                  That’s why we combine strategy, clean design, and precise
                  development to create websites that don’t just look good —
                  <span className="font-semibold text-indigo-400">
                    {" "}
                    they perform.
                  </span>
                </p>

                <p>
                  We don’t follow shortcuts or one-size-fits-all solutions. We
                  build with purpose, paying attention to detail and long-term
                  growth.
                </p>

                <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <p className="font-medium text-white">
                    Tribasis works with brands that want clarity, quality, and
                    results.
                  </p>
                  <p className="mt-3 text-sm text-slate-400">
                    If you want to blend in, we’re not for you. <br />
                    <span className="mt-1 block text-base font-semibold text-fuchsia-400">
                      If you want to stand out and move ahead, welcome to Tribasis.
                    </span>
                  </p>
                </div>

                {/* CTA BUTTON */}
                <div className="mt-8">
                  <button
                    onClick={() => setOpen(true)}
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(79,70,229,0.6)]"
                  >
                    <span className="relative z-10">Let’s Grow Together</span>
                    <FaArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    <div className="absolute inset-0 h-full w-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Content - Feature Cards in Grid */}
            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 w-full max-w-6xl">
              
              {/* Card 1 */}
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                className="group flex flex-col items-center text-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <FaLightbulb size={28} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  Strategic Approach
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Data-driven decisions tailored to your unique business goals.
                </p>
              </div>

              {/* Card 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="group flex flex-col items-center text-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 lg:translate-y-8"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <FaPaintBrush size={28} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  Clean Design
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Modern, intuitive, and visually striking interfaces that
                  captivate users.
                </p>
              </div>

              {/* Card 3 */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="group flex flex-col items-center text-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-fuchsia-500/20 lg:translate-y-16"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-500/20 text-fuchsia-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <FaRocket size={28} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  High Performance
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Optimized code and blazing-fast load times for maximum
                  conversion.
                </p>
              </div>

              {/* Card 4 - Stats/Extra */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="group flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 lg:translate-y-24"
              >
                <h3 className="text-5xl font-black text-white lg:text-6xl">100%</h3>
                <p className="mt-3 font-medium text-white/80 tracking-wide uppercase text-sm">
                  Commitment to Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL FORM */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glassmorphism Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 p-8 shadow-[0_0_50px_rgba(79,70,229,0.3)] transition-all animate-in zoom-in-95 duration-300">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <IoMdClose size={24} />
            </button>

            <div className="mb-8 text-center">
              <h3 className="text-3xl font-extrabold text-white">
                Let’s Work <span className="text-indigo-400">Together</span>
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Tell us about your project and we'll be in touch soon.
              </p>
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-indigo-500 focus:bg-white/10 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-300">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-indigo-500 focus:bg-white/10 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-300">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your goals..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-indigo-500 focus:bg-white/10 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative mt-4 flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] hover:shadow-indigo-500/40 disabled:pointer-events-none disabled:opacity-70"
              >
                <span className="relative z-10">
                  {loading ? "Sending Message..." : "Submit Inquiry"}
                </span>
                <div className="absolute inset-0 h-full w-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>

              {msg && (
                <div
                  className={`mt-4 rounded-lg p-3 text-center text-sm font-medium ${
                    msg.includes("Failed")
                      ? "bg-red-500/10 text-red-400"
                      : "bg-green-500/10 text-green-400"
                  }`}
                >
                  {msg}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;
