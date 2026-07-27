# GroundService — Landing Institucional

Landing page institucional para **GroundService**, servicios de mantención y soporte técnico para minería en el norte de Chile.

## Stack

| Capa | Tecnología |
| --- | --- |
| Framework | [Astro](https://astro.build) (modo SSR/SSG) |
| UI Islands | React 19 + TypeScript strict |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) (plugin Vite nativo) |
| Despliegue | [Vercel](https://vercel.com) (Node serverless) |
| Paquetería | [pnpm](https://pnpm.io) |
| Email | [React Email](https://react.email) + [Resend](https://resend.com) |
| Mapas | [Mapbox GL JS](https://www.mapbox.com/mapbox-gljs) |

## Estructura del proyecto

```
groundservice/
├── public/                         # Assets estáticos (favicon, etc.)
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero/               # Foto hero (placeholder)
│   │   │   └── clientes/           # Logos SVG clientes (placeholder)
│   │   └── textures/               # Texturas separator (placeholder)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   └── Footer.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── ClientesCarousel.astro
│   │   │   ├── Nosotros.astro
│   │   │   ├── Separator.astro
│   │   │   ├── Servicios.astro
│   │   │   ├── Contacto.astro
│   │   │   └── Mapa.astro
│   │   └── react/
│   │       └── StepForm.tsx         # Isla interactiva (client:load)
│   ├── emails/
│   │   ├── InstitutionalTemplate.tsx
│   │   └── ContactNotification.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── constants.ts             # Datos de cards, contacto, etc.
│   ├── pages/
│   │   ├── index.astro
│   │   └── api/
│   │       └── contact.ts           # Endpoint formulario (Resend)
│   └── styles/
│       └── global.css               # Tailwind v4 + @theme tokens
├── .env.example
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Comandos

| Comando | Descripción |
| --- | --- |
| `pnpm install` | Instalar dependencias |
| `pnpm dev` | Servidor local en `localhost:4321` |
| `pnpm build` | Build de producción en `./dist/` |
| `pnpm preview` | Preview del build local |
| `pnpm astro check` | Validación TypeScript |

## Variables de entorno

Copiar `.env.example` a `.env` y completar:

```env
RESEND_API_KEY=          # API key de Resend
CONTACT_EMAIL_TO=        # Email destino para notificaciones
PUBLIC_MAPBOX_TOKEN=     # Token público de Mapbox
```

## Despliegue

Proyecto configurado para Vercel (Node serverless). El deploy se realiza automáticamente al hacer push a la rama `main`.

---

Desarrollado by [Stratto](https://stratto.dev)
