import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useTranslation } from "react-i18next";

type AnswerOption = {
  value: string;
  label: string;
};

type QuestionType = {
  question: string;
  options: AnswerOption[];
};

type ResponseMessage = {
  message: string;
  solution: string;
  nextStep: string;
};

const questionKeys = Array.from({ length: 8 }, (_, i) => `question${i}`);

const Quiz: React.FC = () => {
  const { t } = useTranslation();
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

  const quizData: QuestionType[] = questionKeys.map((key) => {
    const questionText = t(`quiz.questions.${key}.text`);
    const optionsObj = t(`quiz.questions.${key}.options`, {
      returnObjects: true,
    }) as Record<string, string>;
    const options: AnswerOption[] = Object.entries(optionsObj).map(
      ([value, label]) => ({ value, label })
    );
    return { question: questionText, options };
  });

  const getFinalMessage = (challenge: string): ResponseMessage => ({
    message: t(`quiz.responses.${challenge}.message`),
    solution: t(`quiz.responses.${challenge}.solution`),
    nextStep: t(`quiz.responses.${challenge}.next_step`),
  });

  const handleAnswerChange = (questionIndex: number, answerValue: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`question${questionIndex}`]: answerValue,
    }));

    if (questionIndex < quizData.length - 1) {
      setStep(questionIndex + 1);
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
          <h2 className="text-3xl font-bold text-center text-devros-white mb-8">
            {t("quiz.title")}
          </h2>
          <div className="bg-devros-white p-8 rounded-lg shadow-lg text-center">
            <TransitionGroup>
              {!isQuizStarted ? (
                <CSSTransition
                  key="startQuiz"
                  timeout={500}
                  classNames="fade"
                  unmountOnExit
                >
                  <div>
                    <h3 className="text-xl font-semibold text-devros-gray mb-4">
                      {t("quiz.startPromptFirstLine")}
                    </h3>
                    <h3 className="text-xl font-semibold text-devros-gray mb-4">
                      {t("quiz.startPromptSecondLine")}
                    </h3>
                    <button
                      onClick={() => setIsQuizStarted(true)}
                      className="px-6 py-3 bg-devros-orange text-devros-white rounded-lg hover:bg-devros-secondary-blue transition duration-300"
                    >
                      {t("quiz.buttons.start")}
                    </button>
                  </div>
                </CSSTransition>
              ) : !isFormSubmitted ? (
                !isQuizCompleted ? (
                  <CSSTransition
                    key={`question-${step}`}
                    timeout={500}
                    classNames="fade"
                    unmountOnExit
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-devros-secondary-blue mb-4">
                        {quizData[step].question}
                      </h3>
                      <div className="space-y-4">
                        {quizData[step].options.map((option) => (
                          <div
                            key={option.value}
                            className="flex justify-center"
                          >
                            <button
                              onClick={() =>
                                handleAnswerChange(step, option.value)
                              }
                              className={`w-full px-6 py-3 text-lg rounded-lg ${
                                answers[`question${step}`] === option.value
                                  ? "bg-devros-orange text-white"
                                  : "bg-devros-orange text-devros-white border-devros-orange"
                              } hover:bg-devros-secondary-blue transition duration-300`}
                            >
                              {option.label}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CSSTransition>
                ) : (
                  <CSSTransition
                    key="form"
                    timeout={500}
                    classNames="fade"
                    unmountOnExit
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-devros-gray mb-4">
                        {t("quiz.formPrompt")}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-lg text-devros-gray mb-2"
                          >
                            {t("quiz.form.name")}
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
                            {t("quiz.form.email")}
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
                            {t("quiz.form.company")}
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
                            `${t("quiz.buttons.submit")}`
                          )}
                        </button>
                      </div>
                    </div>
                  </CSSTransition>
                )
              ) : (
                <CSSTransition
                  key="responseMessage"
                  timeout={500}
                  classNames="fade"
                  unmountOnExit
                >
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
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
