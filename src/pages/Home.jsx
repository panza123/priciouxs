
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import homaimage from "../assets/image.jpg";
import Contact from "../components/Contact";
import Homewriteup from "../components/Homewriteup";
import Loader from "../lib/Loader"; 
import cosmetics from '../assets/cosmetics.jpg'

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-full min-h-screen relative z-20">
      <Navbar />
      <div id="home" className="w-full min-h-screen">

        {/* Hero Section */}
        <div className="relative w-full h-screen">
          <img
            src={homaimage}
            alt="home-image"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
              pricioux beauty salon
            </h1>
            <p className="py-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
              Where beauty meets confidence.
            </p>
            <a href="#contact"
              className="py-3 text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 animate-bounce hover:text-white transition-colors"
            >
              scroll ↓
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className=" py-10">
          <Contact />
        </section>

        {/* Home Writeup */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10">
          <Homewriteup />
        </section>

        {/* Cosmetic Image Section */}
        <section className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] grayscale hover:grayscale-0 transition-all duration-300">
          <img src={cosmetics} alt="cosmetics" className="w-full h-full object-cover" />
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-[#f5f4f1] px-4 sm:px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { text: "Pricioux gave me the best hair experience ever!", name: "Mary" },
              { text: "I love their professional touch and ambiance.", name: "Shade" },
              { text: "The staff is super friendly and talented. Highly recommend!", name: "Tolu" },
              { text: "My hair and makeup looked flawless for my event.", name: "Funmi" },
              { text: "Pricioux Salon never disappoints. Excellent service!", name: "Kemi" },
              { text: "I felt so pampered and relaxed. A true luxury experience.", name: "Bimpe" },
            ].map((testimonial, idx) => (
              <div key={idx} className="w-full sm:w-80 p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <h3 className="font-semibold">— {testimonial.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Scroll to top button */}
      {showScroll && (
        <div className="fixed bottom-6 right-6 w-10 h-10 rounded-full animate-bounce border flex items-center justify-center cursor-pointer bg-white shadow-md hover:bg-gray-100 transition">
          <a href="#home">⬆</a>
        </div>
      )}
    </div>
  );
};

export default Home;
