import React from "react";
import CountUp from "react-countup";

const Service = () => {
  return (
    <section className="container h-16 md:h-36">
      <div
        className="
        mx-auto my-6
        grid w-full -translate-y-10
        grid-cols-4
        divide-x divide-[#0b4f6c]/20
        rounded-xl
        bg-gradient-to-r
        from-[#f4fbfd]
        via-[#ecfeff]
        to-[#f4fbfd]
        p-4
        shadow-lg
        md:max-w-[900px]
        md:-translate-y-20
        md:p-8

        /* DARK MODE */
        dark:divide-white/20
        dark:bg-gradient-to-r
        dark:from-[#062f3f]
        dark:via-[#0b4f6c]
        dark:to-[#062f3f]
        "
      >
        {/* Clients */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-[#6fbf4a] sm:text-lg md:text-3xl">
            <CountUp end={14} suffix="+" duration={2.75} />
          </h1>
          <p className="text-xs text-slate-600 dark:text-white/70 md:text-lg">
            Clients
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-[#0b4f6c] dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={26} suffix="+" duration={2.75} />
          </h1>
          <p className="text-xs text-slate-600 dark:text-white/70 md:text-lg">
            Projects
          </p>
        </div>

        {/* Subscribers */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-[#0b4f6c] dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={134} suffix="k+" />
          </h1>
          <p className="text-xs text-slate-600 dark:text-white/70 md:text-lg">
            Subscribers
          </p>
        </div>

        {/* Growth */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-[#f7931e] sm:text-lg md:text-3xl">
            <CountUp
              start={275}
              end={527}
              duration={2.75}
              separator=" "
              suffix="+"
            />
          </h1>
          <p className="text-xs text-slate-600 dark:text-white/70 md:text-lg">
            Growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;