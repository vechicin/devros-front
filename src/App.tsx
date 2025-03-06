// import React from "react";
import {
  MessageSquare,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
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

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI-Powered Customer Support Agents for Every Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Custom AI chat, voice, and email agents designed to transform your
              customer support.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300"
            >
              Get Started
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
              About Devros
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Founded by three friends with a passion for AI and customer
              experience, Devros is revolutionizing how businesses handle
              customer support. Our mission is to become the go-to company for
              AI customer agents, helping businesses automate and enhance their
              customer service experience.
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
              Our Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We create custom AI solutions by leveraging your knowledge base
              and designing tailored workflows that meet your specific
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Chat Agents */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                AI Chat Agents
              </h3>
              <p className="text-gray-700 mb-4">
                Fully customizable chatbots that provide seamless customer
                interaction across your website and messaging platforms.
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

            {/* Voice Agents */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                AI Voice Agents
              </h3>
              <p className="text-gray-700 mb-4">
                Voice-based AI assistants that handle phone support with
                natural-sounding conversations and intelligent responses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Natural voice interaction</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Call routing and qualification</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Sentiment analysis</span>
                </li>
              </ul>
            </div>

            {/* Email Agents */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                AI Email Agents
              </h3>
              <p className="text-gray-700 mb-4">
                AI-driven email support systems that categorize, prioritize, and
                respond to customer inquiries with minimal delay.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Automated email triage</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Personalized responses</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Attachment and data processing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our streamlined process ensures we deliver AI agents that
              perfectly match your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                1. Understand
              </h3>
              <p className="text-gray-700">
                We analyze your current support systems and understand your
                specific business requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Workflow className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                2. Design
              </h3>
              <p className="text-gray-700">
                We create custom workflows and conversation flows tailored to
                your customer journey.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Bot className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                3. Develop
              </h3>
              <p className="text-gray-700">
                We build and integrate AI agents that seamlessly connect with
                your existing systems.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                4. Support
              </h3>
              <p className="text-gray-700">
                We provide continuous support, updates, and improvements to
                ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover how our AI agents have transformed customer support for
              businesses like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
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
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
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
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ready to transform your customer support with AI? Contact us today
              for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
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
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-blue-600 hover:underline"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Follow Us
                  </h4>
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
