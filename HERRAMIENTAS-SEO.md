# Guía de Configuración de Herramientas SEO

## 1. Google Search Console

### Paso 1: Verificación del Sitio
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Haz clic en "Añadir propiedad"
3. Ingresa: `https://www.vetealacima.com`
4. Selecciona método de verificación "Etiqueta HTML"
5. Copia el código de verificación
6. Agrégalo en `src/components/layout/BaseHead.astro`:
   ```html
   <meta name="google-site-verification" content="TU_CODIGO" />
   ```
7. Despliega los cambios
8. Vuelve a Search Console y haz clic en "Verificar"

### Paso 2: Enviar Sitemap
1. Una vez verificado, ve a "Sitemaps" en el menú lateral
2. Ingresa: `sitemap-index.xml`
3. Haz clic en "Enviar"

### Paso 3: Monitoreo
- **Rendimiento**: Ver consultas de búsqueda, clics, impresiones
- **Cobertura**: Ver páginas indexadas y errores
- **Mejoras**: Core Web Vitals, experiencia móvil
- **Enlaces**: Ver backlinks y enlaces internos

## 2. Google Analytics 4

### Configuración
1. Ve a [Google Analytics](https://analytics.google.com)
2. Crea una cuenta/propiedad para `www.vetealacima.com`
3. Obtén tu ID de medición (formato: G-XXXXXXXXXX)
4. Actualiza en `src/data/siteConfig.js`:
   ```javascript
   googleAnalyticsId: "G-TU_ID_AQUI"
   ```

### Eventos Importantes a Configurar
- Clics en WhatsApp
- Clics en "Agendar Consultoría"
- Envío de formulario de contacto
- Visitas a página de servicios
- Tiempo en página del blog

## 3. Meta Pixel (Facebook/Instagram)

### Configuración
1. Ve a [Meta Business Suite](https://business.facebook.com)
2. Crea un píxel en "Eventos y Configuración"
3. Obtén tu Pixel ID (formato numérico)
4. Actualiza en `src/data/siteConfig.js`:
   ```javascript
   metaPixelId: "TU_PIXEL_ID"
   ```

### Eventos a Configurar
- `Lead`: Cuando alguien agenda una consultoría
- `Contact`: Cuando envían el formulario
- `ViewContent`: Visitas a páginas clave
- `InitiateCheckout`: Interés en servicios

## 4. Bing Webmaster Tools

### Configuración
1. Ve a [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Añade tu sitio: `https://www.vetealacima.com`
3. Verifica con meta tag o archivo XML
4. Envía el sitemap: `sitemap-index.xml`

## 5. Schema Markup Testing

### Validación
1. Ve a [Rich Results Test](https://search.google.com/test/rich-results)
2. Ingresa las URLs:
   - `https://www.vetealacima.com/`
   - `https://www.vetealacima.com/servicios`
   - `https://www.vetealacima.com/blog/[cualquier-post]`
3. Verifica que no haya errores

### Tipos de Schema Implementados
- ✅ ProfessionalService (Página principal)
- ✅ Person (Virginia Vallejo)
- ✅ BlogPosting (Artículos del blog)
- ✅ BreadcrumbList (Navegación)
- ✅ OfferCatalog (Servicios)

## 6. PageSpeed Insights

### Optimización
1. Ve a [PageSpeed Insights](https://pagespeed.web.dev/)
2. Analiza: `https://www.vetealacima.com`
3. Revisa:
   - ✅ First Contentful Paint (FCP)
   - ✅ Largest Contentful Paint (LCP)
   - ✅ Cumulative Layout Shift (CLS)
   - ✅ First Input Delay (FID)

### Métricas Objetivo
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: 100

## 7. Social Media Debuggers

### Facebook/WhatsApp
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Ingresa URL y haz clic en "Scrape Again" para actualizar preview

### Twitter/X
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- Verifica que las cards se muestren correctamente

### LinkedIn
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- Valida preview de compartidos

## 8. Monitoreo de Uptime

### Herramientas Recomendadas
- [UptimeRobot](https://uptimerobot.com/) - Gratis
- [Pingdom](https://www.pingdom.com/)
- [StatusCake](https://www.statuscake.com/)

### Configuración
- URL a monitorear: `https://www.vetealacima.com`
- Frecuencia: Cada 5 minutos
- Alertas: Email/SMS cuando caiga

## 9. SSL/HTTPS Verification

### Verificar Certificado
1. Ve a [SSL Labs](https://www.ssllabs.com/ssltest/)
2. Analiza: `www.vetealacima.com`
3. Objetivo: Calificación A o A+

## 10. Checklist Post-Despliegue

- [ ] Verificar que www.vetealacima.com carga correctamente
- [ ] Verificar redirect de vetealacima.com a www.vetealacima.com
- [ ] Verificar HTTPS activo y certificado válido
- [ ] Enviar sitemap a Google Search Console
- [ ] Enviar sitemap a Bing Webmaster Tools
- [ ] Verificar Analytics tracking
- [ ] Verificar Meta Pixel tracking
- [ ] Probar todos los enlaces internos
- [ ] Validar Schema.org markup
- [ ] Probar compartidos en redes sociales
- [ ] Verificar velocidad en PageSpeed Insights
- [ ] Comprobar responsive en diferentes dispositivos
- [ ] Verificar accesibilidad (WCAG)

## Enlaces Rápidos

- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com
- **Meta Business Suite**: https://business.facebook.com
- **Bing Webmaster**: https://www.bing.com/webmasters
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Rich Results Test**: https://search.google.com/test/rich-results
- **SSL Labs**: https://www.ssllabs.com/ssltest/
