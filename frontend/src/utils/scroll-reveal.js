// Lightweight scroll reveal utility — respects prefers-reduced-motion
export default function initScrollReveal() {
  if (typeof window === "undefined") return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const items = Array.from(document.querySelectorAll("[data-sr]"));
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = el.getAttribute("data-sr-delay") || "";
        if (delay) el.style.animationDelay = delay;
        el.classList.add("reveal");
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((el) => {
    // Start hidden; reveal will animate
    el.classList.add("opacity-0");
    io.observe(el);
  });
}
