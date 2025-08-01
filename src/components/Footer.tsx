import // Bot,
// Linkedin,
// Twitter,
// Facebook,
// Instagram
"lucide-react";
import Icon from "./Icon";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-devros-secondary-blue text-devros-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Icon size={165} />
            </div>
            <p className="text-devros-gray mb-6">{t("footer.description")}</p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-devros-gray hover:text-devros-white transition duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-devros-gray hover:text-devros-white transition duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-devros-gray hover:text-devros-white transition duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-devros-gray hover:text-devros-white transition duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.how_it_works")}
                </a>
              </li>
              {/* <li>
                <a
                  href="#testimonials"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Testimonios
                </a>
              </li> */}
              <li>
                <a
                  href="#contact"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.automation")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.customer_service")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.sales")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.logistics")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.marketing")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.virtual_assistant")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.legal_assistant")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.consultancy")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.training")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  {t("footer.dashboards")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-devros-gray">
                <span className="block">Email:</span>
                <a
                  href="mailto:info@devros.ai"
                  className="text-devros-primary-blue hover:text-blue-300 transition duration-300"
                >
                  contact@devros.ai
                </a>
              </li>
              {/* <li className="text-devros-gray">
                <span className="block">Teléfono:</span>
                <a
                  href="tel:+1234567890"
                  className="text-devros-primary-blue hover:text-blue-300 transition duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-devros-gray text-sm">
              &copy; {currentYear} {t("footer.rights")}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-devros-gray hover:text-devros-white text-sm transition duration-300"
              >
                {t("footer.privacy_policy")}
              </a>
              <a
                href="#"
                className="text-devros-gray hover:text-devros-white text-sm transition duration-300"
              >
                {t("footer.terms_conditions")}
              </a>
              <a
                href="#"
                className="text-devros-gray hover:text-devros-white text-sm transition duration-300"
              >
                {t("footer.cookies")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
