import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Events from "./components/Events";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Workshop from "./components/Workshop";
import Sliderimages from "./components/Sliderimages";
import Schedule from "./components/Schedule";
import CollegeDetails from "./components/College";
import Gallery from "./components/gallery";
import Alumni from "./components/Alumni/Alumni";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <Routes>
      {/* Route for the main application view */}
      <Route
        path="/"
        element={
          <div>
            <div data-aos="fade-left">
              <Hero />
            </div>
            <div data-aos="fade-right">
              <CollegeDetails />
            </div>
            <div data-aos="fade-left">
              <Workshop />
            </div>
            <div data-aos="fade-right">
              <Events />
            </div>

            <div data-aos="fade-left">
              <Alumni />
            </div>
            <div data-aos="fade-right">
              <Sliderimages />
            </div>
            <div data-aos="fade-left">
              <Footer />
            </div>
          </div>
        }
      />

      {/* Route for the gallery */}
      <Route path="/2k23" element={<Gallery />} />
      {/* You can add more routes for other galleries here, e.g.: */}
      {/* <Route path="/2k12" element={<Yantra2k12 />} /> */}
      {/* <Route path="/2k13" element={<Yantra2k13 />} /> */}
      {/* <Route path="/2k14" element={<Yantra2k14 />} /> */}
      {/* <Route path="/2k15" element={<Yantra2k15 />} /> */}
    </Routes>
  );
}

export default App;
