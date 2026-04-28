import React from "react";
import ContactImg from "../../assets/contact.png";

const Contact = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[500px] place-items-center">
          {/* Image Section */}
          <div data-aos="fade-right" className="flex justify-center items-center">
            <img 
              src={ContactImg} 
              alt="Contact Us Illustration" 
              className="max-w-[400px] w-full rounded-2xl drop-shadow-[0_10px_30px_rgba(79,70,229,0.3)] animate-float"
            />
          </div>

          {/* Form Section */}
          <div data-aos="fade-left" className="w-full">
            <div className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700/50">
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                Let's Connect
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Ready to take your digital presence to the next level? Drop us a message and our team will get back to you shortly.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-white transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your project..." 
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-white transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="button" 
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
