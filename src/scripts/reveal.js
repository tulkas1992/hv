// Fade-in ligero al hacer scroll. Marca los bloques principales con la clase "reveal"
// y los hace visibles cuando entran en pantalla. Solo se activa con JavaScript, así que
// sin JS el contenido se ve normal; con "reducir movimiento" no se aplica.

const SELECTORS = [
  // Inicio
  "#home > div:first-child",
  "#home > div:nth-child(2) > div",
  "main section:not(#home) > div > div:first-child",
  "#experience li",
  "#education li",
  "#projects [role='toolbar']",
  "#projects .project-item",
  // Sobre mí y fichas de proyecto
  "#content > *",
  "#sttack",
  "article > header",
  "article > figure",
  // Elementos marcados a mano
  "[data-reveal]",
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const elements = [...new Set(document.querySelectorAll(SELECTORS.join(",")))];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  elements.forEach((el) => {
    // Escalona los elementos hermanos (tarjetas, items de una lista) para un efecto en cascada
    const siblings = el.parentElement ? [...el.parentElement.children].filter((c) => elements.includes(c)) : [];
    const index = Math.max(0, siblings.indexOf(el));
    el.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 70}ms`);
    el.classList.add("reveal");
    observer.observe(el);
  });
}
