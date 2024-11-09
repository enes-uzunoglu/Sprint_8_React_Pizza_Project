import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/reset.css";
import App from "./App.jsx";
import "./Style/index.css";
import "./Style/App.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
