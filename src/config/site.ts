// Datos del sitio y de la persona: se usan en el SEO (Layout.astro), el header, el footer y el contacto.
export const SITE = {
  url: "https://victor-ruiz-reyes.site",
  name: "Victor Ruiz Reyes",
  fullName: "Victor Alfonso Ruiz Reyes",
  title: "Victor Ruiz Reyes | Desarrollador Frontend y Web en Bucaramanga",
  description:
    "Desarrollador frontend y web master con más de 9 años de experiencia. Creo sitios con React, Astro, Tailwind CSS y WordPress. Mira mis proyectos.",
  jobTitle: "Desarrollador Frontend",
  locale: "es_CO",
  lang: "es-CO",
  city: "Bucaramanga",
  region: "Santander",
  country: "CO",
  email: "vr24355@gmail.com",
  whatsapp: "https://wa.me/573153364783",
  github: "https://github.com/tulkas1992",
  // Pendiente: URLs reales. Mientras sean null no se muestran ni se publican en el SEO.
  linkedin: null as string | null,
  instagram: null as string | null,
  youtube: null as string | null,
  employer: { name: "PRESIK SAS", url: "https://www.presik.com" },
  gaId: "G-2ERC5BYJFS",
  profileImage: "/images/victor-ruiz-reyes-bucaramanga.jpeg",
  ogImage: "/images/og.png",
  knowsAbout: [
    "Desarrollo web frontend",
    "React",
    "Astro",
    "Tailwind CSS",
    "JavaScript",
    "WordPress",
    "WooCommerce",
    "SEO",
    "Google Analytics",
  ],
} as const;

export const absoluteUrl = (path: string) => new URL(path, SITE.url).href;
