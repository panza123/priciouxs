import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import hair from '../assets/hair.jpeg'
import adire from '../assets/adire-green.jpeg'
import cosmetics from '../assets/makeup.jpg'
import jewelries from '../assets/jewellery.jpg'
import bead from '../assets/bead.jpg'

const images = [
  { id: 1, image: hair, text: 'Hair' },
  { id: 2, image: adire, text: 'Adire and Aso-Oke' },
  { id: 3, image: cosmetics, text: 'Cosmetics' },
  { id: 4, image: jewelries, text: 'Jewelries' },
  { id: 5, image: bead, text: 'Beads' },
]

const Contact = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-screen h-full  bg-pink-50">
      {/* Contact Title & Button */}
      <div className="w-full h-[300px] flex flex-col  justify-center items-center py-6 ">
        <h2 className="text-4xl font-bold text-black">
          You can contact us
        </h2>
        <Link to="/reservation">
          <button className="py-5 px-20 border border-black mt-4 cursor-pointer hover:bg-black hover:text-white hover:transition-all">
            Contact
          </button>
        </Link>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full mt-10">
        {/* Prev Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute flex cursor-pointer items-center 
          left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black"
        >
         <ChevronLeft size={24} />  <p>Prev</p>
        </button>

        {/* Images Scroll Section */}
        <div
          ref={scrollRef}
          className="flex   overflow-x-hidden scroll-smooth no-scrollbar"
        >
          {images.map((item) => (
            <div
              key={item.id}
              className="relative min-w-[500px] h-[500px] overflow-hidden  cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-full object-cover grayscale hover:grayscale-0
                 transition duration-500"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black/50 px-3 py-1 rounded">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute cursor-pointer flex items-center-safe gap-2 right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black"
        >
         <p>Next</p> <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default Contact
