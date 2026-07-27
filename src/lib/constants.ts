export const COMPANY = {
  name: "GroundService",
  tagline: "Elevando el estándar en faena_",
  description:
    "Elevamos el estándar de la gran minería e industria a través de soluciones modulares, mantención preventiva y disponibilidad inmediata de equipos bajo las normativas más exigentes de Chile.",
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
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const CLIENTS = [
  "AVA",
  "CODELCO",
  "I. Municipalidad María Elena",
  "Salfa",
] as const;

export const ABOUT_CARDS = [
  {
    title: "Evaluación Táctica",
    icon: "ShieldCheck" as const,
    bg: "bg-white",
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
    title: "Equipamiento GroundService",
    icon: "CheckCircle" as const,
    bg: "bg-amber-500",
    description:
      "Provisión, acondicionamiento e integración de maquinaria pesada y equipos de apoyo operacional diseñados para exigencias de alto tonelaje en rajo y subterránea.",
    tags: ["Maquinaria Pesada", "Acondicionamiento", "Alto Tonelaje"],
  },
  {
    title: "Mantenciones GroundService",
    icon: "TrendUp" as const,
    bg: "bg-blue-600",
    description:
      "Diagnóstico avanzado, pautas de revisión técnica, análisis de muestras y control de fluidos hidráulicos bajo rigurosos protocolos de ingeniería para cero fallas.",
    tags: ["Pautas Técnicas", "Sistemas Hidráulicos", "Diagnóstico"],
  },
  {
    title: "Insumos GroundService",
    icon: "Gear" as const,
    bg: "bg-slate-600",
    description:
      "Abastecimiento directo de pernería de alta resistencia, repuestos certificados y componentes mecánicos.",
    tags: ["Stock Certificado", "Pernería Pesada", "Bodega"],
  },
  {
    title: "Reparaciones GroundService",
    icon: "GlobePointer" as const,
    bg: "bg-green-600",
    description:
      "Intervención mayor de componentes críticos, soldadura especializada, pruebas de torque y recuperación estructural para devolver la máquina al 100% operativo.",
    tags: ["Estándar Minero", "Disponibilidad 24/7", "Ingreso Inmediato"],
  },
] as const;
