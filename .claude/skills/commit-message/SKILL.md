---
name: commit-message
description: Formato de los mensajes de commit de este repo. Úsalo siempre antes de crear un commit (git commit), al redactar o proponer un mensaje de commit, o al hacer commit y push.
---

# Mensajes de commit

Cada commit lleva **palabra clave + frase pequeña o mediana**, en español.

```
<palabra clave>: <frase>
```

## Palabras clave

| Palabra clave | Cuándo |
| --- | --- |
| `feat` | Sección, página, componente o funcionalidad nueva |
| `fix` | Corrección de algo roto (enlaces, datos erróneos, errores de build) |
| `style` | Colores, paleta, tipografía, espaciado, cambios visuales |
| `content` | Textos, experiencia, estudios, proyectos, datos personales del sitio |
| `seo` | Metadatos, títulos, canonical, OG, sitemap, robots |
| `refactor` | Reorganizar código sin cambiar lo que se ve |
| `docs` | README, CLAUDE.md, notas del proyecto |
| `chore` | Dependencias, configuración, tooling |

Si el commit toca varias cosas, usa la palabra clave del cambio principal; si son cambios realmente distintos, haz commits separados.

## La frase

- Entre 4 y 12 palabras aprox. Pequeña o mediana, nunca un párrafo.
- Verbo en infinitivo o presente, sin punto final: `style: aplicar paleta índigo y violeta`.
- Dice qué cambió, no cómo: `content: actualizar experiencia en Presik`, no `content: editar Experience.astro línea 5`.
- Sin cuerpo largo. Si hace falta contexto, como máximo 2–3 viñetas cortas después de una línea en blanco.

## Ejemplos

```
style: aplicar paleta índigo y violeta al sitio
content: actualizar experiencia en Presik desde 2024
seo: corregir canonical y og:image por página
feat: agregar sección de estudios y cursos
fix: corregir enlace de WhatsApp en el hero
docs: crear CLAUDE.md del proyecto
```

Los commits no llevan líneas de atribución ni menciones de IA (`Co-Authored-By:`, "Generated with…"). Ver el skill `commit-no-ai`.
