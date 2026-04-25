# Anissa Barón Legal Website

Sitio web estático de una sola página para una abogada/notaria en Choluteca, Honduras. Está pensado como demo/pitch para un cliente freelance y usa solo `HTML`, `CSS` y `JavaScript`.

## Archivos

- `index.html`: estructura del sitio, contenido, SEO, Open Graph y JSON-LD.
- `styles.css`: estilos visuales, responsive layout, navegación móvil y componentes.
- `script.js`: menú móvil, estado del header, animaciones suaves y año dinámico.
- `assets/`: aquí deben colocarse las imágenes finales.

## Personalización rápida

1. Reemplace los textos de contacto en `index.html`:
   - WhatsApp: `https://wa.me/504XXXXXXXX`
   - Teléfono: `tel:+504XXXXXXXX`
   - Correo: `correo@ejemplo.com`
   - Dirección: `Choluteca, Honduras`
2. Coloque las fotos reales en:
   - `assets/anissa-hero.jpg`
   - `assets/anissa-about.jpg`
3. Reemplace los enlaces sociales `#` por los perfiles reales.
4. Actualice las metas sociales:
   - `og:url`
   - `og:image`
   - JSON-LD `url`, `image`, `telephone`, `email`

Si las imágenes todavía no existen, el diseño mostrará placeholders elegantes con degradados en su lugar.

## Vista previa local

No necesita instalación.

1. Abra la carpeta del proyecto.
2. Haga doble clic en `index.html`.

Opcionalmente puede usar una extensión como Live Server en VS Code para previsualización automática.

## Despliegue en Netlify

### Opción 1: Drag and drop

1. Inicie sesión en Netlify.
2. Entre a `Sites`.
3. Arrastre la carpeta del proyecto completa o súbala como nuevo sitio.
4. Netlify publicará el sitio automáticamente.

### Opción 2: Conectar repositorio

1. Suba este proyecto a GitHub.
2. En Netlify, haga clic en `Add new site`.
3. Elija `Import an existing project`.
4. Conecte el repositorio.
5. Use esta configuración:
   - Build command: dejar vacío
   - Publish directory: `.`
6. Publique el sitio.

## Recomendaciones antes de entregar al cliente

- Cambiar todos los `XXXX-XXXX` por datos reales.
- Subir una fotografía profesional de buena calidad para el hero.
- Reemplazar el placeholder del mapa por un `iframe` de Google Maps cuando exista la dirección exacta.
- Definir el dominio final y actualizar `og:url`.
- Revisar el sitio en móvil y escritorio con los datos reales.
