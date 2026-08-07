## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Git Conventions

All commits **MUST** follow [gitmoji](https://gitmoji.dev) format with short, precise messages:

```
<emoji> <ShortDescription>
```

### Examples

| Emoji | Uso |
| --- | --- |
| ✨ | Nueva feature |
| 🐛 | Bug fix |
| ♻️ | Refactor |
| 📝 | Docs / README |
| 🎨 | Estilos / CSS |
| ⚡ | Performance |
| 🔧 | Config / setup |
| ✅ | Tests |
| 🚀 | Deploy |

### Commit messages correctos

- `✨ addHero`
- `🐛 fixNavbarLinks`
- `♻️ refactorStepForm`
- `📝 updateReadme`
- `🎨 addTailwindTheme`
- `🔧 setupVercelAdapter`
- `🚀 deployVercel`

### Reglas

- **Nunca** usar mensajes genéricos como "update", "fix", "changes"
- **Siempre** incluir el emoji al inicio
- Descripción en **inglés**, camelCase o PascalCase, sin espacios
- Un commit = un cambio lógico

## Release Workflow (main ← develop)

`main` es producción (landing con video de fondo + redirects `/panel` y `/webmail`). `develop` es el sitio completo en validación.

**Importante al mergear `develop` → `main`:** la Navbar completa, Footer y `contacto.astro` viven en el commit base común (`5cf2427`); la línea de `main` los eliminó, por lo que un merge 3-way los borra silenciosamente (sin conflictos). Los redirects (`astro.config.mjs`) y fallbacks (`public/panel`, `public/webmail`) **sí sobreviven** (solo los modificó `main`).

Al validar `develop`, ejecutar:

```
git checkout main && git merge develop
git checkout develop -- src/components/layout/Navbar.astro src/components/layout/Footer.astro src/pages/contacto.astro
npm run build
git add -A && git commit -m "🚀 uploadFullSite"
git push origin main
```

Revisar también `src/pages/index.astro` y `src/components/sections/Hero.astro` (el video del Hero debe conservarse).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
