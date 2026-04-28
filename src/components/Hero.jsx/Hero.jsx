import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../../assets/agency_3d_banner.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <main
      className="
      relative overflow-hidden
      bg-slate-50 dark:bg-slate-950
      pt-32 pb-16 min-h-screen flex items-center
      transition-colors duration-300
      "
    >
      {/* Decorative Background Elements */}
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-600/20 animate-spin-slow mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute top-40 -left-20 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-fuchsia-600/20 animate-pulse mix-blend-multiply dark:mix-blend-screen"></div>

      <section className="container relative z-10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-12">
          {/* Left Content */}
      <div className="flex flex-col gap-8 text-center md:text-left md:w-1/2 z-20" data-aos="fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100/80 px-4 py-2 text-xs font-bold tracking-widest text-indigo-700 backdrop-blur-md dark:bg-slate-900/50 dark:text-indigo-300 shadow-sm border border-indigo-200/50 dark:border-indigo-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                PREMIUM WEB AGENCY
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
                We Build Digital <br/> Experiences That
                <span className="block mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-600 bg-clip-text text-transparent pb-2">Defy Gravity.</span>
              </h1>
            </div>

            <p className="max-w-xl text-lg font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
              Transform your vision into an immersive digital reality. We engineer ultra-fast, highly aesthetic web applications that captivate users and drive exponential growth.
            </p>

            <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center md:justify-start pt-4">
              <a href="#portfolio">
                <button
                  className="
                  group relative flex items-center justify-center gap-2
                  overflow-hidden rounded-full
                  bg-gradient-to-r from-indigo-600 to-violet-600
                  px-8 py-4
                  font-semibold
                  text-white
                  shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]
                  transition-all duration-300
                  hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.7)]
                  "
                >
                  <span className="relative z-10">Start Your Project</span>
                  <svg className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              </a>
              <a href="#services">
                <button
                  className="
                  group flex items-center justify-center gap-2
                  rounded-full
                  border border-slate-300
                  bg-white/50 backdrop-blur-sm
                  px-8 py-4
                  font-semibold
                  text-slate-700
                  transition-all duration-300
                  hover:border-indigo-400 hover:bg-indigo-50
                  dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:bg-slate-800
                  "
                >
                  <span>Explore Services</span>
                </button>
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="pt-8 flex items-center gap-6 justify-center md:justify-start opacity-70 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
               <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">TRUSTED BY INNOVATORS</div>
               {/* Decorative dots to represent logos/partners */}
               <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                  <div className="h-6 w-6 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                  <div className="h-6 w-6 rounded-full bg-slate-300 dark:bg-slate-700"></div>
               </div>
            </div>
          </div>

          {/* Right Image - 3D Aesthetic Container */}
          <div className="mx-auto max-w-[550px] relative w-full perspective-1000 z-10" data-aos="zoom-in">
            {/* Animated glowing backdrop */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/40 via-purple-500/20 to-fuchsia-500/40 blur-[80px] animate-pulse"></div>
            
            {/* 3D Floating Element Container */}
            <div className="relative transform-style-3d animate-float">
               {/* Main 3D Banner Image */}
               <img
                 src={Banner}
                 alt="Premium 3D web application development illustration"
                 className="relative z-20 w-full drop-shadow-[0_20px_50px_rgba(79,70,229,0.4)] transition-all duration-500 hover:scale-[1.02]"
               />
               
               {/* Floating decorative elements for extra depth */}
               <div className="absolute -top-10 -right-5 z-30 animate-float-delayed">
                 <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-400/80 to-purple-500/80 backdrop-blur-xl border border-white/20 shadow-2xl rotate-12 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                 </div>
               </div>
               
               <div className="absolute -bottom-5 -left-8 z-30 animate-float">
                 <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-fuchsia-400/80 to-pink-500/80 backdrop-blur-xl border border-white/20 shadow-2xl -rotate-12 flex items-center justify-center">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
