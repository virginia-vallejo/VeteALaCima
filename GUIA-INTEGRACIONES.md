# 🔧 Guía Completa de Configuración de Integraciones - Vete a la Cima

## 📋 Resumen de Integraciones Pendientes

### Estado Actual:
- ❌ **Google Search Console** - Pendiente de verificación
- ❌ **Google Analytics 4** - ID placeholder (G-XXXXXXXXXX)
- ❌ **Meta Pixel** - ID placeholder (XXXXXXXXXXXXXXXXX)
- ✅ **Dominio** - www.vetealacima.com configurado
- ✅ **Sitemap** - Creado y listo
- ✅ **Robots.txt** - Configurado
- ✅ **Manifest PWA** - Configurado

---

## 🚀 PASO A PASO - Configuración Completa

---

## 1️⃣ GOOGLE SEARCH CONSOLE

### ¿Para qué sirve?
- Monitorear cómo Google ve tu sitio
- Ver qué búsquedas traen tráfico
- Detectar errores de indexación
- Solicitar indexación de páginas nuevas

### Pasos de Configuración:

#### A) Crear cuenta y agregar propiedad
1. Ve a: https://search.google.com/search-console
2. Inicia sesión con una cuenta de Google (usar la de Virginia)
3. Haz clic en **"Añadir propiedad"**
4. Selecciona **"Prefijo de URL"**
5. Ingresa: `https://www.vetealacima.com`
6. Haz clic en **"Continuar"**

#### B) Verificar la propiedad (Método HTML meta tag)
1. Selecciona el método **"Etiqueta HTML"**
2. Copiarás un código similar a:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ789..." />
   ```
3. **COPIA SOLO EL CONTENIDO** (la parte después de `content="` y antes de `"`)

#### C) Agregar el código al proyecto
1. Abre el archivo: `src/components/layout/BaseHead.astro`
2. Busca la línea que dice `<!-- SEO -->`
3. Después de la línea `<meta name="author" content={siteConfig.author} />`
4. Agrega esta línea (reemplazando con TU código):
   ```html
   <meta name="google-site-verification" content="TU_CODIGO_AQUI" />
   ```

**Ejemplo:**
```astro
<!-- SEO -->
<title>{fullTitle}</title>
<meta name="description" content={description} />
<link rel="canonical" href={pageUrl} />
<meta name="author" content={siteConfig.author} />
<meta name="google-site-verification" content="ABC123XYZ789..." />
```

#### D) Deploy y verificar
1. Guarda el archivo
2. Haz commit y push:
   ```powershell
   git add .
   git commit -m "feat: agregar verificación Google Search Console"
   git push
   ```
3. Espera 2-3 minutos a que Vercel despliegue
4. Vuelve a Google Search Console
5. Haz clic en **"Verificar"**
6. ✅ Deberías ver: "Propiedad verificada"

#### E) Enviar sitemap
1. En el menú lateral, haz clic en **"Sitemaps"**
2. En el campo "Añadir un sitemap nuevo", escribe: `sitemap-index.xml`
3. Haz clic en **"Enviar"**
4. Repite para: `sitemap-0.xml`
5. Estado debería cambiar a **"Éxito"** en 24-48 horas

#### F) Configuraciones adicionales
1. **Cobertura**: Monitorear páginas indexadas
2. **Rendimiento**: Ver estadísticas de búsqueda (toma 2-3 días)
3. **Mejoras**: Ver Core Web Vitals

---

## 2️⃣ GOOGLE ANALYTICS 4

### ¿Para qué sirve?
- Ver cuántas personas visitan tu sitio
- De dónde vienen (Google, Instagram, directo)
- Qué páginas visitan
- Cuánto tiempo pasan
- Configurar objetivos (envíos de formulario, clics en WhatsApp)

### Pasos de Configuración:

#### A) Crear cuenta de Google Analytics
1. Ve a: https://analytics.google.com
2. Inicia sesión con la misma cuenta de Google
3. Haz clic en **"Comenzar a medir"**
4. Nombre de cuenta: `Vete a la Cima`
5. Haz clic en **"Siguiente"**

#### B) Crear propiedad
1. Nombre de la propiedad: `Vete a la Cima Web`
2. Zona horaria: `Argentina (GMT-3)`
3. Moneda: `Peso argentino (ARS)` o `Dólar estadounidense (USD)`
4. Haz clic en **"Siguiente"**

#### C) Detalles del negocio
1. Sector: **"Otros" o "Servicios profesionales"**
2. Tamaño de la empresa: **"Pequeña (1-10 empleados)"**
3. Finalidad: Selecciona:
   - ✅ Generar clientes potenciales
   - ✅ Aumentar el conocimiento de marca
4. Haz clic en **"Crear"**
5. Acepta los términos

#### D) Configurar flujo de datos
1. Plataforma: **"Web"**
2. URL del sitio web: `https://www.vetealacima.com`
3. Nombre del flujo: `Vete a la Cima Website`
4. Haz clic en **"Crear flujo"**

