// Datos de ejemplo para el blog cuando Sanity no está configurado
export const examplePosts = [
  {
    _id: '1',
    slug: { current: 'ia-transformando-clinicas-veterinarias' },
    title: 'Cómo la IA está transformando las clínicas veterinarias',
    excerpt: 'Descubre cómo la inteligencia artificial puede optimizar la gestión de tu clínica y mejorar la atención a tus pacientes.',
    publishedAt: new Date().toISOString(),
    readingTime: 5,
    author: { name: 'Virginia Vallejo', slug: { current: 'virginia-vallejo' } },
    categories: [{ title: 'Inteligencia Artificial', slug: { current: 'ia' }, color: 'azul-electrico' }],
    mainImage: null,
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'La inteligencia artificial está revolucionando el sector veterinario. Desde diagnósticos más precisos hasta una mejor gestión administrativa, la IA ofrece herramientas poderosas para clínicas de todos los tamaños.' }],
        style: 'normal'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Beneficios clave de la IA en veterinaria' }],
        style: 'h2'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Las clínicas que adoptan IA experimentan mejoras significativas en eficiencia operativa, precisión diagnóstica y satisfacción del cliente.' }],
        style: 'normal'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '1. Diagnóstico asistido por IA' }],
        style: 'h3'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Los sistemas de IA pueden analizar radiografías y otros estudios de imagen con precisión comparable a especialistas humanos.' }],
        style: 'normal'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '2. Gestión administrativa automatizada' }],
        style: 'h3'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Desde el agendamiento de citas hasta la gestión de inventario, la IA puede automatizar tareas repetitivas y liberar tiempo para la atención al paciente.' }],
        style: 'normal'
      }
    ]
  },
  {
    _id: '2',
    slug: { current: 'digitalizacion-primer-paso-crecimiento' },
    title: 'Digitalización: El primer paso hacia el crecimiento',
    excerpt: 'Por qué digitalizar tu clínica veterinaria es esencial para competir en el mercado actual.',
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    readingTime: 4,
    author: { name: 'Virginia Vallejo', slug: { current: 'virginia-vallejo' } },
    categories: [{ title: 'Digitalización', slug: { current: 'digitalizacion' }, color: 'celeste-tech' }],
    mainImage: null,
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'La transformación digital no es opcional en 2026. Las clínicas veterinarias que no digitalizan sus procesos se quedan atrás.' }],
        style: 'normal'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '¿Por dónde empezar?' }],
        style: 'h2'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'El primer paso es evaluar tus procesos actuales y identificar áreas de mejora. Luego, implementa soluciones gradualmente.' }],
        style: 'normal'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'La digitalización comienza con un plan claro. No intentes digitalizarlo todo de una vez.' }],
        style: 'blockquote'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Áreas clave para digitalizar' }],
        style: 'h2'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Registro de pacientes, historias clínicas, facturación, y comunicación con clientes son los puntos de partida ideales.' }],
        style: 'normal'
      }
    ]
  },
  {
    _id: '3',
    slug: { current: 'marketing-digital-veterinarios-guia' },
    title: 'Marketing digital para veterinarios: Guía completa',
    excerpt: 'Estrategias probadas de marketing digital específicamente diseñadas para clínicas veterinarias.',
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    readingTime: 7,
    author: { name: 'Virginia Vallejo', slug: { current: 'virginia-vallejo' } },
    categories: [{ title: 'Marketing', slug: { current: 'marketing' }, color: 'gris-azulado' }],
    mainImage: null,
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'El marketing digital es fundamental para atraer nuevos clientes y fidelizar a los existentes.' }],
        style: 'normal'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Estrategias esenciales' }],
        style: 'h2'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Desde SEO local hasta marketing en redes sociales, hay múltiples canales para hacer crecer tu práctica veterinaria.' }],
        style: 'normal'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '1. SEO Local' }],
        style: 'h3'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Optimiza tu perfil de Google My Business y asegúrate de aparecer en búsquedas locales de servicios veterinarios.' }],
        style: 'normal'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '2. Redes Sociales' }],
        style: 'h3'
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Comparte contenido educativo y casos de éxito. Las redes sociales son perfectas para construir una comunidad alrededor de tu clínica.' }],
        style: 'normal'
      }
    ]
  }
];
