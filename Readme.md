# ProyectoM1_JOAQUING FT73 — Generador de Paleta de Colores

Aplicación web interactiva desarrollada como MVP para generar paletas de colores automáticas y visualizar sus códigos en distintos formatos útiles para diseño y desarrollo web.

---

# Repositorio

- Nombre del repositorio: `ProyectoM1_JOAQUING-FT73`
- Visibilidad: Público en GitHub
- Historial: Commits claros y descriptivos siguiendo buenas prácticas

---

# Código fuente del proyecto

## Tecnologías utilizadas

- HTML5 semántico
- CSS3
- JavaScript ES6

---

# Buenas prácticas implementadas

## HTML

- Uso de etiquetas semánticas (`header`, `main`, `section`, `button`, `footer`)
- Asociación correcta de `label` con inputs
- Estructura clara y accesible
- Uso de atributos `aria-label` y `aria-live`

---

## CSS

- Organización modular del estilo
- Uso consistente de clases
- Diseño responsive con Grid y Flexbox
- Focus visible para accesibilidad
- Animaciones y microinteracciones modernas

---

## JavaScript

- Manipulación dinámica del DOM
- Funciones reutilizables y separadas por responsabilidad
- Render dinámico de paletas
- Eventos organizados correctamente
- Conversión automática de formatos de color

---

# Features / Funcionalidades

## Generación de colores aleatorios en formatos:

- HSL
- HEX
- RGBA

---

## Selección del tamaño de la paleta:

- 6 colores
- 8 colores
- 9 colores

---

## Funcionalidades principales

- Visualización individual de cada color junto a su código
- Botón "Generar paleta" completamente operativo
- Copiado automático al portapapeles
- Bloqueo individual de colores
- Render dinámico según el tamaño seleccionado

---

# Microfeedback al usuario

- Tooltips animados
- Toasts de confirmación
- Feedback visual de bloqueo/desbloqueo
- Estados hover y focus

---

# Accesibilidad

## Implementaciones realizadas

- Labels asociados correctamente
- Contraste suficiente
- Foco visible en elementos interactivos
- Compatibilidad básica con teclado
- Uso de `aria-label` en botones dinámicos
- Uso de `aria-live="polite"` para contenido dinámico

---

# Algoritmo de conversión HSL → HEX

La aplicación genera colores aleatorios utilizando el modelo HSL (Hue, Saturation, Lightness).

Posteriormente, cada color es convertido automáticamente a formato HEX mediante un algoritmo matemático implementado en JavaScript.

## Proceso de conversión

1. Se normalizan los valores de saturación y luminosidad.
2. Se calculan los componentes RGB temporales.
3. Los valores RGB son convertidos a hexadecimal.
4. Finalmente se construye el código HEX final.

### Ejemplo

```txt
HSL:
hsl(210, 80%, 60%)

Resultado HEX:
#4da6ff


Manual de Usuario
Instrucciones de uso
Seleccionar el tamaño de la paleta desde el menú desplegable.
Elegir el formato de color (HEX, HSL o RGBA).
Presionar el botón "Generar paleta".
Visualizar los colores generados automáticamente.
Bloquear colores individuales si se desean conservar.
Hacer clic sobre un color para copiar su código automáticamente.
Manual Técnico (Decisiones técnicas)
Se utilizó JavaScript para comprender la manipulación directa del DOM.
Los colores se generan mediante cálculos aleatorios en HSL para obtener combinaciones armónicas.
Conversión dinámica entre formatos de color.
Separación del proyecto en carpetas para mejorar escalabilidad.
Diseño orientado a un MVP funcional y extensible.
Se implementó render dinámico reutilizable para facilitar futuras mejoras.
La accesibilidad fue considerada desde la estructura HTML y los componentes interactivos.
Ejecutar la aplicación en local
1. Entrar al proyecto
cd ProyectoM1_JOAQUING-FT73
2. Abrir el proyecto

Abrir el archivo index.html en cualquier navegador moderno.

Despliegue en GitHub Pages
Pasos para desplegar
Ir al repositorio en GitHub.
Entrar en "Settings".
Seleccionar "Pages".
En "Source", elegir:
Branch: main
Folder: /root
Guardar cambios.

## Autor

Joaquín Gonzalez 