import React, { useState } from "react";

type AnswerOption = {
  value: string;
  label: string;
};

type Question = {
  question: string;
  options: AnswerOption[];
};

type ResponseMessage = {
  message: string;
  solution: string;
  nextStep: string;
};

const quizData: Question[] = [
  {
    question: "¿Cuál es el tamaño de tu empresa?",
    options: [
      { value: "microempresa", label: "Microempresa (1-10 empleados)" },
      { value: "pequeña", label: "Pequeña (11-50 empleados)" },
      { value: "mediana", label: "Mediana (51-200 empleados)" },
      { value: "grande", label: "Grande (200+ empleados)" },
    ],
  },
  {
    question: "¿A qué industria pertenece tu empresa?",
    options: [
      { value: "tecnología", label: "💻 Tecnología / Software" },
      { value: "ecommerce", label: "🛒 E-commerce / Retail" },
      { value: "logística", label: "🚚 Logística / Transporte" },
      { value: "legal", label: "⚖️ Servicios Legales" },
      { value: "salud", label: "🏥 Salud / Medicina" },
      { value: "educación", label: "🎓 Educación" },
      { value: "marketing", label: "📢 Marketing / Publicidad / Medios" },
      { value: "construcción", label: "🏗️ Construcción / Inmobiliaria" },
      { value: "finanzas", label: "🏦 Finanzas / Banca / Seguros" },
      { value: "energía", label: "♻️ Energía / Medio Ambiente" },
      { value: "otros", label: "🔧 Otros (especificar)" },
    ],
  },
  {
    question: "¿Qué cargo ocupas dentro de tu empresa?",
    options: [
      { value: "ceo", label: "CEO / Fundador" },
      { value: "director-tecnología", label: "Director de Tecnología" },
      { value: "director-operaciones", label: "Director de Operaciones" },
      { value: "director-comercial", label: "Director Comercial / Ventas" },
      { value: "director-marketing", label: "Director de Marketing" },
      {
        value: "servicio-al-cliente",
        label: "Responsable de Servicio al Cliente",
      },
      { value: "recursos-humanos", label: "Responsable de Recursos Humanos" },
      { value: "otro", label: "Otro (especificar)" },
    ],
  },
  {
    question: "¿Cuál es el mayor desafío de tu empresa hoy?",
    options: [
      {
        value: "atención",
        label: "Atención al cliente lenta o con consultas repetitivas",
      },
      {
        value: "ventas",
        label: "Ventas ineficientes y falta de seguimiento a clientes",
      },
      {
        value: "compras-logística",
        label: "Proceso de compras y logística con muchas tareas manuales",
      },
      {
        value: "marketing",
        label: "Marketing poco personalizado y baja interacción con clientes",
      },
      {
        value: "automatización",
        label:
          "Falta de automatización en tareas internas (agenda, emails, reportes)",
      },
      {
        value: "análisis",
        label: "Dificultad para analizar datos y tomar decisiones estratégicas",
      },
    ],
  },
  {
    question: "¿Qué tan digitalizada está tu empresa?",
    options: [
      {
        value: "alto",
        label: "Muy digitalizados, pero queremos automatizar y escalar más",
      },
      {
        value: "medio",
        label:
          "⚙️ Usamos herramientas digitales, pero hay muchas tareas manuales",
      },
      { value: "bajo", label: "📝 Dependemos bastante de procesos manuales" },
      {
        value: "no-seguro",
        label: "❓ No estoy seguro; necesitamos una evaluación",
      },
    ],
  },
  {
    question: "¿Cuánto tiempo pierde tu equipo en tareas repetitivas?",
    options: [
      { value: "mucho", label: "Mucho tiempo, necesitamos automatizar más" },
      { value: "medio", label: "Algunas tareas podrían optimizarse" },
      {
        value: "no-seguro",
        label: "No lo sé con certeza, pero es algo que queremos revisar",
      },
      { value: "poco", label: "No es un problema importante para nosotros" },
    ],
  },
  {
    question:
      "¿Tu empresa actualmente usa algún tipo de Inteligencia Artificial o automatización?",
    options: [
      {
        value: "expandir",
        label: "Sí, pero queremos expandir su uso a otras áreas",
      },
      { value: "explorar", label: "No, pero estamos explorando opciones" },
      { value: "sin-usar", label: "No, y no estamos seguros de como empezar" },
      {
        value: "sin-planes",
        label: "No y por ahora no está en nuestros planes",
      },
    ],
  },
  {
    question:
      "¿Tu equipo está capacitado para adoptar soluciones de Inteligencia Artificial?",
    options: [
      { value: "experiencia", label: "Sí, tienen experiencia previa" },
      { value: "capacitar", label: "No, pero nos gustaría capacitarlos" },
      {
        value: "listos",
        label:
          "No, preferimos soluciones listas para usar, sin necesidad de capacitación",
      },
      {
        value: "no-seguro",
        label: "No estamos seguros; necesitamos orientación",
      },
      {
        value: "depende",
        label: "Depende del áreas: algunos equipos están listos, otros no",
      },
    ],
  },
];

