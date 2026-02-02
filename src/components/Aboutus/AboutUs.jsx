import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import AboutBg from "../../assets/about.png";

const AboutUs = () => {
  const formRef = useRef();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    emailjs
      .sendForm(
        "service_j2u3d32",
        "template_m8lscdl",
        formRef.current,
        "nfLzVZCCYFDIyhBd9",
      )
      .then(
        () => {
          setLoading(false);
          setMsg("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setMsg("Failed to send message. Try again.");
        },
      );
  };

  return (
    <>
      {/* ABOUT SECTION */}
      <section className="relative w-full">
        <div
          className="relative h-[700px] w-full bg-cover bg-center md:h-[600px]"
          style={{ backgroundImage: `url(${AboutBg})` }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="container relative z-10 flex h-full items-center">
            <div className="max-w-3xl rounded-2xl bg-transparent p-6 text-white shadow-2xl backdrop-blur-sm md:p-10">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                About <span className="text-[#6fbf4a]">Tribasis</span>
              </h2>

              {/* Content */}
              <div className="space-y-4 text-sm leading-relaxed text-white/90 md:text-base">
                <p>
                  <strong>Tribasis</strong> is a web development agency focused
                  on building high-performance websites that help businesses
                  stay ahead of their competitors.
                </p>

                <p>
                  We believe a website is more than just design. It’s your first
                  impression, your credibility, and a powerful business asset.
                  That’s why we combine strategy, clean design, and precise
                  development to create websites that don’t just look good —
                  <span className="font-medium text-[#6fbf4a]">
                    {" "}
                    they perform.
                  </span>
                </p>

                <p>
                  We don’t follow shortcuts or one-size-fits-all solutions. We
                  build with purpose, paying attention to detail and long-term
                  growth.
                </p>

                <p className="font-medium">
                  Tribasis works with brands that want clarity, quality, and
                  results.
                </p>

                <p className="font-semibold">
                  If you want to blend in, we’re not for you.
                  <br />
                  <span className="text-[#f7931e]">
                    If you want to stand out and move ahead, welcome to
                    Tribasis.
                  </span>
                </p>
                {/* CTA BUTTON */}
                <button
                  onClick={() => setOpen(true)}
                  className="
                  rounded-md
                  bg-[#f7931e]
                  px-6 py-3
                  text-sm font-semibold
                  text-white
                  transition-all
                  hover:bg-[#e68415]
                  hover:shadow-lg
                "
                >
                  Let’s Grow Together
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL FORM */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-xl font-bold text-gray-500"
            >
              ×
            </button>

            <h3 className="mb-4 text-xl font-semibold text-[#0b4f6c]">
              Let’s Work Together
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-md border px-4 py-2 text-sm text-black"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-md border px-4 py-2 text-sm text-black"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your project"
                required
                className="w-full rounded-md border px-4 py-2 text-sm text-black"
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  rounded-md
                  bg-[#f7931e]
                  px-4 py-2
                  text-sm font-semibold
                  text-white
                  hover:bg-[#e68415]
                  disabled:opacity-70
                "
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              {msg && (
                <p className="text-center text-sm text-green-600">{msg}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;
