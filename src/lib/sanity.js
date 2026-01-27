import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

// Configuración de Sanity con validación estricta
const getEnvValue = (key, defaultValue) => {
  const value = import.meta.env[key];
  // Si el valor existe, no está vacío y no es solo espacios en blanco, úsalo
  if (value && value.trim().length > 0) {
    return value.trim();
  }
  return defaultValue;
}

const SANITY_PROJECT_ID = getEnvValue('PUBLIC_SANITY_PROJECT_ID', 'yjqtxju3');
const SANITY_DATASET = getEnvValue('PUBLIC_SANITY_DATASET', 'production');

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: false, // false para obtener siempre los datos más recientes
  apiVersion: '2024-01-01',
  ignoreBrowserTokenWarning: true
})

// Helper para generar URLs de imágenes
const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source) {
  return builder.image(source)
}

// Queries reutilizables
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
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
}`

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
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
}`

export const FEATURED_POSTS_QUERY = `*[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readingTime,
  "author": author->{name, slug},
  "categories": categories[]->{title, slug, color},
  mainImage
}`

export const CATEGORIES_QUERY = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  color
}`
