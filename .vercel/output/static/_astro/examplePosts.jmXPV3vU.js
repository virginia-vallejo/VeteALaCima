import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
const __vite_import_meta_env__ = { "ASSETS_PREFIX": void 0, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CALENDLY_URL": "https://calendly.com/virginia-vallejo", "PUBLIC_SANITY_DATASET": "production", "PUBLIC_SANITY_PROJECT_ID": "yjqtxju3", "PUBLIC_WEB3FORMS_ACCESS_KEY": "f29abf36-f700-446c-b8d6-38dc4e0db7a3", "SITE": "https://vete-a-la-cima.vercel.app", "SSR": true };
const getEnvValue = (key, defaultValue) => {
  const value = Object.assign(__vite_import_meta_env__, { OS: process.env.OS, PUBLIC: process.env.PUBLIC })[key];
  if (value && value.trim().length > 0) {
    return value.trim();
  }
  return defaultValue;
};
const SANITY_PROJECT_ID = getEnvValue("PUBLIC_SANITY_PROJECT_ID", "yjqtxju3");
const SANITY_DATASET = getEnvValue("PUBLIC_SANITY_DATASET", "production");
const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: false,
  // false para obtener siempre los datos más recientes
  apiVersion: "2024-01-01",
  ignoreBrowserTokenWarning: true
});
const builder = createImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readingTime,
  featured,
  "author": author->{name, slug, image},
  "categories": categories[]->{title, slug, color},
  mainImage,
  seo
}`;
const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readingTime,
  body,
  "author": author->{name, slug, image, bio},
  "categories": categories[]->{title, slug, color},
  mainImage,
  seo
}`;
const CATEGORIES_QUERY = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  color
}`;
const examplePosts = [
  {
    _id: "1",
    slug: { current: "ia-transformando-clinicas-veterinarias" },
    title: "Cómo la IA está transformando las clínicas veterinarias",
    excerpt: "Descubre cómo la inteligencia artificial puede optimizar la gestión de tu clínica y mejorar la atención a tus pacientes.",
    publishedAt: (/* @__PURE__ */ new Date()).toISOString(),
    readingTime: 5,
    author: { name: "Virginia Vallejo", slug: { current: "virginia-vallejo" } },
    categories: [{ title: "Inteligencia Artificial", slug: { current: "ia" }, color: "azul-electrico" }],
    mainImage: null,
    body: [
      {
        _type: "block",
        children: [{ _type: "span", text: "La inteligencia artificial está revolucionando el sector veterinario. Desde diagnósticos más precisos hasta una mejor gestión administrativa, la IA ofrece herramientas poderosas para clínicas de todos los tamaños." }],
        style: "normal"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Beneficios clave de la IA en veterinaria" }],
        style: "h2"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Las clínicas que adoptan IA experimentan mejoras significativas en eficiencia operativa, precisión diagnóstica y satisfacción del cliente." }],
        style: "normal"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. Diagnóstico asistido por IA" }],
        style: "h3"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Los sistemas de IA pueden analizar radiografías y otros estudios de imagen con precisión comparable a especialistas humanos." }],
        style: "normal"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. Gestión administrativa automatizada" }],
        style: "h3"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Desde el agendamiento de citas hasta la gestión de inventario, la IA puede automatizar tareas repetitivas y liberar tiempo para la atención al paciente." }],
        style: "normal"
      }
    ]
  },
  {
    _id: "2",
    slug: { current: "digitalizacion-primer-paso-crecimiento" },
    title: "Digitalización: El primer paso hacia el crecimiento",
    excerpt: "Por qué digitalizar tu clínica veterinaria es esencial para competir en el mercado actual.",
    publishedAt: new Date(Date.now() - 864e5).toISOString(),
    readingTime: 4,
    author: { name: "Virginia Vallejo", slug: { current: "virginia-vallejo" } },
    categories: [{ title: "Digitalización", slug: { current: "digitalizacion" }, color: "celeste-tech" }],
    mainImage: null,
    body: [
      {
        _type: "block",
        children: [{ _type: "span", text: "La transformación digital no es opcional en 2026. Las clínicas veterinarias que no digitalizan sus procesos se quedan atrás." }],
        style: "normal"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "¿Por dónde empezar?" }],
        style: "h2"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "El primer paso es evaluar tus procesos actuales y identificar áreas de mejora. Luego, implementa soluciones gradualmente." }],
        style: "normal"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "La digitalización comienza con un plan claro. No intentes digitalizarlo todo de una vez." }],
        style: "blockquote"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Áreas clave para digitalizar" }],
        style: "h2"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Registro de pacientes, historias clínicas, facturación, y comunicación con clientes son los puntos de partida ideales." }],
        style: "normal"
      }
    ]
  },
  {
    _id: "3",
    slug: { current: "marketing-digital-veterinarios-guia" },
    title: "Marketing digital para veterinarios: Guía completa",
    excerpt: "Estrategias probadas de marketing digital específicamente diseñadas para clínicas veterinarias.",
    publishedAt: new Date(Date.now() - 1728e5).toISOString(),
    readingTime: 7,
    author: { name: "Virginia Vallejo", slug: { current: "virginia-vallejo" } },
    categories: [{ title: "Marketing", slug: { current: "marketing" }, color: "gris-azulado" }],
    mainImage: null,
    body: [
      {
        _type: "block",
        children: [{ _type: "span", text: "El marketing digital es fundamental para atraer nuevos clientes y fidelizar a los existentes." }],
        style: "normal"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Estrategias esenciales" }],
        style: "h2"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Desde SEO local hasta marketing en redes sociales, hay múltiples canales para hacer crecer tu práctica veterinaria." }],
        style: "normal"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. SEO Local" }],
        style: "h3"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Optimiza tu perfil de Google My Business y asegúrate de aparecer en búsquedas locales de servicios veterinarios." }],
        style: "normal"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. Redes Sociales" }],
        style: "h3"
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Comparte contenido educativo y casos de éxito. Las redes sociales son perfectas para construir una comunidad alrededor de tu clínica." }],
        style: "normal"
      }
    ]
  }
];
export {
  CATEGORIES_QUERY as C,
  POST_BY_SLUG_QUERY as P,
  POSTS_QUERY as a,
  examplePosts as e,
  sanityClient as s,
  urlFor as u
};
