export const COMPANY = {
  name: "GroundService",
  tagline: "Disponibilidad real. Cero interrupciones.",
  description:
    "Mantención, reparación y equipamiento para la gran minería. Estándares de ingeniería que la operación exige.",
  location: "Calama, Región de Antofagasta",
} as const;

export const CONTACT = {
  address:
    "Camino a Chiu-Chiu Manzana 1, Sitio 12 - Puerto Seco, Barrio Industrial. Calama - Región de Antofagasta.",
  phones: ["+56 9 4253 7389", "+56 9 9165 0762"],
  email: "contacto@groundservice.cl",
  hours: "Soporte en Ruta 24/7 | Oficina Lunes - Viernes 09:00-18:00",
} as const;

export const NAV_LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const CLIENTS = [
  { name: "AVA", logo: "/src/assets/logos/logoAVA.png", url: "https://www.ava.cl" },
  { name: "CODELCO", logo: "/src/assets/logos/logoCodelco.png", url: "https://www.codelco.com" },
  { name: "Municipalidad María Elena", logo: "/src/assets/logos/logoMElena.png", url: "#" },
  { name: "Salfa", logo: "/src/assets/logos/logoSalfa.png", url: "https://www.salfa.cl" },
  { name: "Chier", logo: "/src/assets/logos/logoChier.png", url: "https://www.instagram.com/chier.spa/?hl=es" },
  { name: "Derk", logo: "/src/assets/logos/logoDerk.png", url: "https://www.derk.cl/" },
  { name: "HC", logo: "/src/assets/logos/logoHC.png", url: "https://www.empresashc.cl/" },
  { name: "Inducal", logo: "/src/assets/logos/logoInducal.png", url: "https://www.inducal.cl/web/" },
  { name: "Polpaico", logo: "/src/assets/logos/logoPolpaico.png", url: "https://www.polpaico.cl/" },
] as const;

export const ABOUT_CARDS = [
  {
    title: "Evaluación Táctica",
    icon: "ShieldCheck" as const,
    bg: "bg-gs-sand",
    textColor: "text-gs-ink",
    tags: ["Revisión de Flota", "Matriz de Riesgo", "Cumplimiento Normativo"],
  },
  {
    title: "Intervención Especializada",
    icon: "Timer" as const,
    bg: "bg-gs-crimson",
    textColor: "text-white",
    tags: ["Mecánica Pesada", "Rescate en Ruta", "Ingeniería de Repuesto"],
  },
  {
    title: "Control & Entrega",
    icon: "ClipboardList" as const,
    bg: "bg-gs-sand",
    textColor: "text-gs-ink",
    tags: ["Prueba de Torque", "Cero Defectos", "Garantía GS"],
  },
] as const;

export const SERVICES = [
  {
    title: "Equipamiento",
    icon: "logoEquipment" as const,
    bg: "bg-[#FF7D3C]",
    description:
      "Entrega y mantención de maquinaria pesada de rajo abierta y subterránea, incluyendo camiones de acarreo, paladras hidráulicas, perforadoras y equipos de apoyo operacional. Cada unidad pasa por protocolos de acondicionamiento que garantizan disponibilidad inmediata y cumplimiento normativo.",
    tags: ["Maquinaria Pesada", "Acondicionamiento", "Alto Tonelaje"],
    cta: { label: "Ver equipamiento", href: "#contacto" },
  },
  {
    title: "Mantenciones",
    icon: "logoMaintenance" as const,
    bg: "bg-[#70AAFF]",
    description:
      "Programas de mantención preventiva y correctiva diseñados para minimizar el downtime. Incluye diagnóstico de sistemas hidráulicos, neumáticos y eléctricos, control de fluidos, reemplazo de filtros y componentes, y documentación técnica bajo estándares de ingeniería minera.",
    tags: ["Pautas Técnicas", "Sistemas Hidráulicos", "Diagnóstico"],
    cta: { label: "Agendar mantención", href: "#contacto" },
  },
  {
    title: "Insumos",
    icon: "logoSupplies" as const,
    bg: "bg-[#8E9AAF]",
    description:
      "Stock permanente de pernería de alta resistencia, repuestos certificados, sellos, mangueras y componentes mecánicos para equipos pesados. Despacho inmediato desde bodega en Calama, con trazabilidad documental y garantía de calidad en cada entrega.",
    tags: ["Stock Certificado", "Pernería Pesada", "Bodega"],
    cta: { label: "Solicitar catálogo", href: "#contacto" },
  },
  {
    title: "Reparaciones",
    icon: "logoRepairs" as const,
    bg: "bg-[#07DD84]",
    description:
      "Intervención mayor y menor en terreno u obra, con soldadura certificada, reparación de bastidores, plumas y componentes estructurales. Equipo móvil disponible 24/7 para emergencias en ruta, con tiempos de respuesta optimizados para faenas críticas.",
    tags: ["Estándar Minero", "Disponibilidad 24/7", "Ingreso Inmediato"],
    cta: { label: "Solicitar intervención", href: "#contacto" },
  },
] as const;
