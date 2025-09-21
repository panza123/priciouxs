import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Loader from '../lib/Loader';

import hair1 from '../assets/hair.jpeg';
import adire1 from '../assets/adire-green.jpeg';
import cosmetics from '../assets/makeup.jpg';
import jewelries from '../assets/jewellery.jpg';
import bead1 from '../assets/bead.jpg';
import handmade from '../assets/handmade bead-min.jpg';
import watch from '../assets/watch-min.jpg';
import makeup2 from '../assets/makeup2-min.jpg';
import adire from '../assets/white-cloth.jpeg';
import hair from '../assets/hair2.jpeg';

const images = [
  { id: 1, src: handmade, alt: 'Handmade Bead' },
  { id: 2, src: watch, alt: 'Watch' },
  { id: 3, src: makeup2, alt: 'Makeup' },
  { id: 4, src: adire1, alt: 'Adire Cloth' },
  { id: 5, src: hair1, alt: 'Hair' },
  { id: 6, src: hair, alt: 'Hair' },
  { id: 7, src: jewelries, alt: 'Jewelries' },
  { id: 8, src: cosmetics, alt: 'Cosmetics' },
  { id: 9, src: bead1, alt: 'Bead' },
  { id: 10, src: adire, alt: 'Cloth' },
];

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-full min-h-screen relative z-20 bg-[#f0eeea]">
      <Navbar />

      <section className="w-full flex flex-col items-center py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black pt-4">
          Gallery
        </h2>

        <div className="max-w-6xl w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <div key={img.id} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 sm:h-60 md:h-64 lg:h-72 object-cover grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
