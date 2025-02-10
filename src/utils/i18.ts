import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "@/public/locales/en/common.json";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: enTranslations,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
