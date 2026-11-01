import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL, llmsURL: URL) => `User-agent: *
Allow: /

# Rastreadores de IA: se permite leer el sitio
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${sitemapURL.href}
# Resumen del sitio para modelos de lenguaje: ${llmsURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  const llmsURL = new URL('llms.txt', site);
  return new Response(getRobotsTxt(sitemapURL, llmsURL), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
