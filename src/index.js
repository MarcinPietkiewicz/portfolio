import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeContextWrapper from "./theme/ThemeContextWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextWrapper>
);
