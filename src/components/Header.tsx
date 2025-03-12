import { useState, useEffect } from "react";
import { Bot, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Bot
              className={`h-8 w-8 ${
                isScrolled ? "text-blue-600" : "text-white"
              }`}
            />
            <span
              className={`ml-2 text-xl font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Devros
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className={`font-medium hover:text-blue-500 transition duration-300 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Acerca De
            </a>
            <a
              href="#services"
              className={`font-medium hover:text-blue-500 transition duration-300 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Servicios
            </a>
            <a
              href="#how-it-works"
              className={`font-medium hover:text-blue-500 transition duration-300 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Como Funciona
            </a>
            <a
              href="#testimonials"
              className={`font-medium hover:text-blue-500 transition duration-300 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Testimonios
            </a>
            <a
              href="#contact"
              className={`font-medium hover:text-blue-500 transition duration-300 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className={`hidden md:inline-block px-5 py-2 rounded-lg font-medium transition duration-300 ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-900 hover:bg-blue-50"
            }`}
          >
            Contáctanos
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
