import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";
import video6 from "../../assets/video6.mp4";

const videos = [video1, video2, video3, video4, video5, video6];

const Portfolio = () => {
  const [activeVideo, setActiveVideo] = useState(null);

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

  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden bg-slate-950 py-20 lg:py-32"
    >
      {/* Decorative Background Glows */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600 opacity-20 blur-[100px]"></div>
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-fuchsia-600 opacity-20 blur-[100px]"></div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Heading */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent pb-2">
              Portfolio
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg max-w-2xl mx-auto">
            A glimpse of the high-performance digital experiences we’ve crafted for our clients.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/20"
              onClick={() => setActiveVideo(video)}
            >
              {/* Video Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900">
                <video
                  src={video}
                  preload="auto"
                  muted
                  playsInline
                  onLoadedData={(e) => {
                    e.target.currentTime = 0.5;
                  }}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 transition-opacity duration-300 group-hover:bg-slate-950/20" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                    <FaPlay className="ml-1 text-xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Glassmorphism Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          />

          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-[0_0_50px_rgba(79,70,229,0.3)] animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white/70 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
            >
              <IoMdClose size={24} />
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
