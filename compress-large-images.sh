#!/bin/bash
FFMPEG="/c/Users/anton/AppData/Local/CapCut/Apps/7.2.0.2961/ffmpeg.exe"

large_images=(
  "att.ee4wKZKSr_zBBySTPrGft3eGKenqNIovIAg9Ht4EMwQ.png.jpeg"
  "Resized_20251124_155922.jpeg"
  "Resized_20251204_093029.jpeg"
  "Resized_20251114_124533.jpeg"
  "att.L7NaxfvfeocezDAr-HJgG8tV3GDlphowJTqVkEtSJng.jpg.jpeg"
  "Resized_20251124_155823.jpeg"
  "Resized_20251204_161511.jpeg"
  "Resized_20251204_093249.jpeg"
  "Resized_20251124_155803.jpeg"
  "Resized_20251003_123211.jpeg"
)

for img in "${large_images[@]}"; do
  echo "Recomprimiendo: $img"
  "$FFMPEG" -i "public/pics/$img" -vf "scale=1600:-1" -q:v 5 "public/pics/optimized/$img" -y 2>&1 | grep -E "(Stream #0:0:|Output)"
done
