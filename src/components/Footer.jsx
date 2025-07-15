import React, {useRef, useState} from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';






const Footer = () => {
  const formRef = useRef()
  const [status, setStatus] = useState()

  const sendEmail = (e) => {
    e.preventDefault();
 

  emailjs.sendForm(
    'service_hjgq15t',
    'template_gnjqzoe',
    formRef.current,
    'qtV1csepmbDkePvqa'
  )
  .then(() => {
      setStatus('Subscribed successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      setStatus('Something went wrong. Try again.');
      console.error(error);
    });
 };



  return (
    <footer className="pt-12 pb-6 mt-20 text-gray-100 bg-gray-900">
      <div className="grid gap-10 px-4 mx-auto text-sm max-w-7xl md:grid-cols-4">
        
        {/* Brand & Newsletter */}
        <div>
          <h2 className="text-xl font-bold text-green-400">EduCraft</h2>
          <p className="mt-2 text-gray-400">
            Empower your learning journey with top instructors and practical knowledge.
          </p>
          <div className="mt-4">
            <p className="mb-2 text-sm text-gray-300">Join our newsletter</p>
            <form 
              ref={formRef} 
              onSubmit={sendEmail} 
              className="flex flex-col sm:flex-row"
            >
              <input 
                type="email"
                name="user_email"
                required
                placeholder="Your email"
                className="w-full px-3 py-2 mb-2 text-white bg-gray-800 border border-gray-700 rounded sm:mb-0 sm:rounded-l"
              />
              <button 
                type="submit" 
                className="px-4 py-2 text-white transition bg-green-500 rounded sm:rounded-r hover:bg-green-600">
                Subscribe
              </button>
            </form>
             {status && <p className="mt-2 text-xs text-green-300">{status}</p>}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li>
              <Link 
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/terms" 
                className="text-sm text-gray-600 hover:underline"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link 
                to="/privacy" 
                className="text-sm text-gray-600 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Popular Categories</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Web Development</li>
            <li>Design & UX</li>
            <li>Marketing</li>
            <li>Data Science</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Follow Us</h4>
          <div className="flex mt-2 space-x-4 text-gray-300">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaYoutube className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="pt-4 mt-10 text-xs text-center text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} EduCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
