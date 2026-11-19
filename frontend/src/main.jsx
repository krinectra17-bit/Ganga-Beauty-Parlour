import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App.jsx";
import ErrorBoundary from "@/components/ErrorBoundary";
import initScrollReveal from "@/utils/scroll-reveal";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}

// Initialize scroll reveal when browser is idle to prevent forced reflow during critical rendering
if (typeof window !== "undefined") {
  const scheduleIdle = window.requestIdleCallback || ((cb) => setTimeout(cb, 150));
  scheduleIdle(() => {
    try {
      initScrollReveal();
    } catch (e) {
      /* fail silently */
    }
  });
}
