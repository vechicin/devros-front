import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.yml';
import es from './locales/es.yml';

i18next.use(initReactI18next).use(LanguageDetector).init({
    resources: {
        en: { translation: en },
        es: { translation: es },
    },
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator'],
        caches: ['cookie'],
        lookupQuerystring: 'lang',
    },
})

export default i18next;
