import React from 'react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'

const Reservation = () => {
  return (
    <div className='w-full min-h-screen  px-4 md:px-12 py-16 relative z-20 '>
        <Navbar/>

<div className='w-full h-full flex flex-col justify-self-center items-center'>

        <ContactForm/>
</div>

    </div>
  )
}

export default Reservation