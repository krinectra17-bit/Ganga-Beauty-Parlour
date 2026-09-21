import React from "react";
import { buildWhatsAppLink } from "@/data/site";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch() {
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    try {
      window.location.reload();
    } catch {
    }
  };

  render() {
    if (this.state.hasError) {
      const wa = buildWhatsAppLink("Hello, the site encountered an error.");
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
          <div className="max-w-xl w-full luxe-card p-6 text-center">
            <h2 className="font-serif text-2xl mb-3">Something went wrong</h2>
            <p className="text-zinc-300 mb-4">The site encountered an unexpected error. You can reload the page or contact us directly on WhatsApp.</p>
            <div className="flex items-center justify-center gap-3">
              <button onClick={this.handleReload} className="btn-outline-gold">Reload</button>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-gold">Contact via WhatsApp</a>
            </div>
            <p className="text-xs text-zinc-500 mt-4">If the problem persists, please mention the page and what you were doing.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
