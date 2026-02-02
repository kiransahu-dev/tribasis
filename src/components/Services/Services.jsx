import React from "react";
import { FaCode, FaPalette, FaVideo } from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    desc: "High-performance, scalable websites built with modern technologies to help your business grow and stand out online.",
    icon: <FaCode />,
    features: [
      "SEO & performance optimized",
      "Fully responsive design",
      "Scalable & secure architecture",
    ],
  },
  {
    title: "UI / UX Design",
    desc: "Clean, intuitive and user-focused designs that improve engagement, usability and brand trust across all devices.",
    icon: <FaPalette />,
    features: [
      "User-centered design approach",
      "Modern & clean UI systems",
      "Improved usability & flow",
    ],
  },
  {
    title: "Video Editing",
    desc: "Professional video editing for marketing, social media and branding that captures attention and tells your story clearly.",
    icon: <FaVideo />,
    features: [
      "High-quality cuts & transitions",
      "Optimized for social platforms",
      "Engaging storytelling",
    ],
  },
];

const Services = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-16 py-12">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-[#0b4f6c] dark:text-white md:text-4xl">
            Our <span className="text-[#6fbf4a]">Services</span>
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-white/80">
            We focus on services that create real value, clarity and long-term
            growth for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                rounded-xl
                bg-white
                p-6
                shadow-lg
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
                dark:bg-[#062f3f]
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-4
                  flex h-14 w-14 items-center justify-center
                  rounded-lg
                  bg-[#f1f5f9]
                  text-2xl
                  text-[#0b4f6c]
                  dark:bg-white/10
                  dark:text-white
                "
              >
                {service.icon}
              </div>

              {/* Content */}
              <h2 className="mb-2 text-xl font-semibold text-[#0b4f6c] dark:text-white">
                {service.title}
              </h2>

              <p className="text-sm text-slate-600 dark:text-white/80">
                {service.desc}
              </p>

              {/* What You Get */}
              <ul className="mt-4 space-y-1 text-sm text-slate-600 dark:text-white/80">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#6fbf4a]">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {/* <button
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-[#f7931e]
                  transition-all
                  hover:gap-3
                "
              >
                Get a Free Quote <span>→</span>
              </button> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;