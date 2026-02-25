import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-green-700 font-semibold border-b-2 border-green-700 pb-1"
      : "text-gray-700 hover:text-green-600 transition";

  return (
    <nav className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-700">
          Elfalah
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/articles" className={navLinkClass}>
            Artikel
          </NavLink>

          <NavLink to="/videos" className={navLinkClass}>
            Video
          </NavLink>

          {/* Scroll link */}
          <a
            href="#contact"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Kontak
          </a>

          {/* CTA Button */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            WhatsApp
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 font-medium">

          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/articles" onClick={() => setIsOpen(false)}>
            Artikel
          </NavLink>

          <NavLink to="/videos" onClick={() => setIsOpen(false)}>
            Video
          </NavLink>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-700"
          >
            Kontak
          </a>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white px-4 py-2 rounded-lg text-center"
          >
            WhatsApp
          </a>

        </div>
      )}
    </nav>
  );
}