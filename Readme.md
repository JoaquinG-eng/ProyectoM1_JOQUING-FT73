# Generador de Paleta de Colores

Aplicación web interactiva desarrollada para generar paletas de colores automáticas y visualizar sus códigos en distintos formatos útiles para diseño y desarrollo web.

---

# 🚀 Funcionalidades

- Generación dinámica de paletas de colores
- Soporte para formatos HEX, HSL y RGBA
- Bloqueo individual de colores
- Copiado automático al portapapeles
- Interfaz responsive
- Render dinámico según el tamaño seleccionado
- Feedback visual e interacciones modernas

---

# 🎨 Formatos de color disponibles

- HEX
- HSL
- RGBA

---

# 🛠 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6)

---

# ⚙ Aspectos técnicos destacados

- Manipulación dinámica del DOM utilizando JavaScript
- Arquitectura reutilizable para el renderizado de componentes
- Generación armónica de colores mediante HSL
- Conversión automática de HSL → HEX
- Organización modular y escalable del proyecto
- Diseño responsive utilizando Flexbox y Grid
- Microinteracciones y animaciones modernas

---

# ♿ Accesibilidad

## Implementaciones realizadas

- Uso de HTML semántico
- Navegación básica mediante teclado
- Estados focus visibles
- Uso de `aria-label` en elementos dinámicos
- Actualización dinámica mediante `aria-live`

---

# 🧠 Algoritmo de conversión HSL → HEX

La aplicación genera colores aleatorios utilizando el modelo HSL (Hue, Saturation, Lightness) para obtener combinaciones visualmente armónicas.

Posteriormente, cada color es convertido automáticamente a formato HEX mediante un algoritmo implementado en JavaScript.

## Proceso de conversión

1. Normalización de saturación y luminosidad.
2. Cálculo temporal de componentes RGB.
3. Conversión de RGB a hexadecimal.
4. Construcción final del código HEX.

### Ejemplo

```txt
HSL:
hsl(210, 80%, 60%)

HEX:
#4da6ff
```

---

# 📘 Manual de Usuario

## Instrucciones de uso

1. Seleccionar el tamaño de la paleta desde el menú desplegable.
2. Elegir el formato de color (HEX, HSL o RGBA).
3. Presionar el botón “Generar paleta”.
4. Visualizar los colores generados automáticamente.
5. Bloquear colores individuales si se desean conservar.
6. Hacer clic sobre un color para copiar automáticamente su código.

---

# 📗 Manual Técnico

## Decisiones técnicas implementadas

- Uso de JavaScript para manipulación directa del DOM.
- Generación de colores mediante cálculos aleatorios en HSL.
- Conversión dinámica entre formatos de color.
- Separación del proyecto en carpetas para facilitar escalabilidad.
- Diseño orientado a un MVP funcional y extensible.
- Render dinámico reutilizable para futuras mejoras.
- Consideraciones de accesibilidad desde la estructura HTML.

---

# 📦 Ejecutar la aplicación en local

## 1. Clonar el repositorio

```bash
git clone https://github.com/JoaquinG-eng/color-palette-generator.git
```

## 2. Entrar al proyecto

```bash
cd color-palette-generator
```

## 3. Ejecutar la aplicación

Abrir el archivo `index.html` en cualquier navegador moderno.

---

# 🌐 Despliegue en GitHub Pages

## Pasos para desplegar

1. Ir al repositorio en GitHub.
2. Entrar en “Settings”.
3. Seleccionar “Pages”.
4. En “Source” elegir:
   - Branch: `main`
   - Folder: `/root`
5. Guardar cambios.

---

# 👨‍💻 Autor

Joaquín Gonzalez