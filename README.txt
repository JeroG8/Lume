================================================================
FUTURE INSIGHT — PAQUETE 3: AUTORIDAD DIGITAL
Template completo con blog, reservas, newsletter y catálogo
================================================================

ARCHIVOS INCLUIDOS
------------------
index.html   — Estructura completa (9 secciones)
style.css    — Estilos modulares con variables CSS
script.js    — Toda la lógica: blog, reservas, newsletter, catálogo
articles.json — Artículos del blog (editable sin tocar código)
assets/      — Carpeta para imágenes del negocio

================================================================
PERSONALIZACIÓN RÁPIDA
================================================================

1. DATOS GLOBALES (script.js, líneas 12-16)
   CONFIG.whatsappNumber  → número sin espacios (ej: 521234567890)
   CONFIG.whatsappMessage → mensaje de bienvenida en WhatsApp
   CONFIG.mapsEmbedSrc    → src del iframe de Google Maps
   CONFIG.articlesFile    → ruta del JSON de artículos (no cambiar)

2. BLOG (articles.json — editar directamente)
   Cada artículo tiene estos campos:
   {
     "id":       1,                  ← número único, no repetir
     "title":    "Título del artículo",
     "excerpt":  "Resumen breve (aparece en la tarjeta)",
     "content":  "<p>HTML completo del artículo</p>",
     "category": "Nombre de categoría",
     "date":     "2025-04-10",       ← formato YYYY-MM-DD
     "image":    "assets/blog1.jpg", ← ruta de imagen o ""
     "author":   "Tu nombre"
   }
   El contenido acepta HTML básico: <p>, <h2>, <ul>, <li>, <strong>

3. CATÁLOGO (script.js, líneas 25-30)
   Mismo formato que Paquete 2. Ver su README para detalles.

4. TESTIMONIOS (script.js, líneas 36-41)
   Mismo formato que Paquete 2. Ver su README para detalles.

5. FECHAS BLOQUEADAS EN RESERVAS (script.js, líneas 50-60)
   BLOCKED_DATES    → array de strings 'YYYY-MM-DD'
   BLOCKED_WEEKDAYS → días de semana bloqueados (0=Dom, 6=Sáb)
   Las reservas se guardan en localStorage del navegador.
   Para conectar a un sistema real, edita la función saveReservation().

6. NEWSLETTER
   Por defecto guarda emails en localStorage (simulado).
   Para conectarlo a Mailchimp, ConvertKit u otro:
   Reemplaza el bloque localStorage en initNewsletter() con
   una llamada fetch() a tu API de email marketing.

================================================================
IMÁGENES SUGERIDAS (carpeta assets/)
================================================================
- hero.jpg      → Foto principal (1920×1080px)
- about.jpg     → Foto del equipo/local (800×600px)
- product1-4.jpg → Fotos de productos (600×400px)
- blog1-6.jpg   → Miniaturas de artículos (800×500px)
- logo.png      → Logo (fondo transparente)

================================================================
GOOGLE ANALYTICS (OPCIONAL)
================================================================
1. Ve a analytics.google.com y crea una propiedad
2. Obtén tu ID de medición (formato: G-XXXXXXXXXX)
3. En index.html, línea 10-11, descomenta el script de GA4
   y reemplaza G-XXXXXXXXXX con tu ID real

================================================================
CONECTAR FORMULARIO DE CONTACTO
================================================================
Ver instrucciones en README del Paquete 1. Mismo proceso.
Endpoint de Formspree va en submitForm() en script.js (~línea 230).

================================================================
RESERVAS EN PRODUCCIÓN
================================================================
Las reservas del Paquete 3 usan localStorage — funcionan sin
servidor pero se borran si el usuario limpia el navegador.
Para guardar reservas de forma permanente tienes estas opciones:

  a) Formspree: envía los datos del formulario de reserva
     igual que el formulario de contacto
  b) Airtable: conecta via API para tener una base de datos
  c) Backend propio: punto de API que reciba los datos POST

================================================================
SOPORTE TÉCNICO
================================================================
Desarrollado por Future Insight
Web:    futureinsight.mx
Email:  hola@futureinsight.mx
================================================================
