import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App.jsx";
import ErrorBoundary from "@/components/ErrorBoundary";
import initScrollReveal from "@/utils/scroll-reveal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);

// Initialize scroll reveal after first paint
requestAnimationFrame(() => {
  try { initScrollReveal(); } catch (e) { /* fail silently */ }
});
