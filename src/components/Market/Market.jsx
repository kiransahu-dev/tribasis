import React from "react";

const Banner = () => {
  return (
    <main
      className="
        relative
        overflow-hidden
        bg-gradient-to-r
        from-[#0b4f6c]
        via-[#0e7490]
        to-[#0b4f6c]

        dark:from-[#062f3f]
        dark:via-[#0b4f6c]
        dark:to-[#062f3f]
      "
    >
      {/* Soft bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#0b4f6c] to-transparent dark:from-[#062f3f]" />

      <section data-aos="fade-up" className="container py-12 md:py-16">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3 md:gap-10">

          {/* Text */}
          <div className="order-2 flex flex-col items-center gap-4 text-center text-white md:order-1 md:col-span-2 md:items-start md:text-left">
            <h1 className="text-3xl font-bold md:text-4xl">
              Market your
              <span className="text-[#6fbf4a]"> Brand</span>
            </h1>

            <p className="max-w-xl text-white/90">
              We help brands grow faster by creating high-impact digital
              marketing strategies that convert attention into results.
            </p>

            <button
              className="
                mt-2
                rounded-md
                bg-[#6fbf4a]
                px-6 py-3
                text-sm font-semibold
                text-white
                transition-all duration-300
                hover:bg-[#5aaa3f]
                hover:shadow-lg
              "
            >
              Get Started
            </button>
          </div>

          {/* Video */}
          <div className="order-1 md:order-2">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/gRWMen27Uio"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Banner;
