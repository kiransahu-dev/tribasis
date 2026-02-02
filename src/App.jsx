import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import Market from "./components/Market/Market";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero.jsx/Hero";
import AboutUs from "./components/Aboutus/AboutUs";
import Navbar2 from "./components/navbar/Navbar2";
import Score from "./components/Score/Score";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 ">
          {/* <Navbar /> */}
          <Navbar2 />
        </div>
        <section id="home">
          <Hero />
        </section>
        <Score />
        <section id="about">
          <AboutUs />
        </section>
        {/* <Market /> */}
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="footer">
          <Footer />
        </section>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
}

export default App;
