const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 500,
    currency: "USD",
    billing: "único",
    description: "Diagnóstico + Plan 90 días",
    targetAudience: "Ideal para veterinarias que buscan un diagnóstico inicial y una hoja de ruta clara para empezar a crecer",
    features: [
      "Análisis 360° de tu clínica",
      "Reunión 1:1 de 90 minutos",
      "Roadmap estratégico personalizado",
      "Plan de acción 90 días",
      "Seguimiento inicial",
      "Documento con recomendaciones"
    ],
    detailedFeatures: {
      "Consultoría": ["1 sesión estratégica mensual de 60 minutos", "Análisis de situación actual"],
      "Marketing": ["Plan de contenidos para redes sociales", "Revisión y optimización de perfiles", "Guía de buenas prácticas"],
      "Soporte": ["WhatsApp en horario laboral", "Respuesta en 24-48 horas"],
      "Recursos": ["Plantillas y recursos descargables", "Acceso a webinars mensuales"]
    },
    cta: "Comenzar ahora",
    ctaLink: "/contacto?plan=starter",
    highlighted: false,
    badge: null
  },
  {
    id: "growth",
    name: "Growth",
    price: 800,
    currency: "USD",
    billing: "mensual (3 meses)",
    description: "Profesionalización + digitalización de tu clínica",
    targetAudience: "Perfecto para veterinarias que buscan escalar operaciones y multiplicar ingresos de forma sostenible",
    features: [
      "Optimización de procesos internos",
      "Implementación de CRM",
      "Estrategia de atención al cliente",
      "Revisión y ajuste de precios",
      "Definición de métricas clave",
      "Asistencia continua (3 meses)",
      "2 sesiones mensuales",
      "Soporte por WhatsApp"
    ],
    detailedFeatures: {
      "Consultoría": ["2 sesiones estratégicas de 90 minutos", "Análisis profundo de KPIs", "Plan de acción personalizado"],
      "Marketing": ["Estrategia integral de marketing", "Gestión de campañas publicitarias", "Optimización de conversión", "Content marketing profesional"],
      "Tecnología": ["Implementación y configuración de CRM", "Automatización de procesos", "Integración de herramientas"],
      "Equipo": ["Capacitación del equipo", "Manuales de procesos", "Protocolos de atención"],
      "Soporte": ["WhatsApp prioritario 24/7", "Seguimiento semanal de resultados", "Ajustes en tiempo real"]
    },
    cta: "Quiero crecer",
    ctaLink: "/contacto?plan=growth",
    highlighted: true,
    badge: "MÁS ELEGIDO"
  },
  {
    id: "elite",
    name: "Elite",
    price: 1200,
    currency: "USD",
    billing: "mensual (6 meses)",
    description: "Dirección estratégica, expansión y automatización",
    targetAudience: "Solución completa para veterinarias que buscan transformación integral y expansión sostenible",
    features: [
      "Dirección estratégica completa",
      "Plan de expansión y escalamiento",
      "Automatización avanzada de procesos",
      "Implementación de sistemas de gestión",
      "Análisis financiero y proyecciones",
      "Marketing y posicionamiento",
      "Capacitación de equipo",
      "Seguimiento semanal (6 meses)",
      "Acceso directo a Virginia"
    ],
    detailedFeatures: {
      "Estrategia": ["Sesiones ilimitadas", "Planificación estratégica integral", "Análisis de mercado y competencia", "Plan de expansión multilocación"],
      "Operaciones": ["Rediseño completo de procesos", "Optimización de recursos", "Gestión de inventario", "Control de costos avanzado"],
      "Tecnología": ["Stack tecnológico completo", "Integración de sistemas", "Business Intelligence", "Automatización total"],
      "Crecimiento": ["Plan de expansión", "Análisis financiero profundo", "Estrategia de inversión", "Modelo de franquicias"],
      "Equipo": ["Programa de liderazgo", "Capacitación avanzada", "Cultura organizacional", "Reclutamiento y selección"],
      "Soporte": ["Asistente dedicado 24/7", "Acceso directo a Virginia", "Revisión quincenal de resultados"]
    },
    cta: "Solicitar propuesta",
    ctaLink: "/contacto?plan=elite",
    highlighted: false,
    badge: null
  }
];
export {
  plans as p
};
