import { useState, useEffect } from "react";
import aboutus from "../assets/chair.jpeg";
import Navbar from "../components/Navbar";
import Loader from "../lib/Loader";
import Homewriteup from "../components/Homewriteup";
import hairequipment from "../assets/hairequipment.avif";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-full min-h-screen bg-[#f0eeea] px-4 md:px-12 py-16 relative z-20">
      {/* Navbar */}
      <Navbar />

      <div className="w-full h-full flex flex-col items-center justify-center space-y-20">
        
        {/* Header Section */}
        <section className="w-full flex flex-col items-center justify-center gap-8">
          <h2 className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
            About Us
          </h2>
          <div className="w-full">
            <img
              src={aboutus}
              alt="About the company"
              className="w-full max-h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </section>

        {/* Homewriteup Component */}
        <section className="w-full flex justify-center">
          <Homewriteup />
        </section>

        {/* Image + Writeup Section */}
        <div className="w-full h-full flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 w-full">
            <img
              src={hairequipment}
              alt="hair-equipment"
              className="w-full h-[400px] md:h-[500px] object-cover grayscale hover:grayscale-0 
              hover:scale-105 hover:transition-all"
            />
          </div>

          <div className="lg:w-1/2 w-full flex items-center justify-center p-6">
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 tracking-wide">
              At <span className="font-bold text-pink-700">Pricioux</span>, we
              believe a successful salon is more than just hairstyling—it’s
              about creating an atmosphere of luxury, style, and beauty. Every
              detail is thoughtfully designed, from our elegant interiors and
              curated furniture to our exquisite hairstyles, handcrafted beads,
              Aso-Oke and Adire fabrics, fine jewelry, and premium cosmetics. We
              seamlessly blend tradition with modern elegance, making beauty
              effortless, refined, and unforgettable.
            </p>
          </div>
        </div>

        {/* Closing Text Section */}
        <div className="max-w-4xl text-center border-t-2 border-gray-300 pt-10 space-y-8 px-6 mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
            Hi, I'm <span className="font-semibold text-pink-700">Pricioux</span>, 
            a passionate hairstylist dedicated to creating unforgettable salon
            experiences.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
            Every detail matters — from personalized consultations to styling
            that makes you feel confident and radiant. My goal is to bring
            luxury, style, and beauty to every client who walks through our doors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
