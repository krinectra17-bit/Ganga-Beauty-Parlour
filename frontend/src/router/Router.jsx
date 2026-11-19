import { createContext, useContext, useState, useEffect } from "react";

const RouterContext = createContext({
  path: "/",
  navigate: () => {},
});

export function normalizePath(pathname) {
  if (!pathname) return "/";
  const clean = pathname.replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
}

export function navigate(to, options = {}) {
  if (typeof window === "undefined") return;

  if (to.startsWith("#")) {
    const el = document.querySelector(to);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    return;
  }

  // Handle hash on another page, e.g. /#booking
  const [targetPath, hash] = to.split("#");
  const cleanPath = normalizePath(targetPath);

  if (options.replace) {
    window.history.replaceState({}, "", to);
  } else {
    window.history.pushState({}, "", to);
  }

  window.dispatchEvent(new PopStateEvent("popstate"));

  if (hash) {
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  } else {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => {
    if (typeof window === "undefined") return "/";
    return normalizePath(window.location.pathname);
  });

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ href, to, children, className, onClick, target, ...props }) {
  const destination = href || to || "/";

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    // Check for open in new tab / window modifiers
    if (
      e.button !== 0 ||
      e.ctrlKey ||
      e.metaKey ||
      e.altKey ||
      e.shiftKey ||
      target === "_blank"
    ) {
      return;
    }

    // External links
    if (destination.startsWith("http://") || destination.startsWith("https://") || destination.startsWith("tel:") || destination.startsWith("mailto:")) {
      return;
    }

    e.preventDefault();
    navigate(destination);
  };

  return (
    <a href={destination} onClick={handleClick} className={className} target={target} {...props}>
      {children}
    </a>
  );
}
