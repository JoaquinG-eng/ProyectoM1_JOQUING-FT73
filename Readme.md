ProyectoM1 — Generador de Paleta de Colores

Aplicación web interactiva desarrollada como MVP para generar paletas de colores automáticas y visualizar sus códigos en distintos formatos útiles para diseño y desarrollo web.


#  Repositorio

* Nombre del repositorio `ProyectoM1_JOQUING-FT73`
* Visibilidad: Público en GitHub
* Historial: Commits claros y descriptivos siguiendo buenas prácticas


Código fuente del proyecto

Tecnologías utilizadas

* HTML semántico
* CSS
* JavaScript 

Buenas prácticas implementadas

HTML

* Uso de etiquetas semánticas (`header`, `main`, `section`, `button`)
* Asociación correcta de `label` con inputs
* Estructura clara y accesible

CSS

* Organización modular del estilo
* Uso consistente de clases


Features / Funcionalidades 
Generación de colores aleatorios en formatos:

* HSL
* HEX / RGBA

Selección del tamaño de la paleta:

* 6 colores
* 8 colores
* 9 colores

Visualización individual de cada color junto a su código HEX

Botón "Generar paleta" completamente operativo

Microfeedback al usuario:

* Tooltips
* Alerts
* Toasts de confirmación

Accesibilidad básica:

* Labels asociados
* Contraste suficiente
* Foco visible en elementos interactivos

---

Manual de Usuario (Instrucciones de uso)

1. Seleccionar el tamaño de la paleta desde el menú desplegable.
2. Elegir el formato de color (HEX, HSL o RGBA).
3. Presionar el botón "Generar paleta".
4. Visualizar los colores generados automáticamente.
5. Copiar el código del color usando el botón correspondiente.


Manual Técnico (Decisiones técnicas)

* Se utilizó JavaScript para comprender la manipulación directa del DOM.
* Los colores se generan mediante cálculos aleatorios en HSL para obtener combinaciones armónicas.
* Conversión dinámica entre formatos de color.
* Separación del proyecto en carpetas para mejorar escalabilidad.
* Diseño orientado a un MVP funcional y extensible.


Ejecutar la aplicación en local

1. Clonar el repositorio:

bash
git clone https://github.com/JoaquinG-eng/ProyectoM1_JOQUING-FT73.git
```

2. Entrar al proyecto:

bash
cd ProyectoM1_JOQUING-FT73


3. Abrir el archivo `index.html` en el navegador.

Despliegue en GitHub Pages

Pasos para desplegar

1. Ir al repositorio en GitHub.
2. Entrar en "Settings".
3. Seleccionar "Pages".
4. En "Source", elegir:

   * Branch: "main"
   * Folder: "root"
5. Guardar cambios.


Demo (MVP)

https://joaquing-eng.github.io/ProyectoM1_JOQUING-FT73/

Autor: Joaquín Gonzalez FT73