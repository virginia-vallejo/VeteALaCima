# Configuración de SEO y Meta Tags

Esta documentación explica la configuración de SEO implementada en el sitio.

## URLs y Dominios

- **Dominio Principal**: https://www.vetealacima.com
- **Dominio Anterior**: https://vete-a-la-cima.vercel.app (redirigido automáticamente)

## Archivos de SEO

### 1. robots.txt
- Ubicación: `/public/robots.txt`
- Permite indexación completa del sitio
- Referencia al sitemap

### 2. Sitemap
- **Índice**: `/public/sitemap-index.xml`
- **Principal**: `/public/sitemap-0.xml`
- Incluye todas las páginas principales
- Actualizaciones: Revisar mensualmente

### 3. Manifest.json
- PWA habilitado
- Configuración para instalación en dispositivos móviles

## Meta Tags Implementados

### Básicos
- Title dinámico por página
- Description optimizado
- Canonical URLs
- Keywords relevantes

### Open Graph (Facebook, WhatsApp, LinkedIn)
- og:type
- og:url
- og:title
- og:description
- og:image (1200x630)
- og:locale: es_AR

### Twitter Card
- summary_large_image
- Imágenes optimizadas

### Schema.org (Datos Estructurados)
- ProfessionalService
- Person (Virginia Vallejo)
- OfferCatalog (Servicios)
- Cobertura geográfica (AR, ES, MX, CL, CO, PE)

## Keywords Principales

- consultoría veterinaria
- veterinaria coaching
- gestión clínica veterinaria
- marketing veterinario
- crecimiento veterinaria
- digitalización veterinaria
- Virginia Vallejo
- vete a la cima

## Optimizaciones de Performance

1. **Preload de recursos críticos**
   - Logo
   - Imagen hero
   - Fuentes principales

2. **DNS Prefetch**
   - Google Fonts
   - CDN de Sanity
   - Dominio principal

3. **Lazy loading**
   - Imágenes no críticas
   - Videos

4. **Compresión**
   - WebP para imágenes
   - Gzip habilitado

## Checklist de Mantenimiento SEO

- [ ] Actualizar sitemap mensualmente
- [ ] Verificar enlaces rotos
- [ ] Actualizar contenido del blog regularmente
- [ ] Monitorear Google Search Console
- [ ] Revisar velocidad de carga (PageSpeed Insights)
- [ ] Actualizar meta descriptions según performance
- [ ] Verificar indexación de nuevas páginas

## Herramientas Recomendadas

1. **Google Search Console**: Monitoreo de indexación
2. **Google Analytics**: Análisis de tráfico
3. **PageSpeed Insights**: Performance
4. **Schema Markup Validator**: Validar datos estructurados
5. **Mobile-Friendly Test**: Compatibilidad móvil

## Enlaces Importantes

- Google Search Console: https://search.google.com/search-console
- Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/

## Próximas Mejoras

1. Implementar Blog Posts en sitemap dinámicamente
2. Agregar breadcrumbs con Schema
3. Implementar FAQ Schema en páginas relevantes
4. Agregar Reviews/Testimonials con Schema
