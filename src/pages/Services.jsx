import Navbar from '../components/Navbar';
import handmade from '../assets/handmade bead-min.jpg';
import watch from '../assets/watch-min.jpg';
import makeup2 from '../assets/makeup2-min.jpg';
import adire from '../assets/white-cloth.jpeg';
import hair from '../assets/hair2.jpeg';
import { useEffect, useState } from 'react';
import Loader from '../lib/Loader'
const images = [
    
  { id: 1, image: hair, text: 'Hair' },
  { id: 2, image: adire, text: 'Adire and Aso-oke' },
  { id: 3, image: makeup2, text: 'Cosmetics' },
  { id: 4, image: handmade, text: 'Beads' },
  {id:5,image:watch,text:'Jewelleries'}
];

const Services = () => {
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
    <div className="w-full min-h-screen flex relative bg-[#f0eeea] z-20">
      <Navbar />

      <div className="w-full h-full flex flex-col justify-center items-center py-16 px-8">
        <h3 className="text-7xl font-bold text-black mb-12">Services</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
          {images.map((item) => (
            <div
              key={item.id}
              className="
                relative
               overflow-hidden "
            >
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-100 object-cover grayscale hover:grayscale-0 
             hover:scale-105 transition-transform duration-300"
              />
              <p className="py-4 text-xl text-white  absolute bottom-1 right-1 font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
