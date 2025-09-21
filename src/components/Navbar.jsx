import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(false); // hide when scrolled down
      } else {
        setVisible(true); // show only when at the very top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null; // don't render navbar when hidden

  return (
    <nav className="w-full h-[80px] flex justify-between gap-4 items-center
     px-8 bg-transparent fixed top-0 left-0 z-50 ">
      {/* Logo */}
      <NavLink to='/'>
        <div className="rounded-full flex items-center justify-center gap-2 text-2xl font-bold ">
        <img src="/logo.webp" alt="logo" className="w-20 h-20 rounded-full" />
      </div>
      </NavLink>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-lg md:text-xl font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "text-gray-500"
          }
        >
          home
        </NavLink>
 <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#262626] font-semibold" : "text-gray-500"
          }
        >
          about
        </NavLink>
 <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive ? "text-[#262626] font-semibold" : "text-gray-500"
          }
        >
          service
        </NavLink>

           <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "text-gray-500 "
          }
        >
          
            gallery
        
        </NavLink>  
        <NavLink
          to="/reservation"
          className={({ isActive }) =>
            isActive ? "text-[#262626] font-semibold" : "text-gray-500 "
          }
        >
          
            reservation
        
        </NavLink>
       
      </div>

      {/* Mobile Toggle */}
      <div
        onClick={() => setMenu(!menu)}
        className="cursor-pointer text-3xl font-bold md:hidden z-50"
      >
        {menu ? "✖" : "☰"}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#1D1E2C] text-white flex flex-col justify-center items-center gap-12 text-2xl font-semibold transform transition-transform duration-500 ease-in-out ${
          menu ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <NavLink to="/" onClick={() => setMenu(false)}>
          home
        </NavLink>
       
        <NavLink to="/about" onClick={() => setMenu(false)}>
          about
        </NavLink>
         <NavLink to="/service" onClick={() => setMenu(false)}>
          Services
        </NavLink>

 <NavLink to="/gallery" onClick={() => setMenu(false)}>
          gallery
        </NavLink>
         <NavLink to="/reservation" onClick={() => setMenu(false)}>
          reservation
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
