export interface Language {
  name: string;
  iconName: string;
  className?: string;
  /** Color del ícono cuando el set trae íconos monocromáticos (currentColor) */
  color?: string;
}

export const languages: Record<string, Language> = {
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "!bg-[#f6ece1]",
    iconName: "mysql",
  },
  wordpress: {
    name: "WordPress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  react: {
    name: "React",
    iconName: "logos:react",
  },
  preact: {
    name: "Preact",
    iconName: "logos:preact",
  },
  next: {
    name: "Next.js",
    iconName: "logos:nextjs-icon",
    className: "!bg-white",
  },
  vite: {
    name: "Vite",
    iconName: "logos:vitejs",
  },
  jquery: {
    name: "jQuery",
    iconName: "simple-icons:jquery",
    className: "!bg-white",
    color: "#0769AD",
  },
  woocommerce: {
    name: "WooCommerce",
    iconName: "logos:woocommerce-icon",
    className: "!bg-white",
  },
  elementor: {
    name: "Elementor",
    iconName: "elementor",
  },
  shopify: {
    name: "Shopify",
    iconName: "logos:shopify",
    className: "!bg-white",
  },
  codeigniter: {
    name: "CodeIgniter",
    iconName: "logos:codeigniter-icon",
    className: "!bg-white",
  },
  hubspot: {
    name: "HubSpot",
    iconName: "simple-icons:hubspot",
    className: "!bg-white",
    color: "#FF7A59",
  },
  analytics: {
    name: "Google Analytics",
    iconName: "logos:google-analytics",
    className: "!bg-white",
  },
  googleads: {
    name: "Google Ads",
    iconName: "logos:google-ads",
    className: "!bg-white",
  },
  digitalocean: {
    name: "DigitalOcean",
    iconName: "logos:digital-ocean-icon",
    className: "!bg-white",
  },
  postgres: {
    name: "PostgreSQL",
    iconName: "logos:postgresql",
    className: "!bg-white",
  },
  tagmanager: {
    name: "Google Tag Manager",
    iconName: "logos:google-tag-manager",
    className: "!bg-white",
  },
  claude: {
    name: "Claude",
    iconName: "simple-icons:claude",
    className: "!bg-white",
    color: "#D97757",
  },
  opencode: {
    name: "OpenCode",
    iconName: "simple-icons:opencode",
    className: "!bg-white",
    color: "#211E1E",
  },
  hermes: {
    name: "Hermes",
    iconName: "hermes",
    className: "!bg-transparent !p-0",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || { name: lang, iconName: "code" };
};
