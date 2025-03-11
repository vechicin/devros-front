import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        inquiryType: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {submitSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <p>Thank you for your message! We'll get back to you shortly.</p>
        </div>
      ) : submitError ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>There was an error sending your message. Please try again.</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="company"
              className="block text-gray-700 font-medium mb-2"
            >
              Compañía *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Acme Inc."
            />
          </div>

          <div>
            <label
              htmlFor="inquiryType"
              className="block text-gray-700 font-medium mb-2"
            >
              Tipo de Consulta *
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            >
              <option value=""></option>
              <option value="Process Automation">
                Automatización de Procesos
              </option>
              <option value="Customer Service">
                Agente IA/Chatbot - Servicio al Cliente
              </option>
              <option value="Sales and CRM">
                Agente IA/Chatbot - Ventas y CRM
              </option>
              <option value="Purchase and Logistics">
                Agente IA/Chatbot - Gestión de Compras y Logística
              </option>
              <option value="Marketing"> Agente IA/Chatbot - Marketing</option>
              <option value="Virtual Assistant">
                Agente IA/Chatbot - Asistente Virtual
              </option>
              <option value="Legal Assistant">
                Agente IA/Chatbot - Asistente Legal
              </option>
              <option value="Consulting">Consultoría en IA</option>
              <option value="Training">Entrenamiento IA</option>
              <option value="Dashboards">
                Creación de Dashboards Inteligentes
              </option>
              <option value="Other">Otro</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            placeholder="Cuéntanos tus necesidades..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-semibold transition duration-300 ${
            isSubmitting
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Solicita una Consulta Gratuita
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