#### E) Obtener ID de medición
1. Verás tu **ID de medición** en formato: `G-XXXXXXXXXX`
2. **COPIA ESTE ID** (algo como `G-ABC123XYZ4`)

#### F) Agregar ID al proyecto
1. Abre: `src/data/siteConfig.js`
2. Busca la línea:
   ```javascript
   googleAnalyticsId: "G-XXXXXXXXXX",
   ```
3. Reemplaza con tu ID real:
   ```javascript
   googleAnalyticsId: "G-ABC123XYZ4", // Reemplaza con tu ID real
   ```

#### G) Deploy
```powershell
git add .
git commit -m "feat: configurar Google Analytics 4"
git push
```

#### H) Verificar que funciona
1. Espera 2-3 minutos al deploy
2. Ve a Google Analytics → **"Informes" → "Tiempo real"**
3. Abre tu sitio: https://www.vetealacima.com
4. Deberías ver **1 usuario activo** en tiempo real
5. ✅ Si lo ves, ¡está funcionando!

#### I) Configurar eventos importantes (opcional pero recomendado)
En Google Analytics:
1. Ve a **"Configurar" → "Eventos"**
2. Crear evento personalizado: `whatsapp_click`
3. Crear evento: `calendly_click`
4. Crear evento: `form_submit`

---

## 3️⃣ META PIXEL (Para Instagram Ads)

### ¿Para qué sirve?
- Hacer publicidad en Instagram
- Remarketing (mostrar anuncios a quienes visitaron tu web)
- Medir conversiones desde Instagram
- Crear audiencias personalizadas

### Pasos de Configuración:

#### A) Crear cuenta Meta Business
1. Ve a: https://business.facebook.com
2. Inicia sesión con Facebook (o crea cuenta solo para esto)
3. Haz clic en **"Crear cuenta"**
4. Nombre: `Vete a la Cima`
5. Tu nombre: `Virginia Vallejo`
6. Email de empresa: `virginia@vetealacima.com`

#### B) Crear Pixel
1. En el menú lateral, ve a **"Configuración empresarial"**
2. En el menú, haz clic en **"Orígenes de datos" → "Píxeles"**
3. Haz clic en **"Añadir"** → **"Crear un píxel"**
4. Nombre del píxel: `Vete a la Cima Web`
5. URL del sitio web: `https://www.vetealacima.com`
6. Haz clic en **"Crear"**

#### C) Obtener ID del Pixel
1. Verás tu **ID del píxel** (número largo, ej: `1234567890123456`)
2. **COPIA ESTE ID**

#### D) Agregar ID al proyecto
1. Abre: `src/data/siteConfig.js`
2. Busca la línea:
   ```javascript
   metaPixelId: "XXXXXXXXXXXXXXXXX",
   ```
3. Reemplaza con tu ID real:
   ```javascript
   metaPixelId: "1234567890123456", // Reemplaza con tu ID real
   ```

#### E) Deploy
```powershell
git add .
git commit -m "feat: configurar Meta Pixel para Instagram Ads"
git push
```

#### F) Verificar que funciona
1. Instala extensión de Chrome: **"Meta Pixel Helper"**
   - https://chrome.google.com/webstore (buscar "Meta Pixel Helper")
2. Visita: https://www.vetealacima.com
3. Haz clic en el ícono de la extensión
4. Deberías ver: ✅ **"PageView"** detectado
5. Si lo ves, ¡está funcionando!

#### G) Conectar Instagram (para hacer ads)
1. En Meta Business Suite, ve a **"Configuración"**
2. Haz clic en **"Cuentas de Instagram"**
3. Conecta la cuenta: `@vir.veterinaria`
4. Ahora puedes crear campañas de Instagram que rastreen conversiones

---

## 4️⃣ BING WEBMASTER TOOLS (Opcional pero recomendado)

### ¿Para qué sirve?
- Aparecer en Bing (motor de búsqueda de Microsoft)
- ~10-15% del tráfico de búsqueda viene de Bing
- Gratis y toma 5 minutos

### Pasos:
1. Ve a: https://www.bing.com/webmasters
2. Inicia sesión con cuenta Microsoft (o crea una)
3. **IMPORTAR DESDE GOOGLE SEARCH CONSOLE** (más fácil):
   - Haz clic en **"Importar"**
   - Autoriza con tu cuenta de Google
   - Selecciona `www.vetealacima.com`
   - Automáticamente importa sitemap y todo
4. ✅ Listo en 1 clic

---

## 5️⃣ VERIFICAR TODO FUNCIONA

### Checklist Final:

