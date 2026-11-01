// Habilidades que se muestran en el inicio y en "Sobre mí", agrupadas por área.
// Cada clave debe existir en languages.ts.
export const skillGroups = [
  {
    name: "Frontend",
    items: ["html", "css", "javascript", "react", "preact", "astro", "tailwind", "sass", "bootstrap", "jquery"],
  },
  {
    name: "Backend, CMS y bases de datos",
    items: ["php", "codeigniter", "node", "mysql", "postgres", "wordpress", "woocommerce", "elementor", "git", "figma"],
  },
  {
    name: "Marketing, nube e IA",
    items: ["analytics", "tagmanager", "googleads", "hubspot", "digitalocean", "cloudflare", "vercel", "claude", "opencode", "hermes"],
  },
];

export const skills = skillGroups.flatMap((group) => group.items);
