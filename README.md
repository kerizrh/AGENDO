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
- **Calendario Interactivo**: Navegación por meses y selección de fechas
- **Gestión de Citas**: Crear, ver y eliminar citas
- **Sistema de Categorías**: Médica, Educativa, Laboral, Personal con iconos y colores
- **Tipos de Recordatorio**: WhatsApp, SMS, Notificaciones
- **Formulario Avanzado**: Interfaz completa para crear nuevas citas
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
   http://localhost:3001
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
- **Calendario Interactivo**: Navegación por meses, días con citas marcados
- **Lista de próximas citas**: Vista previa con categorías e iconos
- **Iconos informativos**: Cada sección tiene su icono representativo

### Calendario Interactivo
- **Navegación por meses**: Flechas para cambiar entre meses
- **Visualización de citas**: Días con citas marcados con puntos púrpura
- **Selección de fechas**: Haz clic en cualquier día para ver las citas
- **Día actual**: Resaltado en azul (accent)
- **Día seleccionado**: Resaltado en naranja (warning)
- **Leyenda visual**: Explicación de los colores

### Gestión de Citas
- **Lista completa**: Todas las citas con estado y acciones
- **Sistema de categorías**: 
  - 🏥 Médica (rojo)
  - 📚 Educativa (azul)
  - 💼 Laboral (púrpura)
  - 🎉 Personal (verde)
- **Estados visuales**: Confirmadas (verde) y pendientes (amarillo)
- **Acciones**: Eliminar citas con confirmación visual

### Nueva Cita
- **Formulario completo**: Título, categoría, fecha, hora, doctor, ubicación, recordatorio, notas
- **Selección de categoría**: Botones interactivos con iconos
- **Tipos de recordatorio**: WhatsApp, SMS, Notificación
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
│   └── Calendar.jsx     # Componente del calendario interactivo
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

### Categorías
El sistema de categorías se puede personalizar en el componente principal:
```javascript
const categoryColors = {
  medica: 'bg-red-500',
  educativa: 'bg-blue-500',
  laboral: 'bg-purple-500',
  personal: 'bg-green-500'
};

const categoryIcons = {
  medica: '🏥',
  educativa: '📚',
  laboral: '💼',
  personal: '🎉'
};
```

### Calendario
El componente de calendario incluye:
- **Navegación por meses**: Botones anterior/siguiente
- **Visualización de citas**: Días con citas marcados
- **Selección interactiva**: Clic en días para ver citas
- **Leyenda visual**: Explicación de colores y estados

### Componentes
Cada vista está modularizada y se puede personalizar independientemente:
- Login y autenticación
- Dashboard y estadísticas
- Calendario interactivo
- Gestión de citas
- Formularios
- Configuración

## 📄 Licencia

Este es un proyecto de demostración. Puede ser utilizado libremente para fines educativos y de desarrollo.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerir mejoras.

---

**AGENDO** - Tu agenda personal, simplificada.