const getFinalMessage = (challenge: string) => {
  switch (challenge) {
    case "atención":
      return {
        message:
          '💡 "Tus clientes buscan respuestas rápidas, pero tu equipo no puede atender todas las consultas al instante. Con un chatbot inteligente, puedes responder preguntas frecuentes 24/7, reducir la carga de trabajo y mejorar la experiencia del cliente sin aumentar costos."',
        solution:
          "👉 Solución recomendada: Implementación de un chatbot para atención al cliente con integración a WhatsApp y web.",
        nextStep:
          "✅ Próximo paso: Agenda una llamada con nuestro equipo para explorar cómo podríamos personalizar esta solución para tu negocio.",
      };
    case "ventas":
      return {
        message:
          '💡 "El 79% de los leads se pierden por falta de seguimiento. Un agente IA para ventas puede calificar prospectos, responder preguntas en tiempo real y automatizar recordatorios, ayudando a cerrar más ventas sin esfuerzo extra."',
        solution:
          "👉 Solución recomendada: Chatbot para ventas y CRM que capture y califique leads automáticamente.",
        nextStep:
          "✅ Próximo paso: Descarga nuestra guía gratuita sobre IA en ventas y agenda una consultoría con nosotros.",
      };
    case "compras-logística":
      return {
        message:
          '💡 "Optimizar la cadena de suministro con IA reduce errores y tiempos de respuesta. Un chatbot puede ayudar a gestionar órdenes, hacer seguimiento de envíos y automatizar reportes en tiempo real."',
        solution:
          "👉 Solución recomendada: Chatbot de gestión para compras y logística, con integración a tus sistemas actuales.",
        nextStep:
          "✅ Próximo paso: Solicita una demo y descubre cómo mejorar tu logística con IA.",
      };
    case "marketing":
      return {
        message:
          '💡 "Las empresas que usan IA en marketing incrementan la conversión en un 50% y la retención de clientes hasta un 35% (Forrester)."',
        solution:
          "👉 Solución recomendada: Agente IA para Marketing que personaliza la comunicación y aumenta el engagement.",
        nextStep:
          "✅ Próximo paso: Agendar Sesión de Diagnóstico de Marketing AI",
      };
    case "automatización":
      return {
        message:
          '💡 "Las empresas que automatizan tareas administrativas logran un incremento de productividad de hasta el 40%."',
        solution:
          "👉 Solución recomendada: Implementa un Asistente Virtual IA para gestionar agendas, correos, recordatorios y reportes automáticos.",
        nextStep: "✅ Próximo paso: Solicita tu Demo de Asistente Virtual IA",
      };
    case "análisis":
      return {
        message:
          '💡 "El 87% de las organizaciones considera que los dashboards de IA mejoran significativamente el desempeño de sus áreas clave (Gartner)."',
        solution:
          "👉 Solución recomendada: Dashboards Inteligentes customizados para tu negocio.",
        nextStep: "✅ Próximo paso: Agenda tu Demo de Dashboard Inteligente",
      };
    default:
      return {
        message: "",
        solution: "",
        nextStep: "",
      };
  }
};

