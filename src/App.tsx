// import React from "react";
import {
  Phone,
  Mail,
  ArrowRight,
  Users,
  Workflow,
  Bot,
  Zap,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import "swiper/swiper-bundle.css";
import CardCarousel from "./components/CardCarousel";

function App() {
  const cardData = [
    {
      title: "Automatización de Procesos",
      description:
        "Optimizamos tus operaciones mediante la automatización inteligente de procesos, reduciendo tiempos, costos y errores. Mejora la eficiencia de tu negocio con soluciones IA a la medida.",
    },
    {
      title: "Agente IA/Chatbot - Servicio al Cliente",
      description:
        "Desarrollamos chatbots inteligentes de atención al cliente que responden consultas 24/7, mejorando la experiencia de usuario y reduciendo la carga de trabajo de tus equipos.",
    },
    {
      title: "Agente IA/Chatbot - Ventas y CRM",
      description:
        "Impulsa tus ventas con agentes IA que gestionan prospectos, califican leads y automatizan tareas en tu CRM, mejorando la conversión y el seguimiento de clientes.",
    },
    {
      title: "Agente IA/Chatbot - Gestión de Compras y Logística",
      description:
        "Implementamos chatbots inteligentes que optimizan la gestión de compras y logística, agilizando órdenes, seguimiento de envíos y control de inventarios en tiempo real.",
    },
    {
      title: "Agente IA/Chatbot - Marketing",
      description:
        "Crea campañas personalizadas con agentes IA para marketing. Automatiza respuestas, segmenta audiencias y mejora la interacción con tus clientes en múltiples canales.",
    },
    {
      title: "Agente IA/Chatbot - Asistente Virtual",
      description:
        "Desarrollamos asistentes virtuales inteligentes que organizan agendas, gestionan correos y mejoran la productividad en tareas administrativas.",
    },
    {
      title: "Agente IA/Chatbot - Asistente Legal",
      description:
        "Ofrecemos asistentes legales impulsados por IA que facilitan la redacción de documentos, el análisis de contratos y la gestión de consultas legales básicas de forma rápida y segura.",
    },
    {
      title: "Consultoría en IA",
      description:
        "Te guiamos en todo el proceso de implementación de inteligencia artificial. Nuestro servicio de consultoría en IA adapta la tecnología a las necesidades de tu negocio.",
    },
    {
      title: "Entrenamiento IA",
      description:
        "Capacitamos a tus equipos con entrenamientos en inteligencia artificial, ayudándoles a comprender, adoptar y aplicar soluciones IA en sus procesos diarios.",
    },
    {
      title: "Creación de Dashboards Inteligentes",
      description:
        "Desarrollamos dashboards inteligentes que integran datos en tiempo real y análisis predictivo, facilitando la toma de decisiones estratégicas basadas en inteligencia artificial.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-devros-secondary-blue to-devros-primary-blue text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Implementamos soluciones de Inteligencia Artificial en tu negocio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-devros-white">
              Automatización de procesos, chatbots, consultoría en IA,
              entrenamiento en IA para tu empresa.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-devros-orange text-devros-white font-semibold px-6 py-3 rounded-lg hover:bg-devros-primary-blue hover:text-devros-white transition duration-300"
            >
              Contáctanos
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Acerca De
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              En Devros, nuestra misión es potenciar a empresas de todos los
              tamaños mediante soluciones de inteligencia artificial
              personalizadas, mejorando la eficiencia operativa, reduciendo
              costos, optimizando la experiencia de los usuarios de nuestros
              clientes y tomando decisiones basadas en datos. Nos apasiona
              democratizar la inteligencia artificial, haciendo accesible su
              implementación a través de una consultoría estratégica y
              entrenamiento especializado en IA, adaptado a cada organización.
            </p>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Devros Team"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nos especializamos en el diseño y desarrollo de agentes de IA,
              chatbots inteligentes, y soluciones de automatización de procesos
              que se adaptan a las necesidades específicas de cada negocio:
            </p>
          </div>

          <CardCarousel cardArray={cardData} />
          {/* <SwiperSlide>
              <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Automatización de Procesos
                </h3>
                <p className="text-gray-700 mb-4">
                  Optimizamos tus operaciones mediante automatización
                  inteligente de procesos, reduciendo tiempos, costos y errores.
                  Mejora la eficiencia de tu negocio con soluciones IA a medida.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Multilingual capabilities</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Seamless handoff to human agents</span>
                  </li>
                </ul>
              </div>
            </SwiperSlide> */}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Como Funciona
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nuestro proceso optimizado garantiza que te entregamos soluciones
              de IA que se adaptan perfectamente a las necesidades de tu
              negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-devros-secondary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                1. Entender
              </h3>
              <p className="text-gray-700">
                Analizamos tus sistemas de soporte actuales y entendemos tus
                requisitos comerciales específicos.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-devros-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Workflow className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                2. Diseñar
              </h3>
              <p className="text-gray-700">
                Creamos flujos de trabajo personalizados y flujos de
                conversación adaptados a la experiencia de tus clientes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-devros-secondary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Bot className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                3. Desarrollar
              </h3>
              <p className="text-gray-700">
                Creamos e integramos soluciones de IA que se conectan sin
                problemas con tus sistemas existentes.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-devros-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                4. Soporte
              </h3>
              <p className="text-gray-700">
                Brindamos soporte, actualizaciones y mejoras continuas para
                garantizar un rendimiento óptimo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover how our AI agents have transformed customer support for
              businesses like yours.
            </p>
          </div> */}

      {/* <div className="grid md:grid-cols-3 gap-8"> */}
      {/* Testimonial 1 */}
      {/* <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Implementing Devros' AI chat agents has reduced our response
                time by 78% and increased customer satisfaction scores by 45%.
                The seamless integration with our existing systems made the
                transition incredibly smooth."
              </p>
              <div>
                <p className="font-bold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-600">
                  Customer Support Director, TechSolutions Inc.
                </p>
              </div>
            </div> */}

      {/* Testimonial 2 */}
      {/* <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The voice agents developed by Devros have revolutionized our
                call center operations. Our team now focuses on complex issues
                while the AI handles routine inquiries with remarkable
                accuracy."
              </p>
              <div>
                <p className="font-bold text-gray-900">Michael Chen</p>
                <p className="text-gray-600">
                  Operations Manager, Global Retail
                </p>
              </div>
            </div> */}

      {/* Testimonial 3 */}
      {/* <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div> */}
      {/* <p className="text-gray-700 mb-6 italic">
                "Our email backlog used to take days to process. With Devros' AI
                email agents, we now respond to 95% of inquiries within an hour.
                The personalization capabilities are truly impressive."
              </p>
              <div>
                <p className="font-bold text-gray-900">Emily Rodriguez</p>
                <p className="text-gray-600">CEO, E-commerce Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-devros-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Contáctanos
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              ¿Estás listo para transformar tu organización con IA? Contáctanos
              hoy para una consulta gratuita.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Información de Contacto
              </h3>
              <div className="md:flex justify-between items-center">
                <div className="flex items-start mt-5">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:info@devros.ai"
                      className="text-blue-600 hover:underline"
                    >
                      info@devros.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-start mt-5">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <a
                      href="tel:+1234567890"
                      className="text-blue-600 hover:underline"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="mt-5">
                  <h4 className="font-semibold text-gray-900 mb-4">Síguenos</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition duration-300"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition duration-300"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition duration-300"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
