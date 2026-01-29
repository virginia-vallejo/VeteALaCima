# ⚡ GUÍA RÁPIDA - Configurar IDs en 3 Pasos

## 🎯 LO QUE NECESITAS HACER

Hay **3 integraciones** que requieren IDs:
1. **Google Analytics 4** → Para ver estadísticas de visitas
2. **Meta Pixel** → Para Instagram Ads
3. **Google Search Console** → Para aparecer en Google

---

## 📝 PASO 1: GOOGLE ANALYTICS 4

### Obtener el ID:
1. Ve a: https://analytics.google.com
2. Crear cuenta → Crear propiedad
3. Configurar flujo de datos → Web
4. **Copiar ID** (formato: `G-XXXXXXXXXX`)

### Agregarlo al proyecto:
**Archivo:** `src/data/siteConfig.js`

```javascript
// BUSCA ESTA LÍNEA:
googleAnalyticsId: "G-XXXXXXXXXX",

// REEMPLAZA CON TU ID:
googleAnalyticsId: "G-TU_ID_REAL_AQUI",
```

**Ejemplo real:**
```javascript
googleAnalyticsId: "G-ABC123XYZ4",
```

---

## 📝 PASO 2: META PIXEL (Instagram Ads)

### Obtener el ID:
1. Ve a: https://business.facebook.com
2. Crear cuenta Meta Business
3. Configuración → Píxeles → Crear píxel
4. **Copiar ID** (número largo, ej: `1234567890123456`)

### Agregarlo al proyecto:
**Archivo:** `src/data/siteConfig.js`

```javascript
// BUSCA ESTA LÍNEA:
metaPixelId: "XXXXXXXXXXXXXXXXX",

// REEMPLAZA CON TU ID:
metaPixelId: "TU_ID_NUMERICO_AQUI",
```

**Ejemplo real:**
```javascript
metaPixelId: "1234567890123456",
```

---

## 📝 PASO 3: GOOGLE SEARCH CONSOLE

### Obtener el código:
1. Ve a: https://search.google.com/search-console
2. Añadir propiedad → `https://www.vetealacima.com`
3. Método: **Etiqueta HTML**
4. **Copiar solo el contenido** (la parte entre comillas)

### Agregarlo al proyecto:
**Archivo:** `src/components/layout/BaseHead.astro`

Busca esta sección:
```astro
<!-- SEO -->
<title>{fullTitle}</title>
<meta name="description" content={description} />
<link rel="canonical" href={pageUrl} />
<meta name="author" content={siteConfig.author} />
```

Agrega DESPUÉS de la línea `author` esta línea:
```astro
<meta name="google-site-verification" content="TU_CODIGO_AQUI" />
```

**Ejemplo real:**
```astro
<meta name="author" content={siteConfig.author} />
<meta name="google-site-verification" content="abc123xyz789..." />
```

---

## 🚀 PASO 4: DEPLOY

Después de agregar los 3 IDs:

```powershell
git add .
git commit -m "feat: configurar Analytics, Meta Pixel y Search Console"
git push
```

---

## ✅ VERIFICAR QUE FUNCIONA

### Google Analytics (inmediato):
1. Ve a: https://analytics.google.com
2. Tiempo real → Deberías verte navegando
3. ✅ Si ves "1 usuario activo", funciona

### Meta Pixel (inmediato):
1. Instala extensión: "Meta Pixel Helper" en Chrome
2. Visita tu sitio
3. ✅ Si detecta "PageView", funciona

### Google Search Console (tarda 24-48h):
1. Después del deploy, vuelve a Search Console
2. Clic en "Verificar"
3. ✅ Si dice "Verificado", funciona
4. Ir a Sitemaps → Enviar `sitemap-index.xml`

---

## 📍 UBICACIÓN DE LOS ARCHIVOS

```
VeteALaCima/
├── src/
│   ├── data/
│   │   └── siteConfig.js ← PASO 1 y 2 (Analytics + Meta Pixel)
│   └── components/
│       └── layout/
│           └── BaseHead.astro ← PASO 3 (Search Console)
```

---

## 🎯 RESUMEN VISUAL

```
┌──────────────────────────────────────────────────┐
│  src/data/siteConfig.js                          │
├──────────────────────────────────────────────────┤
│                                                  │
│  googleAnalyticsId: "G-ABC123XYZ4",      ← ID 1 │
│  metaPixelId: "1234567890123456",        ← ID 2 │
│                                                  │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│  src/components/layout/BaseHead.astro            │
├──────────────────────────────────────────────────┤
│                                                  │
│  <meta name="google-site-verification"           │
│        content="abc123..." />            ← ID 3 │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## ⏱️ TIEMPO ESTIMADO

- **Paso 1** (Analytics): 10 minutos
- **Paso 2** (Meta Pixel): 10 minutos  
- **Paso 3** (Search Console): 15 minutos
- **Deploy**: 3 minutos

**TOTAL: ~40 minutos** ⚡

---

## 🆘 NECESITAS AYUDA?

Abre el archivo: `GUIA-INTEGRACIONES.md` para la guía completa paso a paso con screenshots y solución de problemas.

---

**¡Después de esto tu sitio estará 100% optimizado!** 🎉
