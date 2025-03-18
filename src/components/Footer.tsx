import { Bot, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-blue text-devros-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Devros</span>
            </div>
            <p className="text-devros-gray mb-6">
              Transformando la atención al cliente con soluciones impulsadas por
              IA.
            </p>
            <div className="flex space-x-4">
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
            </div>
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
                  Acerca De
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Automatización de Procesos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Agente IA/Chatbot - Servicio al Cliente
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Agente IA/Chatbot - Ventas y CRM
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Agente IA/Chatbot - Gestión de Compras y Logística
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Agente IA/Chatbot - Marketing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Agente IA/Chatbot - Asistente Virtual
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Agente IA/Chatbot - Asistente Legal
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Consultoría en IA
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Entrenamiento IA
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-devros-gray hover:text-devros-white transition duration-300"
                >
                  Creación de Dashboards Inteligentes
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
                  className="text-blue-400 hover:text-blue-300 transition duration-300"
                >
                  info@devros.ai
                </a>
              </li>
              <li className="text-devros-gray">
                <span className="block">Teléfono:</span>
                <a
                  href="tel:+1234567890"
                  className="text-blue-400 hover:text-blue-300 transition duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-devros-gray text-sm">
              &copy; {currentYear} Devros. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-devros-gray hover:text-devros-white text-sm transition duration-300"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-devros-gray hover:text-devros-white text-sm transition duration-300"
              >
                Condiciones de Servicio
              </a>
              <a
                href="#"
                className="text-devros-gray hover:text-devros-white text-sm transition duration-300"
              >
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
