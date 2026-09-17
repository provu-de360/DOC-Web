import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// All CSS files are imported once here, so every page can use them.
import "./styles/global.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/buttons.css";
import "./styles/cards.css";
import "./styles/responsive.css";
import "./styles/roadAnimation.css";

// This is the entry point of the app.
// It just tells React: "render <App /> inside the #root div".
// You should not need to edit this file.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
