import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Homewriteup = () => {
   useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="w-full h-full py-16">
      <div className="lg:w-1/2" data-aos="fade-right" >
        <p className="text-lg lg:text-xl font-medium text-black">
          Running a successful salon goes beyond hairstyling—it’s about creating
          an experience of luxury, style, and beauty. At Pricioux, every detail
          counts: from the salon’s elegant interior and curated furniture to our
          exquisite hairstyles, handcrafted beads, Aso-Oke and Adire fabrics,
          fine jewelry, and premium cosmetics. We blend tradition with modern
          elegance, making everyday beauty effortless and unforgettable
        </p>
      </div>
    <div className="py-6 lg:flex justify-end ">
  <div className="text-lg lg:w-1/2 flex flex-col justify-end items-end" data-aos="fade-left">
    <p>
      At Pricioux, beauty is more than a look—it’s an experience. From
      luxurious hairstyles and handcrafted beads to vibrant Aso-Oke and
      Adire fabrics, fine jewelry, and premium cosmetics, we combine
      elegance with effortless style. Every detail, from our salon’s
      interior to our curated collections, is designed to celebrate
      tradition, modernity, and your unique beauty.
    </p>
  </div>
</div>

    </div>
  );
};

export default Homewriteup;
