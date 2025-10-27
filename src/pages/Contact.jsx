import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="min-h-screen px-6 py-16 shadow-inner bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-blue-800">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Got a question, suggestion, or collaboration idea? We’d love to hear from you!
        </p>
      </div>

      <div className="grid max-w-4xl gap-10 mx-auto sm:grid-cols-2">
        {/* Contact Form */}
        <div className="p-8 bg-white shadow-md rounded-2xl">
          <h2 className="mb-4 text-2xl font-semibold text-blue-700">Send a Message</h2>
          <form className="space-y-4 text-left">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="p-8 text-left bg-white shadow-md rounded-2xl">
          <h2 className="mb-6 text-2xl font-semibold text-blue-700">Get in Touch</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <p>support@educraft.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <p>New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
