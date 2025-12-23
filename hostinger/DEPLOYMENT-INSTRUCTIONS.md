# Instrucciones de Deployment - Eduardo's Landscaping
## Cómo subir tu sitio a Hostinger

---

## 📦 Contenido de esta carpeta

Esta carpeta `hostinger/` contiene TODOS los archivos que necesitas subir a Hostinger:

```
hostinger/
├── index.html          # Página principal
├── 404.html           # Página de error 404
├── robots.txt         # Para SEO
├── sitemap.xml        # Para SEO
├── manifest.json      # Para PWA
├── .htaccess          # Configuración del servidor
├── _next/             # Archivos JavaScript y CSS
└── images/            # Todas las imágenes
```

---

## 🚀 Paso a Paso: Subir a Hostinger

### Opción 1: File Manager (Más fácil)

1. **Entra a Hostinger**:
   - Ve a https://hpanel.hostinger.com
   - Inicia sesión con tu cuenta

2. **Abre el File Manager**:
   - En el panel, busca "File Manager"
   - Click en "File Manager"

3. **Ve a public_html**:
   - En el File Manager, abre la carpeta `public_html/`
   - Esta es la carpeta raíz de tu sitio web

4. **Limpia archivos viejos** (IMPORTANTE):
   - Selecciona TODOS los archivos en `public_html/`
   - Click derecho → Delete
   - Confirma la eliminación

5. **Sube los nuevos archivos**:
   - Click en "Upload Files" (botón arriba a la derecha)
   - Selecciona TODOS los archivos de esta carpeta `hostinger/`
   - **IMPORTANTE**: También sube el archivo `.htaccess` (archivos ocultos)
   - Espera a que termine la subida (puede tomar 5-10 minutos)

6. **Verifica la estructura**:
   - Asegúrate que en `public_html/` veas:
     - index.html
     - robots.txt
     - sitemap.xml
     - .htaccess
     - carpeta `_next/`
     - carpeta `images/`

### Opción 2: FTP (Más rápido para archivos grandes)

1. **Obtén credenciales FTP**:
   - En Hostinger panel, ve a "FTP Accounts"
   - Crea una cuenta FTP o usa las existentes
   - Guarda:
     - Host: `ftp.eduardolandscaping.com` (o el que te den)
     - Username: tu usuario FTP
     - Password: tu contraseña FTP
     - Port: 21

2. **Descarga FileZilla** (si no lo tienes):
   - Ve a https://filezilla-project.org
   - Descarga e instala FileZilla Client

3. **Conecta por FTP**:
   - Abre FileZilla
   - Ingresa: Host, Username, Password, Port
   - Click "Quickconnect"

4. **Sube archivos**:
   - En el panel izquierdo (Local), navega a esta carpeta `hostinger/`
   - En el panel derecho (Remote), ve a `/public_html/`
   - BORRA todo lo que está en `/public_html/` (lado derecho)
   - Selecciona TODO en la carpeta local (lado izquierdo)
   - Arrastra al lado derecho
   - Espera a que termine la subida

---

## ✅ Verificación Post-Deployment

Después de subir, verifica que todo funcione:

### 1. Verifica tu sitio
- [ ] Abre https://eduardolandscaping.com
- [ ] Verifica que se vea correctamente
- [ ] Prueba en móvil y desktop
- [ ] Verifica que todas las imágenes carguen
- [ ] Prueba todos los links

### 2. Verifica archivos SEO
- [ ] https://eduardolandscaping.com/robots.txt - Debe mostrar el contenido
- [ ] https://eduardolandscaping.com/sitemap.xml - Debe mostrar el XML
- [ ] https://eduardolandscaping.com/manifest.json - Debe mostrar el JSON

### 3. Verifica HTTPS
- [ ] El sitio debe redirigir automáticamente a HTTPS
- [ ] No debe haber warnings de "Not Secure"
- [ ] El candado verde debe aparecer

### 4. Verifica rendimiento
- [ ] Ve a https://pagespeed.web.dev
- [ ] Ingresa: `https://eduardolandscaping.com`
- [ ] Objetivo: 90+ en móvil y desktop

---

## 🔧 Configuración Adicional en Hostinger

### 1. Forzar HTTPS (Si no funciona automáticamente)

Ya está configurado en `.htaccess`, pero si no funciona:

1. En Hostinger Panel, ve a "Advanced" → "Force HTTPS"
2. Activa "Force HTTPS"

