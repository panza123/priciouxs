import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Loader from '../lib/Loader';

import handmade from '../assets/handmade bead-min.jpg';
import watch from '../assets/watch-min.jpg';
import makeup2 from '../assets/makeup2-min.jpg';
import adire from '../assets/white-cloth.jpeg';
import hair from '../assets/hair2.jpeg';

const images = [
  { id: 1, image: hair, text: 'Hair' },
  { id: 2, image: adire, text: 'Adire and Aso-Oke' },
  { id: 3, image: makeup2, text: 'Cosmetics' },
  { id: 4, image: handmade, text: 'Beads' },
  { id: 5, image: watch, text: 'Jewelries' },
];

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-full min-h-screen flex relative bg-[#f0eeea] z-20">
      <Navbar />

      <div className="w-full h-full flex flex-col justify-center items-center py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-12 text-center">
          Services
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {images.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.text}
                loading="lazy"
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300"
              />
              <p className="absolute bottom-3 left-3 bg-black/50 text-white px-3 py-1 rounded text-sm sm:text-base md:text-lg font-semibold">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
