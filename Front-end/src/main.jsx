import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  integrity="sha512-yP5G+bT5Lk+BdENR4PnQZcA1B0zZ4tbEnm6TAYr9O0k3GwZowWv7mUjRo+XwnsQyYOQ4OQMEGb2dXKyc4C3Bag=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
