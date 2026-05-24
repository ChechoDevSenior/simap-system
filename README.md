# SIMAP - Sistema de Información de Movimiento Aéreo de Personal

Sistema web para gestión de órdenes y registros de vuelo de personal aéreo.

## 📋 Características

- ✅ Autenticación de usuarios
- ✅ Dashboard personalizado
- ✅ Gestión de órdenes de vuelo
- ✅ Registro de vuelos
- ✅ Búsqueda de registros
- ✅ Recuperación de contraseña
- ✅ Responsive design

## 🗂️ Estructura de Carpetas

```
simap-system/
├── index.html           # Página de inicio de sesión
├── dashboard.html       # Panel principal del usuario
├── ordenes.html         # Gestión de órdenes de vuelo
├── registros.html       # Visualización de registros
├── recuperar.html       # Recuperación de contraseña
├── css/
│   └── styles.css       # Estilos generales
├── js/
│   ├── app.js           # Funciones principales
│   └── auth.js          # Lógica de autenticación
├── img/
│   ├── logo.png         # Logo del sistema
│   └── user.png         # Foto de perfil
└── README.md            # Este archivo
```

## 🚀 Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ChechoDevSenior/simap-system.git
   cd simap-system
   ```

2. **Abrir en navegador:**
   - Opción 1: Abrir `index.html` directamente en el navegador
   - Opción 2: Usar un servidor local (recomendado)

## 💻 Usar con Servidor Local (Recomendado)

### Con Python 3:
```bash
python -m http.server 8000
```

### Con Node.js (http-server):
```bash
npx http-server
```

### Con PHP:
```bash
php -S localhost:8000
```

Luego accede a `http://localhost:8000`

## 📝 Flujo de Uso

1. **Iniciar sesión** en `index.html`
   - Usuario: cualquier texto
   - Contraseña: mínimo 6 caracteres

2. **Ver dashboard** - Información personal y opciones disponibles

3. **Órdenes de vuelo** - Ingresar datos de vuelos

4. **Registros** - Consultar registros guardados con búsqueda

## 🛠️ Tecnologías

- **HTML5** - Estructura
- **CSS3** - Estilos y diseño responsive
- **JavaScript (Vanilla)** - Interactividad
- **Bootstrap 5.3.3** - Framework CSS

## 🔐 Seguridad (Desarrollo)

⚠️ **Nota:** Este es un proyecto de desarrollo. En producción se debe:
- Implementar autenticación en backend
- Usar HTTPS
- Validar datos en servidor
- Usar tokens JWT o sesiones seguras
- Encriptar información sensible

## 📱 Responsive

El sistema está optimizado para:
- 📱 Dispositivos móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🎨 Personalización

### Cambiar colores principales:
Edita en `css/styles.css` las variables CSS:

```css
:root {
    --color-primary: #00A000;  /* Color verde principal */
    --color-text-light: #ffffff;
    --color-text-dark: #000000;
}
```

## 📧 Contacto

- **Desarrollador:** ChechoDevSenior
- **Repositorio:** https://github.com/ChechoDevSenior/simap-system

## 📄 Licencia

Este proyecto está disponible bajo licencia MIT.

---

**Última actualización:** Mayo 2026