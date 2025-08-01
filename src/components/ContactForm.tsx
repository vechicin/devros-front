import React, { useState } from "react";
import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

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
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    setValidationErrors([]);

    const leadData = {
      lead: {
        full_name: formData.name,
        email: formData.email,
        company: formData.company,
        inquiry_type: formData.inquiryType,
        message: formData.message,
      },
    };
    console.log(leadData);

    try {
      const response = await fetch("http://localhost:3000/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          inquiryType: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        setSubmitError(true);
        setValidationErrors(errorData.errors || []);
        console.error("Error creating lead:", errorData.errors);
      }
    } catch (error) {
      setSubmitError(true);
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-devros-white rounded-lg shadow-lg p-8 border border-devros-gray">
      {submitSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <p>{t("contact_form.success")}</p>
        </div>
      ) : submitError ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>{t("contact_form.error")}</p>
        </div>
      ) : null}

      {validationErrors.length > 0 && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <ul>
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="name"
              className="block text-devros-gray font-medium mb-2"
            >
              {t("contact_form.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-devros-gray rounded-lg focus:ring-2 focus:ring-devros-primary-blue focus:border-devros-primary-blue transition duration-300"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-devros-gray font-medium mb-2"
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
              className="w-full px-4 py-2 border border-devros-gray rounded-lg focus:ring-2 focus:ring-devros-primary-blue focus:border-devros-primary-blue transition duration-300"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="company"
              className="block text-devros-gray font-medium mb-2"
            >
              {t("contact_form.company")}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-devros-gray rounded-lg focus:ring-2 focus:ring-devros-primary-blue focus:border-devros-primary-blue transition duration-300"
              placeholder="Acme Inc."
            />
          </div>

          <div>
            <label
              htmlFor="inquiryType"
              className="block text-devros-gray font-medium mb-2"
            >
              {t("contact_form.inquiry")}
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-devros-gray rounded-lg focus:ring-2 focus:ring-devros-primary-blue focus:border-devros-primary-blue transition duration-300"
            >
              <option value=""></option>
              <option value="process_automation">
                {t("contact_form.options.automation")}
              </option>
              <option value="customer_service">
                {t("contact_form.options.customer_service")}
              </option>
              <option value="sales">{t("contact_form.options.sales")}</option>
              <option value="logistics">
                {t("contact_form.options.logistics")}
              </option>
              <option value="marketing">
                {" "}
                {t("contact_form.options.marketing")}
              </option>
              <option value="virtual_assistant">
                {t("contact_form.options.virtual_assistant")}
              </option>
              <option value="legal_assistant">
                {t("contact_form.options.legal_assistant")}
              </option>
              <option value="consultancy">
                {t("contact_form.options.consultancy")}
              </option>
              <option value="training">
                {t("contact_form.options.training")}
              </option>
              <option value="smart_dashboards">
                {t("contact_form.options.dashboards")}
              </option>
              <option value="other">{t("contact_form.options.other")}</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-devros-gray font-medium mb-2"
          >
            {t("contact_form.message")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-devros-gray rounded-lg focus:ring-2 focus:ring-devros-primary-blue focus:border-devros-primary-blue transition duration-300"
            placeholder={t("contact_form.needs")}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-devros-white font-semibold transition duration-300 ${
            isSubmitting
              ? "bg-devros-orange cursor-not-allowed"
              : "bg-devros-orange hover:bg-devros-secondary-blue"
          }`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-devros-white"
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
              Enviando...
            </>
          ) : (
            <>
              {t("contact_form.consultancy")}
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
