# ✅ CHECKLIST DE INTEGRACIONES

## 📋 Antes de Empezar

```
□ Tener acceso a una cuenta de Google (usar la de Virginia)
□ Tener acceso al repo en GitHub
□ Tener acceso al proyecto en Vercel
□ 40 minutos de tiempo disponible
```

---

## 🔧 CONFIGURACIONES

### 1. GOOGLE ANALYTICS 4
```
□ Crear cuenta en analytics.google.com
□ Crear propiedad "Vete a la Cima Web"
□ Configurar flujo de datos (Web)
□ Copiar ID (formato: G-XXXXXXXXXX)
□ Pegar en src/data/siteConfig.js → googleAnalyticsId
□ Verificar en Tiempo Real después del deploy
```

### 2. META PIXEL (Instagram Ads)
```
□ Crear cuenta en business.facebook.com
□ Crear píxel "Vete a la Cima Web"
□ Copiar ID del píxel (número largo)
□ Pegar en src/data/siteConfig.js → metaPixelId
□ Instalar extensión "Meta Pixel Helper"
□ Verificar que detecta PageView
```

### 3. GOOGLE SEARCH CONSOLE
```
□ Ir a search.google.com/search-console
□ Añadir propiedad: www.vetealacima.com
□ Método de verificación: Etiqueta HTML
□ Copiar código de verificación
□ Pegar en src/components/layout/BaseHead.astro
□ Hacer git commit y push
□ Esperar deploy (2-3 min)
□ Volver y hacer clic en "Verificar"
□ ✅ Verificación exitosa
□ Enviar sitemap: sitemap-index.xml
□ Enviar sitemap: sitemap-0.xml
```

### 4. BING WEBMASTER (Opcional - 5 min)
```
□ Ir a bing.com/webmasters
□ Importar desde Google Search Console
□ ✅ Listo (todo se importa automáticamente)
```

---

## 🚀 DEPLOY FINAL

```
□ Guardar todos los archivos editados
□ git add .
□ git commit -m "feat: configurar Analytics, Meta Pixel y Search Console"
□ git push
□ Esperar 2-3 minutos
□ Verificar en Vercel que deploy fue exitoso
```

---

## ✅ VERIFICACIÓN POST-DEPLOY

### Inmediato (en 5 minutos):
```
□ Abrir www.vetealacima.com
□ Verificar que el sitio carga correctamente
□ Ir a Google Analytics → Tiempo Real
□ ✅ Debería mostrar 1 usuario activo (tú)
□ Con Meta Pixel Helper, verificar que detecta PageView
□ ✅ Ícono verde con número "1"
```

### En 24-48 horas:
```
□ Google Search Console muestra páginas indexadas
□ Sitemap muestra estado "Éxito"
□ Puedes ver primeras estadísticas en Search Console
```

### En 1 semana:
```
□ Ver qué búsquedas traen tráfico
□ Analizar páginas más visitadas en Analytics
□ Verificar errores en Search Console
□ Optimizar basándote en datos
```

---

## 📊 MONITOREO CONTINUO

### Diario (primera semana):
```
□ Revisar Google Analytics → Tiempo Real
□ Verificar que no hay errores en Search Console
```

### Semanal:
```
□ Analizar tráfico en Google Analytics
□ Revisar palabras clave en Search Console
□ Ver fuentes de tráfico
```

### Mensual:
```
□ Análisis completo de Analytics
□ Revisar posiciones de keywords
□ Optimizar páginas con bajo rendimiento
□ Actualizar sitemap si hay nuevas páginas del blog
```

---

## 🎯 OBJETIVOS DESPUÉS DE 1 MES

```
□ 100+ visitas mensuales
□ 5-10 conversiones (clics en WhatsApp, Calendly, formulario)
□ Todas las páginas principales indexadas en Google
□ Primeras posiciones para "Virginia Vallejo consultora veterinaria"
□ Tráfico desde búsquedas de "Mishmoshos"
```

---

## 📁 ARCHIVOS A EDITAR

### src/data/siteConfig.js
```javascript
googleAnalyticsId: "G-TU_ID",     // ← Editar aquí
metaPixelId: "TU_ID_NUMERICO",    // ← Editar aquí
```

### src/components/layout/BaseHead.astro
```astro
<!-- Agregar después de meta name="author" -->
<meta name="google-site-verification" content="TU_CODIGO" />
```

---

## 🆘 SI ALGO NO FUNCIONA

### Google Analytics no muestra datos:
1. Verifica el ID empiece con `G-`
2. Limpia caché (Ctrl+Shift+Delete)
3. Espera 30-60 minutos
4. Prueba en modo incógnito

### Meta Pixel no se detecta:
1. Desactiva bloqueadores de ads
2. Prueba en modo incógnito
3. Verifica el ID sea solo números
4. Limpia caché

### Search Console no verifica:
1. Verifica que el meta tag esté en BaseHead.astro
2. Espera 5-10 minutos después del deploy
3. Limpia caché
4. Intenta de nuevo

---

## 📞 CONTACTOS DE SOPORTE

- **Google Analytics**: https://support.google.com/analytics
- **Meta Business**: https://www.facebook.com/business/help
- **Search Console**: https://support.google.com/webmasters

---

## ✨ DESPUÉS DE COMPLETAR TODO

```
✅ Tu sitio estará 100% optimizado
✅ Empezarás a ver estadísticas reales
✅ Google indexará todas tus páginas
✅ Estarás lista para hacer Instagram Ads
✅ Podrás tomar decisiones basadas en datos
```

---

**¡ÉXITO!** 🎉

Una vez completado este checklist, tu sitio tendrá:
- SEO optimizado
- Tracking completo
- Visibilidad en buscadores
- Preparado para crecer

**Tiempo total invertido: ~40 minutos**  
**Beneficio: Mejora continua durante años**

---

**Fecha de inicio**: ______________  
**Fecha de finalización**: ______________  
**Verificado por**: ______________
