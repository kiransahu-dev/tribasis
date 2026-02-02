import React from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";

const Hero = () => {
  return (
    <main
      className="
      bg-gradient-to-r
      from-[#ebe7e4]
      via-[#eaf6fa]
      to-[#50c3e3]
      pt-28
      "
    >
      <section className="container flex min-h-[600px] items-center">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl font-bold leading-tight text-[#0b4f6c] md:text-5xl">
              We Build Web Apps That
              <span className="text-[#6fbf4a]"> Lead the Market</span>
            </h1>

            <p className="max-w-xl text-base font-semibold text-slate-600">
              We transform complex ideas into powerful digital products —
              crafting modern, scalable and lightning-fast web applications that
              drive real business growth.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <a href="#portfolio">
                <button
                  className="
                rounded-md
                bg-[#6fbf4a]
                px-6 py-3
                font-semibold
                text-white
                transition-all
                hover:bg-[#5aaa3f]
                hover:shadow-md
                "
                >
                  Get Started
                </button>
              </a>
              <a href="#services">
                <button
                  className="
                rounded-md
                border border-[#f7931e]
                px-6 py-3
                font-semibold
                text-[#f7931e]
                transition-all
                hover:bg-[#f7931e]
                hover:text-white
                "
                >
                  View Services
                </button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="mx-auto max-w-sm">
            <img
              src={Banner}
              alt="Web app illustration"
              className="w-full drop-shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
