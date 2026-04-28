import React, { useEffect } from "react";
import { FaCode, FaBullhorn, FaRobot, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Website Development",
    desc: "We craft lightning-fast, scalable, and secure websites tailored to elevate your brand. From robust platforms to immersive web applications, our solutions are engineered with modern frameworks to ensure seamless user experiences and long-term business growth.",
    icon: <FaCode size={28} />,
    features: [
      "Custom UI/UX & Responsive Design",
      "Next-Gen Tech Stack (React, Next.js)",
      "SEO & Performance Optimization",
      "Secure & Scalable Architecture",
    ],
    colorClass: "indigo",
    delay: "0",
  },
  {
    title: "Digital Marketing",
    desc: "Amplify your reach and convert audiences into loyal customers with targeted strategies. We leverage advanced SEO, engaging social media campaigns, and high-quality video editing to build a compelling digital footprint that drives measurable results.",
    icon: <FaBullhorn size={28} />,
    features: [
      "Comprehensive SEO Strategies",
      "Social Media & Video Editing",
      "Targeted Ad Campaigns",
      "Performance Analytics & ROI",
    ],
    colorClass: "purple",
    delay: "100",
  },
  {
    title: "AI & Analytics",
    desc: "Unlock the power of your data with advanced artificial intelligence and predictive analytics. We integrate smart automation, machine learning models, and actionable data insights to streamline operations and give you a decisive competitive edge.",
    icon: <FaRobot size={28} />,
    features: [
      "Predictive Data Analytics",
      "Business Process Automation",
      "Machine Learning Integrations",
      "AI-Powered Dashboards",
    ],
    colorClass: "fuchsia",
    delay: "200",
  },
];

const Services = () => {
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
    <section className="relative w-full overflow-hidden py-20 lg:py-32" id="services">
      {/* Background with Dark overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center justify-center">
        
        {/* Decorative central glow */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 opacity-20 blur-[150px]"></div>

        <div className="flex flex-col items-center justify-center gap-16 text-center w-full">
          {/* Heading */}
          <div data-aos="fade-up" className="max-w-3xl flex flex-col items-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Our {" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent pb-2">
                Services
              </span>
            </h2>
            <p className="text-base leading-relaxed text-slate-300 md:text-lg">
              We focus on premium, data-driven solutions that create real value, 
              exceptional clarity, and sustainable long-term growth for your business.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
            {services.map((service, index) => {
              // Dynamic classes based on color theme
              const glowColors = {
                indigo: "hover:shadow-indigo-500/20 shadow-indigo-500/5",
                purple: "hover:shadow-purple-500/20 shadow-purple-500/5",
                fuchsia: "hover:shadow-fuchsia-500/20 shadow-fuchsia-500/5",
              };
              const iconBgs = {
                indigo: "bg-indigo-500/20 text-indigo-400",
                purple: "bg-purple-500/20 text-purple-400",
                fuchsia: "bg-fuchsia-500/20 text-fuchsia-400",
              };
              const textColors = {
                indigo: "text-indigo-400",
                purple: "text-purple-400",
                fuchsia: "text-fuchsia-400",
              };

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                  className={`
                    group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 
                    backdrop-blur-md transition-all duration-300 hover:-translate-y-2 
                    hover:bg-white/10 shadow-2xl ${glowColors[service.colorClass]}
                  `}
                >
                  {/* Icon */}
                  <div
                    className={`
                      mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl 
                      transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6
                      ${iconBgs[service.colorClass]}
                    `}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-2xl font-bold text-white text-left">
                    {service.title}
                  </h3>

                  <p className="mb-8 text-sm text-slate-400 leading-relaxed text-left flex-grow">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <ul className="mb-8 space-y-3 text-sm text-slate-300 text-left">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`mt-0.5 ${textColors[service.colorClass]}`}>
                          ✔
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`
                      mt-auto inline-flex items-center gap-2 text-sm font-semibold 
                      ${textColors[service.colorClass]} transition-all hover:gap-3
                    `}
                  >
                    Learn More <FaArrowRight />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;