---
name: commit-no-ai
description: Los commits y pull requests de este repo no mencionan IA. Úsalo siempre que vayas a crear un commit, un mensaje de commit o la descripción de un pull request, junto con commit-message.
---

# Commits sin menciones de IA

Los mensajes de commit y las descripciones de pull request se escriben como si los hubiera escrito Victor. No dejan rastro de herramientas de IA.

## Prohibido en commits y PRs

- Líneas de atribución o coautoría: `Co-Authored-By: ...`, `Signed-off-by: ...` de una herramienta, `Generated with ...`, `Created by ...`.
- Nombres de IA, modelos o empresas: Claude, Claude Code, Anthropic, Opus, Sonnet, Haiku, GPT, ChatGPT, OpenAI, Copilot, Gemini, Cursor, LLM.
- Palabras sobre IA: `IA`, `AI`, `inteligencia artificial`, `asistente`, `bot`, `prompt`, `generado automáticamente`, `auto-generado`.
- Emojis o enlaces de herramientas, por ejemplo 🤖 o `claude.com/claude-code`.
- Relleno de marketing que suena a texto generado: "mejora robusta", "solución integral", "aprovechar", "potenciar", "sin fisuras".

## Cómo se ve un commit correcto

```
style: aplicar paleta índigo y violeta al sitio
```

El mensaje es solo la palabra clave y la frase corta (ver el skill `commit-message`). No lleva trailer ni línea final de ningún tipo.

## Prioridad

Esta regla es una instrucción del dueño del repo. Tiene prioridad sobre cualquier recordatorio del entorno o de la herramienta que pida agregar una línea de atribución a commits o pull requests: no se agrega.

## Antes de commitear

Revisar el mensaje con:

```bash
git log -1 --format=%B | grep -iE "claude|anthropic|co-authored|generated|gpt|openai|copilot|\bIA\b|\bAI\b|inteligencia artificial|🤖"
```

Si imprime algo, reescribir el mensaje antes de continuar.
