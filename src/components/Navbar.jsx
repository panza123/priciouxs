import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY <= 50); // show navbar only at top
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav className="w-full absolute top-0 left-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 h-[80px] bg-transparent">
      {/* Logo */}
      <NavLink to="/">
        <div className="flex items-center justify-center gap-2">
          <img src="/logo.webp" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
        </div>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 lg:gap-10 text-base sm:text-lg md:text-xl font-medium">
        {[
          { name: "home", path: "/" },
          { name: "about", path: "/about" },
          { name: "service", path: "/service" },
          { name: "gallery", path: "/gallery" },
          { name: "reservation", path: "/reservation" },
        ].map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white transition"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Toggle */}
      <div
        onClick={() => setMenu(!menu)}
        className="md:hidden text-3xl font-bold cursor-pointer z-50"
      >
        {menu ? "✖" : "☰"}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#1D1E2C] text-white flex flex-col justify-center items-center gap-12 text-2xl font-semibold transform transition-transform duration-500 ease-in-out ${
          menu ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        {[
          { name: "home", path: "/" },
          { name: "about", path: "/about" },
          { name: "service", path: "/service" },
          { name: "gallery", path: "/gallery" },
          { name: "reservation", path: "/reservation" },
        ].map((link, idx) => (
          <NavLink key={idx} to={link.path} onClick={() => setMenu(false)}>
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
