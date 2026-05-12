# Color Palette Generator

Aplicación web para generar paletas de colores de forma aleatoria. Elegí el tamaño, el formato, bloqueá colores individuales y copialos al portapapeles con un click.

---

## Demo

Abrí `index.html` en tu navegador o visitá el deploy en GitHub Pages.

---

## Funcionalidades

- Generación aleatoria de paletas con colores equilibrados
- Tamaño configurable: 6, 8 o 9 colores
- Soporte para formatos HEX y HSL
- Bloqueo individual de colores — se conservan al regenerar
- Copiado al portapapeles con click en cualquier color
- Tooltips animados como feedback visual
- Diseño responsive — funciona en mobile y desktop
- Accesibilidad con `aria-label`, `aria-live` y navegación por teclado

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura de la aplicación |
| CSS3 | Estilos, animaciones y responsive |
| JavaScript ES6 | Lógica, DOM y generación de colores |

Sin frameworks ni librerías externas.

---

## Instalación

```bash
git clone https://github.com/JoaquinG-eng/Color-Palette-Generator.git
```

No requiere instalación ni servidor. Abrí `index.html` directamente en el navegador.

---

## Estructura
/
├── index.html
├── CSS/
│   └── style.css
├── JS/
│   └── script.js
├── ASSETS/
│   └── capturas/
└── README.md

---

## Aspectos técnicos

### Generación de colores con HSL

Los colores se generan en el modelo HSL para garantizar combinaciones visualmente equilibradas. Saturación y luminosidad están acotadas para evitar colores demasiado apagados o demasiado brillantes:

```javascript
const h = Math.floor(Math.random() * 360);
const s = Math.floor(Math.random() * 25) + 35;
const l = Math.floor(Math.random() * 20) + 38;
```

### Conversión HSL → HEX

Se hace matemáticamente sin librerías, normalizando los valores y calculando los componentes RGB intermedios:
hsl(210, 80%, 60%) → #4da6ff



### Sistema de bloqueo

Al regenerar, los colores bloqueados se conservan en su posición. Se guardan en un array antes de limpiar el DOM y se reutilizan al construir la nueva paleta.

### Accesibilidad

- HTML semántico: `<header>`, `<main>`, `<section>`, `<footer>`
- `aria-label` en controles e interactivos
- `aria-live="polite"` en el contenedor de paleta
- `aria-label` dinámico en botones de bloqueo
- Navegación por teclado con `Enter` y `Space`
- Estados `focus` visibles

---

## Deploy en GitHub Pages

1. Ir al repositorio → **Settings → Pages**
2. En **Source** seleccionar:
   - Branch: `main`
   - Folder: `/ (root)`
3. Guardar — el link se genera automáticamente
4.  https://joaquing-eng.github.io/Color-Palette-Generator/
---

## Autor

**Joaquín González**  
[github.com/JoaquinG-eng](https://github.com/JoaquinG-eng)
