import React, { useState } from "react";

type AnswerOption = {
  value: string;
  label: string;
};

type Question = {
  question: string;
  options: AnswerOption[];
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

const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState<number>(0);

  const handleAnswerChange = (questionIndex: number, answerValue: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`question${questionIndex}`]: answerValue,
    }));
  };

  const handleNextStep = () => {
    if (step < quizData.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-devros-gray mb-8">
          Cuestionario de Evaluación
        </h2>
        <div className="bg-devros-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-devros-gray mb-4">
            {quizData[step].question}
          </h3>
          <div className="space-y-4">
            {quizData[step].options.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  type="radio"
                  id={option.value}
                  name={`question${step}`}
                  value={option.value}
                  checked={answers[`question${step}`] === option.value}
                  onChange={() => handleAnswerChange(step, option.value)}
                  className="h-5 w-5 text-devros-primary-blue"
                />
                <label
                  htmlFor={option.value}
                  className="ml-3 text-lg text-devros-gray"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            {step > 0 && (
              <button
                onClick={handlePreviousStep}
                className="px-6 py-3 bg-devros-orange text-devros-white rounded-lg hover:bg-devros-secondary-blue transition duration-300"
              >
                Anterior
              </button>
            )}
            <button
              onClick={handleNextStep}
              className="px-6 py-3 bg-devros-primary-blue text-white rounded-lg hover:bg-devros-secondary-blue transition duration-300"
            >
              {step === quizData.length - 1 ? "Finalizar" : "Siguiente"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
