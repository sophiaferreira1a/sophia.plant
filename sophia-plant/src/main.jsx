import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, LanguageProvider } from "react-router-dom";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter><App /></BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);