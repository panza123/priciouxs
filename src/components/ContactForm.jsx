import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../lib/Loader";
import { Scissors, Star, Gem, Sofa } from "lucide-react";

const ContactForm = () => {
  const form = useRef();

  const [pageLoading, setPageLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully! 🎉");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Try again ❌");
      })
      .finally(() => setFormLoading(false));
  };

  if (pageLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen px-4 py-16">
      <Toaster position="top-right" />
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        Let’s talk or book now
      </h2>

      <section className="w-full mt-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-stretch">
        {/* Why Book With Us */}
        <div className="h-full flex flex-col justify-center gap-6 p-6">
          <p className="text-xl font-bold mb-2">Why Choose Us?</p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Scissors className="w-5 h-5 text-pink-500" />
              Professional & Friendly Stylists
            </li>
            <li className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-500" />
              Affordable Luxury Services
            </li>
            <li className="flex items-center gap-3">
              <Gem className="w-5 h-5 text-blue-500" />
              Premium Hair & Beauty Products
            </li>
            <li className="flex items-center gap-3">
              <Sofa className="w-5 h-5 text-green-500" />
              Relaxing Salon Experience
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full p-6"
        >
          <div>
            <p className="font-bold">Name</p>
            <input
              type="text"
              name="name"          // matches {{name}}
              placeholder="Your Name"
              required
              className="w-full border-b outline-none py-2"
            />
          </div>

          <div>
            <p className="font-bold">Email</p>
            <input
              type="email"
              name="reply_to"      // matches {{reply_to}}
              placeholder="Your Email"
              required
              className="w-full border-b outline-none py-2"
            />
          </div>

          <div>
            <p className="font-bold">Phone</p>
            <input
              type="tel"
              name="number"        // matches {{number}}
              placeholder="Phone Number"
              required
              className="w-full border-b outline-none py-2"
            />
          </div>

          <div>
            <p className="font-bold">Service</p>
            <select
              name="service"       // matches {{service}}
              required
              className="w-full border-b outline-none py-2"
            >
              <option value="">Select Service</option>
              <option value="Braids">Braids</option>
              <option value="Coloring">Coloring</option>
              <option value="Treatment">Treatment</option>
            </select>
          </div>

          <div>
            <p className="font-bold">Date</p>
            <input
              type="date"
              name="date"          // matches {{date}}
              required
              className="w-full border-b outline-none py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <p className="font-bold">Message</p>
            <textarea
              name="message"       // matches {{message}}
              placeholder="Additional Notes"
              className="w-full border-b outline-none py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={formLoading}
              className={`w-full py-3 border rounded-md font-semibold transition ${
                formLoading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {formLoading ? "Sending..." : "Book Now"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
