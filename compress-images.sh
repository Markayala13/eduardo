#!/bin/bash
FFMPEG="/c/Users/anton/AppData/Local/CapCut/Apps/7.2.0.2961/ffmpeg.exe"

echo "Comprimiendo imágenes..."

images=(
  "Resized_20251003_123211.jpeg"
  "Resized_20251114_124533.jpeg"
  "Resized_20251124_155803.jpeg"
  "Resized_20251124_155823.jpeg"
  "Resized_20251124_155922.jpeg"
  "Resized_20251204_093029.jpeg"
  "Resized_20251204_093130.jpeg"
  "Resized_20251204_093249.jpeg"
  "Resized_20251204_161427.jpeg"
  "Resized_20251204_161511.jpeg"
  "Resized_20251218_162217.jpeg"
  "att.ee4wKZKSr_zBBySTPrGft3eGKenqNIovIAg9Ht4EMwQ.png.jpeg"
  "att.ek7EbPNcRDs9bXvR6K5QTGG65H-15y9aHsPErpeQk8I.png.jpeg"
  "att.L7NaxfvfeocezDAr-HJgG8tV3GDlphowJTqVkEtSJng.jpg.jpeg"
  "att.RI8Eph89zGcs21vxYzbIv9ynoL2APvuCEFSRmxnz5yo.png.jpeg"
)

for img in "${images[@]}"; do
  echo "Procesando: $img"
  "$FFMPEG" -i "public/pics/$img" -vf "scale=1920:-1" -q:v 2 "public/pics/optimized/$img" -y 2>&1 | grep -E "(error|completed|Stream|Output)"
done

echo "¡Listo!"