### 2. Habilitar Cloudflare (Recomendado)

1. En Hostinger Panel, busca "Cloudflare"
2. Click "Enable Cloudflare CDN"
3. Sigue las instrucciones
4. Beneficios:
   - Sitio más rápido
   - Protección contra ataques
   - Mejor caché

### 3. Configurar SSL Certificate (Si no está activo)

1. En Hostinger Panel, ve a "SSL"
2. Activa "Free SSL Certificate"
3. Espera 5-10 minutos para que se active

---

## 📧 Configurar Email Profesional (Opcional)

1. **Crea emails**:
   - Ve a "Email Accounts" en Hostinger
   - Crea: `info@eduardolandscaping.com`
   - Crea: `contacto@eduardolandscaping.com`

2. **Configura en tu teléfono**:
   - Usa los settings que Hostinger te proporciona
   - IMAP para poder ver emails en todos tus dispositivos

---

## 🔍 Siguientes Pasos: SEO

Después de subir el sitio, sigue estas instrucciones en orden:

### 1. Google Search Console (DÍA 1)
Lee el archivo `SEO-SETUP-GUIDE.md` → Sección 1
- Verifica tu sitio
- Envía el sitemap

### 2. Google Analytics (DÍA 1)
Lee el archivo `SEO-SETUP-GUIDE.md` → Sección 2
- Crea cuenta GA4
- Agrega el código de tracking

### 3. Google My Business (DÍA 1-2)
Lee el archivo `SEO-SETUP-GUIDE.md` → Sección 4
- **SUPER IMPORTANTE** para ranking local
- Crea/reclama tu perfil
- Solicita verificación por correo

### 4. Actualiza información del negocio (DÍA 2)

Debes actualizar estos archivos con tu información real:

**En el proyecto (antes de hacer build nuevamente):**

1. `app/page.tsx` - Líneas 29-40:
   ```typescript
   streetAddress: 'Tu dirección real',
   postalCode: 'Tu código postal',
   latitude: 'Tu latitud',
   longitude: 'Tu longitud',
   ```

2. `app/layout.tsx` - Línea 97:
   ```typescript
   google: "tu-código-de-verificación-real",
   ```

Después de actualizar, haz `npm run build` y sube los nuevos archivos.

---

## 🆘 Solución de Problemas

### Problema: "403 Forbidden"
**Solución**:
- Asegúrate que `index.html` esté en `/public_html/`
- Verifica permisos: debe ser 644

### Problema: Imágenes no cargan
**Solución**:
- Verifica que la carpeta `images/` se subió completa
- Verifica que `.htaccess` se subió correctamente

### Problema: El sitio se ve roto (sin estilos)
**Solución**:
- Verifica que la carpeta `_next/` se subió completa
- Limpia el caché del navegador (Ctrl + Shift + R)
- Espera 5-10 minutos para propagación de DNS

### Problema: HTTPS no funciona
**Solución**:
- Ve a Hostinger Panel → SSL
- Activa "Force HTTPS"
- Espera 10-15 minutos

### Problema: El sitio muestra "Coming Soon"
**Solución**:
- En Hostinger, desactiva la página "Coming Soon"
- Ve a Settings → Coming Soon → Disable

---

## 📊 Monitoreo Continuo

### Cada semana:
- [ ] Revisa Google Search Console por errores
- [ ] Revisa Google Analytics - tráfico
- [ ] Responde reviews de Google Business

### Cada mes:
- [ ] Actualiza sitemap si agregaste contenido
- [ ] Revisa rankings de keywords
- [ ] Backup del sitio (descarga archivos)

---

## 🎉 ¡Felicidades!

Si seguiste todos los pasos, tu sitio está:
- ✅ Online en Hostinger
- ✅ Con HTTPS seguro
- ✅ Optimizado para SEO
- ✅ Con performance 90+
- ✅ Listo para aparecer en Google

**Tiempo estimado para ver resultados:**
- Semana 1: Indexado en Google
- Semana 2-4: Apareces en búsquedas de marca
- Mes 2-3: Rankings para búsquedas locales
- Mes 4-6: Top 5 para keywords competitivas

---

## 📞 Soporte

**Hostinger Support (24/7)**:
- Live Chat en el panel de Hostinger
- Email: support@hostinger.com

**Problemas técnicos del sitio**:
- Contacta a tu desarrollador
- made by https://antoshkadev.com/

---

¡Mucho éxito con Eduardo's Landscaping! 🌿🚀
