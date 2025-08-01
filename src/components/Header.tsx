import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Icon from "./Icon";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

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
            <Icon size={150} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a
              href="#about"
              className={`font-medium text-devros-white ${
                isScrolled
                  ? "hover:text-devros-secondary-blue transition duration-300"
                  : "hover:text-devros-primary-blue transition duration-300 "
              }`}
            >
              {t("header.about")}
            </a>
            <a
              href="#services"
              className={`font-medium text-devros-white ${
                isScrolled
                  ? "hover:text-devros-secondary-blue transition duration-300"
                  : "hover:text-devros-primary-blue transition duration-300 "
              }`}
            >
              {t("header.services")}
            </a>
            <a
              href="#how-it-works"
              className={`font-medium text-devros-white ${
                isScrolled
                  ? "hover:text-devros-secondary-blue transition duration-300"
                  : "hover:text-devros-primary-blue transition duration-300 "
              }`}
            >
              {t("header.how_it_works")}
            </a>
            <a
              href="#quiz"
              className={`font-medium text-devros-white ${
                isScrolled
                  ? "hover:text-devros-secondary-blue transition duration-300"
                  : "hover:text-devros-primary-blue transition duration-300 "
              }`}
            >
              {t("header.quiz")}
            </a>
            <a
              href="#contact"
              className={`font-medium text-devros-white ${
                isScrolled
                  ? "hover:text-devros-secondary-blue transition duration-300"
                  : "hover:text-devros-primary-blue transition duration-300 "
              }`}
            >
              {t("header.contact")}
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
            {t("header.button")}
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
                {t("header.about")}
              </a>
              <a
                href="#services"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.services")}
              </a>
              <a
                href="#how-it-works"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.how_it_works")}
              </a>
              <a
                href="#quiz"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.quiz")}
              </a>
              <a
                href="#contact"
                className="font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.contact")}
              </a>
              <a
                href="#contact"
                className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.button")}
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
