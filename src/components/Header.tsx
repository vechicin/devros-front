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
        isScrolled
          ? "bg-devros-primary-blue shadow-md py-3"
          : "bg-devros-secondary-blue py-5"
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
                isScrolled ? "text-devros-white" : "text-devros-white"
              }`}
            >
              Devros
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a
              href="#about"
              className={`font-medium hover:text-devros-secondary-blue transition duration-300 text-devros-white`}
            >
              Acerca De
            </a>
            <a
              href="#services"
              className={`font-medium hover:text-devros-secondary-blue transition duration-300 text-devros-white`}
            >
              Servicios
            </a>
            <a
              href="#how-it-works"
              className={`font-medium hover:text-devros-secondary-blue transition duration-300 text-devros-white`}
            >
              Como Funciona
            </a>
            <a
              href="#testimonials"
              className={`font-medium hover:text-devros-secondary-blue transition duration-300 text-devros-white`}
            >
              Testimonios
            </a>
            <a
              href="#contact"
              className={`font-medium hover:text-devros-secondary-blue transition duration-300 text-devros-white`}
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className={`hidden lg:inline-block px-5 py-2 rounded-lg font-medium transition duration-300 ${
              isScrolled
                ? "bg-devros-orange text-devros-white hover:bg-devros-secondary-blue"
                : "bg-devros-orange text-devros-white hover:bg-devros-primary-blue"
            }`}
          >
            Contáctanos
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
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
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Acerca De
              </a>
              <a
                href="#services"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#how-it-works"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a
                href="#testimonials"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </a>
              <a
                href="#contact"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <a
                href="#contact"
                className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contáctanos
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
