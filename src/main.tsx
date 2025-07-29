import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.tsx";
import ThemeLayout from "./root/ThemeLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeLayout>
      <App />
    </ThemeLayout>
  </StrictMode>
);
