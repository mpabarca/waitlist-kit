import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import ThemeLayout from "./root/ThemeLayout";
import LandingPage from "./pages/LandingPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeLayout>
      <LandingPage />
    </ThemeLayout>
  </StrictMode>
);