```bash
□ Google Search Console verificado
  → Ve a: https://search.google.com/search-console
  → Deberías ver "www.vetealacima.com" verificado
  
□ Sitemap enviado
  → En Google Search Console → Sitemaps
  → Estado: "Éxito" (puede tardar 24h)
  
□ Google Analytics funcionando
  → Ve a: https://analytics.google.com → Tiempo real
  → Abre tu sitio, deberías verte en "usuarios activos"
  
□ Meta Pixel funcionando
  → Con Meta Pixel Helper instalado
  → Visita tu sitio, debería detectar "PageView"
  
□ Todas las páginas cargan
  → https://www.vetealacima.com
  → https://www.vetealacima.com/servicios
  → https://www.vetealacima.com/blog
  → https://www.vetealacima.com/sobre-mi
  → https://www.vetealacima.com/contacto
  
□ Schema.org válido
  → Ve a: https://search.google.com/test/rich-results
  → Ingresa: https://www.vetealacima.com
  → No debe haber errores
```

---

## 📊 MONITOREO POST-CONFIGURACIÓN

### Primera Semana:
- [ ] Revisar Google Search Console diariamente
- [ ] Verificar que páginas se estén indexando
- [ ] Revisar Analytics → Tiempo real cada día
- [ ] Probar Meta Pixel con la extensión

### Primer Mes:
- [ ] Analizar fuentes de tráfico en Analytics
- [ ] Ver qué palabras clave traen visitas en Search Console
- [ ] Optimizar páginas con bajo rendimiento
- [ ] Configurar eventos de conversión en Analytics

### Mantenimiento Continuo:
- [ ] Revisar Search Console semanalmente
- [ ] Analizar Analytics mensualmente
- [ ] Actualizar sitemap cuando agregues páginas del blog
- [ ] Monitorear posiciones de keywords

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### "Google Search Console no verifica"
**Solución:**
1. Verifica que el meta tag esté en el `<head>`
2. Espera 5 minutos después del deploy
3. Limpia caché del navegador (Ctrl+Shift+R)
4. Intenta verificar de nuevo

### "Google Analytics no muestra datos"
**Solución:**
1. Verifica el ID en `siteConfig.js` (debe empezar con `G-`)
2. Limpia caché y abre en incógnito
3. Espera 30-60 minutos (puede haber delay)
4. Verifica en modo "Tiempo real"

### "Meta Pixel no se detecta"
**Solución:**
1. Verifica el ID en `siteConfig.js` (solo números)
2. Limpia caché (Ctrl+Shift+Delete)
3. Desactiva bloqueadores de ads
4. Abre en modo incógnito

### "Sitemap muestra error"
**Solución:**
1. Verifica que existe: https://www.vetealacima.com/sitemap-index.xml
2. Si no existe, revisa que se haya desplegado
3. Espera 24-48 horas (Google tarda en procesar)

---

## 📞 RESUMEN DE IDs NECESARIOS

### Archivo: `src/data/siteConfig.js`

```javascript
export const siteConfig = {
  // ... otras configuraciones ...
  
  // Analytics & Tracking
  googleAnalyticsId: "G-ABC123XYZ4", // ← Reemplaza con tu ID de Google Analytics
  metaPixelId: "1234567890123456", // ← Reemplaza con tu ID de Meta Pixel
};
```

### Archivo: `src/components/layout/BaseHead.astro`

Agregar después de la línea `<meta name="author" content={siteConfig.author} />`:

```astro
<meta name="google-site-verification" content="TU_CODIGO_DE_VERIFICACION" />
```

---

## ✅ SIGUIENTE DEPLOY

Después de configurar los IDs:

```powershell
# 1. Guardar cambios
git add .
git commit -m "feat: configurar Google Analytics, Meta Pixel y Search Console"
git push

# 2. Esperar deploy (2-3 minutos)

# 3. Verificar en Vercel
# Ve a: https://vercel.com/tu-proyecto
# Verifica que el deploy sea exitoso
```

---

## 🎯 ORDEN RECOMENDADO DE CONFIGURACIÓN

**Hazlo en este orden para máxima eficiencia:**

1. **Google Analytics** (10 min) - Para empezar a recopilar datos YA
2. **Meta Pixel** (10 min) - Para preparar futuros Instagram Ads
3. **Google Search Console** (15 min) - Requiere deploy
4. **Bing Webmaster** (5 min) - Importar desde Google

**Total: ~40 minutos y tendrás todo configurado** 🚀

---

## 📧 ¿NECESITAS AYUDA?

Si algo no funciona:
1. Revisa la sección "Solución de Problemas" arriba
2. Verifica que los IDs estén correctos
3. Espera 24-48 horas (algunas cosas tardan)
4. Contáctame para resolver el problema específico

---

**Última actualización**: 29 de Enero, 2026  
**Versión**: 2.0
