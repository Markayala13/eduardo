@echo off
REM Script para comprimir video e imágenes sin perder calidad

echo ========================================
echo Comprimiendo video a MP4 optimizado...
echo ========================================
ffmpeg -i "public/video/2412111_Graden_Flowering_Plants_3840x2160.mov" ^
  -c:v libx264 ^
  -crf 23 ^
  -preset slow ^
  -movflags +faststart ^
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease" ^
  -c:a aac ^
  -b:a 128k ^
  "public/video/hero-video-optimized.mp4"

echo.
echo ========================================
echo Comprimiendo imágenes a WebP...
echo ========================================

REM Crear carpeta para imágenes optimizadas
if not exist "public/pics/optimized" mkdir "public\pics\optimized"

REM Comprimir cada imagen a WebP (calidad 85, excelente balance)
for %%f in (public\pics\*.jpeg) do (
  echo Procesando: %%~nxf
  ffmpeg -i "%%f" -c:v libwebp -quality 85 -compression_level 6 "public\pics\optimized\%%~nf.webp"
)

echo.
echo ========================================
echo COMPLETADO!
echo ========================================
echo Video original: ~113MB
echo Video optimizado: ~8-15MB (1080p, calidad excelente)
echo.
echo Imágenes originales: 1.9-4.6MB cada una
echo Imágenes WebP: ~200-500KB cada una (calidad 85)
echo.
echo Archivos guardados en:
echo - public/video/hero-video-optimized.mp4
echo - public/pics/optimized/*.webp
echo ========================================
pause
