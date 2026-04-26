# GRUPO LEX Legal Website

Sitio web estático de una sola página para GRUPO LEX, firma legal en Honduras con atención principal de la Abg. Thania G. Jirón. Está pensado como demo/pitch para un cliente freelance y usa solo `HTML`, `CSS` y `JavaScript`.

## Archivos

- `index.html`: estructura del sitio, contenido, SEO, Open Graph y JSON-LD.
- `styles.css`: estilos visuales, responsive layout, navegación móvil y componentes.
- `script.js`: menú móvil, estado del header, animaciones suaves, año dinámico y detección de fotos reales.
- `assets/`: aquí deben colocarse las imágenes finales.

## Datos actuales

- Marca: `GRUPO LEX`
- Subtítulo: `Firma Legal`
- Contacto principal: `Abg. Thania G. Jirón`
- Teléfono / WhatsApp: `+504 9891-8261`
- Correo: `grupolex504@gmail.com`
- Ubicación: `Honduras`
- Sitio publicado: `https://grupo-lex-choluteca.netlify.app/`

## Personalización rápida

1. Reemplace los datos pendientes en `index.html`:
   - Dominio final si se cambia desde Netlify a un dominio propio
   - Dirección física cuando esté disponible
   - Horario exacto cuando esté disponible
   - Enlaces sociales reales
2. Mantenga o reemplace los activos visuales en:
   - `assets/grupo-lex-logo.png`
   - `assets/thania-jiron.jpg`
3. Actualice la imagen social:
   - `og:image`
   - JSON-LD `image`

El logo de GRUPO LEX ya está incluido. Si la foto de Thania todavía no existe, el diseño mostrará un placeholder elegante con su monograma.

## Vista previa local

No necesita instalación.

```powershell
cd C:\Users\mrtig\Desktop\Law-website
python -m http.server 5500
```

Luego abra:

```text
http://localhost:5500
```

Presione `Ctrl + C` para detener el servidor.

## Despliegue en Netlify

### Conectar repositorio

1. Suba o mantenga este proyecto en GitHub.
2. En Netlify, haga clic en `Add new site`.
3. Elija `Import an existing project`.
4. Conecte el repositorio.
5. Use esta configuración:
   - Build command: dejar vacío
   - Publish directory: `.`
   - Branch: `main`
6. Publique el sitio.

Netlify desplegará automáticamente cada vez que se haga `git push` a la rama `main`.

## Recomendaciones antes de entregar al cliente

- Confirmar si la ubicación debe mostrarse como Honduras o una ciudad específica.
- Confirmar horarios de atención.
- Subir fotografía profesional de la Abg. Thania G. Jirón o del equipo.
- Si se compra un dominio propio, actualizar `og:url`, `og:image` y JSON-LD.
- Renombrar el proyecto/repositorio si se desea que coincida con `GRUPO LEX`.
