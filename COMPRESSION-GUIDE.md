# Guía de Compresión para Eduardo's Landscaping

## Problema Actual
- Video: 113MB (límite de Vercel: 50MB)
- Imágenes: 1.9-4.6MB cada una (demasiado pesadas para web)

## Solución: Comprimir sin perder calidad

---

## OPCIÓN 1: Automática con ffmpeg (Recomendada)

### Instalar ffmpeg en Windows:
```bash
# Con winget (Windows 10/11):
winget install ffmpeg

# O con Chocolatey:
choco install ffmpeg
```

### Ejecutar compresión:
```bash
compress-assets.bat
```

**Resultado:**
- Video: ~8-15MB (1080p, calidad excelente)
- Imágenes: ~200-500KB (calidad 85, imperceptible)

---

## OPCIÓN 2: Herramientas Online (Sin instalación)

### Para el Video:
1. Ve a: https://www.freeconvert.com/video-compressor
2. Sube: `public/video/2412111_Graden_Flowering_Plants_3840x2160.mov`
3. Configuración:
   - Formato: MP4
   - Calidad: Alta (70-80%)
   - Resolución: 1920x1080 (Full HD)
   - Codec: H.264
4. Descarga y guarda como: `public/video/hero-video-optimized.mp4`

### Para las Imágenes:
1. Ve a: https://squoosh.app/
2. Sube cada imagen de `public/pics/`
3. Configuración:
   - Formato: WebP
   - Calidad: 85
   - Esfuerzo: 6
4. Descarga y guarda en: `public/pics/optimized/[nombre].webp`

**O usa TinyPNG (más fácil):**
- https://tinypng.com/
- Arrastra todas las imágenes
- Descarga el ZIP comprimido

---

## OPCIÓN 3: Comandos Manuales

### Comprimir Video (una vez instalado ffmpeg):
```bash
ffmpeg -i "public/video/2412111_Graden_Flowering_Plants_3840x2160.mov" \
  -c:v libx264 -crf 23 -preset slow \
  -vf "scale=1920:1080" \
  -movflags +faststart \
  -c:a aac -b:a 128k \
  "public/video/hero-video-optimized.mp4"
```

### Comprimir Imágenes (WebP):
```bash
# Crear carpeta
mkdir public\pics\optimized

# Comprimir cada imagen
ffmpeg -i "public/pics/Resized_20251003_123211.jpeg" \
  -c:v libwebp -quality 85 \
  "public/pics/optimized/Resized_20251003_123211.webp"
```

---

## Después de comprimir

Yo actualizaré automáticamente el código para usar:
- `public/video/hero-video-optimized.mp4`
- `public/pics/optimized/*.webp`

---

## Comparación de Calidad

### Video:
- **Original (MOV)**: 113MB, 4K
- **Optimizado (MP4)**: ~10MB, 1080p, CRF 23
- **Calidad**: 98% similar (imperceptible para web)

### Imágenes:
- **Original (JPEG)**: 1.9-4.6MB
- **Optimizado (WebP)**: 200-500KB
- **Calidad**: 95-98% similar (calidad 85)

---

## Por qué estos formatos:

**MP4 (H.264)**:
- Compatible con todos los navegadores
- Compresión eficiente sin pérdida visible
- CRF 23 = punto dulce entre calidad/tamaño

**WebP**:
- 30% más liviano que JPEG a misma calidad
- Compatible con todos los navegadores modernos
- Soporte de transparencia

---

## Siguiente paso:
1. Comprimir archivos (elige una opción)
2. Avísame cuando termines
3. Yo actualizo el código automáticamente
