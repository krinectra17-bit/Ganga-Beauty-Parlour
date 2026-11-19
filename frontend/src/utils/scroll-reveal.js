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
    { threshold: 0.1, rootMargin: "50px 0px 0px 0px" }
  );

  const vh = window.innerHeight || 800;
  items.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh) {
      // Element is already in the viewport — keep visible immediately
      el.classList.add("reveal");
    } else {
      // Element is below the fold — hide and observe for scroll reveal
      el.classList.add("opacity-0");
      io.observe(el);
    }
  });
}
