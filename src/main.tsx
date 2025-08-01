import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n.ts";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Suspense>
  </StrictMode>
);
