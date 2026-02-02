import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";
import video6 from "../../assets/video6.mp4";

const videos = [video1, video2, video3, video4, video5, video6];

const Portfolio = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      className="
      bg-gradient-to-r
      from-[#f8fafc]
      via-[#f1f5f9]
      to-[#f8fafc]
      dark:bg-gradient-to-r
      dark:via-[#0b4f6c]
      dark:from-[#98daf0]
      dark:to-[#062f3f]
      "
    >
      <div className="container py-16">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#0b4f6c] dark:text-white md:text-4xl">
            Our <span className="text-[#6fbf4a]">Portfolio</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-white/80">
            A glimpse of the digital experiences we’ve crafted for our clients.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={index}
              className="
              group
              relative
              cursor-pointer
              overflow-hidden
              rounded-xl
              bg-black
              shadow-lg
              "
              onClick={() => setActiveVideo(video)}
            >
              {/* Video Thumbnail */}
              <video
                src={video}
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60" />

              {/* Play Button */}
              <div
                className="
                absolute inset-0
                flex items-center justify-center
                "
              >
                <div
                  className="
                  flex h-14 w-14 items-center justify-center
                  rounded-full
                  bg-[#f7931e]
                  text-white
                  transition-all duration-300
                  group-hover:scale-110
                  "
                >
                  <FaPlay className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-4xl">
            <button
              className="
              absolute -top-10 right-0
              text-sm
              text-white
              hover:text-[#f7931e]
              "
              onClick={() => setActiveVideo(null)}
            >
              ✕ Close
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
