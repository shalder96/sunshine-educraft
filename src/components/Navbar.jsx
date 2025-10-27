import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-sm bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-700">EduCraft</span>
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-8 md:flex">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/courses"
            className="px-5 py-2 ml-4 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Browse Courses
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="bg-white border-t shadow-lg md:hidden">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className="block px-5 py-2 m-4 text-center text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Browse Courses
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
