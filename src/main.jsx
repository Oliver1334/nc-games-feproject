import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./contexts/CategoryContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>
);