const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] =
    useState<ResponseMessage | null>(null);
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleAnswerChange = (questionIndex: number, answerValue: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`question${questionIndex}`]: answerValue,
    }));

    if (step < quizData.length - 1) {
      setStep(step + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleSubmitQuiz = async () => {
    setIsSubmitting(true);

    try {
      const leadData = {
        lead: {
          full_name: name,
          email: email,
          company: company,
          inquiry_type: "Quiz",
          message: "Quiz",
          company_size: answers["question0"],
          company_industry: answers["question1"],
          lead_position: answers["question2"],
          biggest_challenge: answers["question3"],
          tech_level: answers["question4"],
          repetitive_tasks: answers["question5"],
          ai_use: answers["question6"],
          ai_expertise: answers["question7"],
        },
      };

      const response = await fetch("http://localhost:3000/leads", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ...leadData }),
      });

      if (!response.ok) {
        throw new Error(
          "Tuvimos problemas para enviar tus respuestas. Intenta nuevamente."
        );
      }

      const result = await response.json();
      console.log("¡Tus respuestas se han enviado con éxito!", result);

      const challenge = answers["question3"];
      setResponseMessage(getFinalMessage(challenge));
      setIsFormSubmitted(true);
    } catch (error) {
      console.error(
        "Tuvimos problemas para enviar tus respuestas. Intenta nuevamente.",
        error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quiz">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-devros-secondary-blue mb-8">
            Descubre como la IA puede ayudar a tu negocio
          </h2>
          <div className="bg-devros-white p-8 rounded-lg shadow-lg text-center">
            {!isQuizStarted ? (
              <div>
                <h3 className="text-xl font-semibold text-devros-gray mb-4">
                  ¿Quieres saber como la IA puede impulsar tu empresa?
                </h3>
                <h3 className="text-xl font-semibold text-devros-gray mb-4">
                  ¡Responde este quiz para averiguarlo!
                </h3>
                <button
                  onClick={() => setIsQuizStarted(true)}
                  className="px-6 py-3 bg-devros-primary-blue text-devros-white rounded-lg hover:bg-devros-secondary-blue transition duration-300"
                >
                  Empezar
                </button>
              </div>
            ) : !isFormSubmitted ? (
              !isQuizCompleted ? (
                <div>
                  <h3 className="text-xl font-semibold text-devros-gray mb-4">
                    {quizData[step].question}
                  </h3>
                  <div className="space-y-4">
                    {quizData[step].options.map((option) => (
                      <div key={option.value} className="flex justify-center">
                        <button
                          onClick={() => handleAnswerChange(step, option.value)}
                          className={`w-full px-6 py-3 text-lg rounded-lg ${
                            answers[`question${step}`] === option.value
                              ? "bg-devros-primary-blue text-white"
                              : "bg-devros-primary-blue text-devros-white border border-devros-primary-blue"
                          } hover:bg-devros-secondary-blue transition duration-300`}
                        >
                          {option.label}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold text-devros-gray mb-4">
                    ¡Ya casi terminas! Por favor llena tus datos para enviar tus
                    respuestas.
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-lg text-devros-gray mb-2"
                      >
                        Nombre
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-2 border border-devros-gray rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-lg text-devros-gray mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border border-devros-gray rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-lg text-devros-gray mb-2"
                      >
                        Nombre de la empresa
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full px-4 py-2 border border-devros-gray rounded"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                    <button
                      onClick={handleSubmitQuiz}
                      className="mt-4 px-6 py-3 bg-devros-primary-blue text-devros-white rounded-lg hover:bg-devros-secondary-blue transition duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <svg
                          className="mr-3 h-5 w-5 animate-spin text-white"
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
                            stroke-width="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        "Enviar Respuestas"
                      )}
                    </button>
                  </div>
                </div>
              )
            ) : (
              <div>
                {responseMessage && (
                  <div>
                    <p>{responseMessage.message}</p>
                    <br />
                    <p>{responseMessage.solution}</p>
                    <br />
                    <p>{responseMessage.nextStep}</p>
                    <br />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
