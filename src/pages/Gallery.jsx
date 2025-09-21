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


import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../lib/Loader'
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
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
        },500)
    
    },[])
    if(loading){
        return <Loader/>
    }
    return (
        <div className="w-full min-h-screen relative z-20 bg-[#f0eeea] ">
            <Navbar />
            <section className='w-full h-full flex flex-col justify-center items-center py-16'>
                <h2 className="text-center pt-10 text-4xl md:text-5xl lg:text-7xl font-bold text-black">Gallery</h2>
                <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 
                md:grid-cols-2 gap-4 mt-8">
                    {images.map((img) => (
                        <div key={img.id} className="overflow-hidden 
                        ">
                            <img src={img.src} alt={img.alt} className="w-full h-100 object-cover grayscale hover:grayscale-0
                             hover:scale-105 transition-transform duration-300
                            " />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Gallery;
