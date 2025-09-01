# AGENDO - Demo de Agenda Personal

Una aplicación de demostración para gestión de citas y agenda personal, desarrollada con React y Tailwind CSS.

## 🎨 Paleta de Colores

La aplicación utiliza la siguiente paleta de colores personalizada:

- **Primary**: `#416162F` - Color principal
- **Secondary**: `#242F49` - Color secundario  
- **Accent**: `#384358` - Color de acento
- **Warning**: `#FFA586` - Color de advertencia
- **Danger**: `#B51A28` - Color de peligro
- **Dark**: `#541825` - Color oscuro

## 🚀 Características

- **Autenticación**: Sistema de login demo (cualquier email/contraseña)
- **Dashboard**: Vista general con estadísticas de citas
- **Gestión de Citas**: Crear, ver y eliminar citas
- **Formulario de Citas**: Interfaz completa para crear nuevas citas
- **Configuración**: Panel de configuraciones de la aplicación
- **Responsive**: Diseño adaptativo para móviles y desktop
- **Navegación**: Sidebar colapsible con navegación intuitiva

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **Lucide React** - Iconos modernos
- **PostCSS** - Procesador de CSS

## 📦 Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <repository-url>
   cd AGENDO
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:5173
   ```

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de desarrollo (alias de dev)

## 📱 Funcionalidades de la Demo

### Login
- Interfaz de autenticación con gradientes
- Cualquier email y contraseña son válidos para la demo
- Diseño moderno con iconos y animaciones

### Dashboard
- **Tarjetas de estadísticas**: Citas hoy, pendientes, confirmadas
- **Lista de próximas citas**: Vista previa de las próximas citas
- **Iconos informativos**: Cada sección tiene su icono representativo

### Gestión de Citas
- **Lista completa**: Todas las citas con estado y acciones
- **Estados visuales**: Confirmadas (verde) y pendientes (amarillo)
- **Acciones**: Eliminar citas con confirmación visual

### Nueva Cita
- **Formulario completo**: Título, fecha, hora, doctor, notas
- **Validación**: Campos requeridos y formatos correctos
- **Diseño responsive**: Adaptable a diferentes tamaños de pantalla

### Configuración
- **Toggles interactivos**: Notificaciones, SMS, tema oscuro
- **Iconos descriptivos**: Cada opción tiene su icono representativo
- **Estados visuales**: Toggles activos/inactivos

## 🎯 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── AgendaYaApp.jsx     # Componente principal de la aplicación
├── App.jsx             # Componente raíz
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales y configuración de Tailwind
```

## 🎨 Personalización

### Colores
Los colores se pueden modificar en:
- `tailwind.config.js` - Configuración de Tailwind
- `src/index.css` - Variables CSS personalizadas

### Componentes
Cada vista está modularizada y se puede personalizar independientemente:
- Login y autenticación
- Dashboard y estadísticas
- Gestión de citas
- Formularios
- Configuración

## 📄 Licencia

Este es un proyecto de demostración. Puede ser utilizado libremente para fines educativos y de desarrollo.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerir mejoras.

---

**AGENDO** - Tu agenda personal, simplificada.
