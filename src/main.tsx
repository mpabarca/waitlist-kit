import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeLayout from "./root/ThemeLayout";
import LandingPage from "./pages/LandingPage";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeLayout>
      <LandingPage />
    </ThemeLayout>
  </StrictMode>
);
