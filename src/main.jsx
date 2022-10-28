import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeProvider/ThemeContextWrapper";
import { LanguageContextWrapper as LanguageContextProvider } from "./contexts/LanguageContext/LanguageContextWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LanguageContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
