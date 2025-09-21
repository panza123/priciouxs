import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-[#c8c6c6] flex flex-col items-center justify-center space-y-6">
      {/* Copyright + Contact */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-1 text-center">
        <p className="text-sm lg:text-lg">
          © 2025 Pricioux Beauty Salon. All rights reserved /
        </p>
        <Link to="/reservation" className="hover:underline text-sm lg:text-lg">
          Contact
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-6">
        <a
          href="https://www.facebook.com/profile.php?id=61556659058064&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="w-6 h-6 text-blue-600" />
        </a>

        <a
          href="https://www.instagram.com/pric.ioux?igsh=dTJjaTR6dzk0Ym8w"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} className="text-red-700" />
        </a>

        <a href="https://wa.me/447404250009" 
        target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} className="text-green-700" />
        
        </a>
      </div>
    </footer>
  );
};

export default Footer;
