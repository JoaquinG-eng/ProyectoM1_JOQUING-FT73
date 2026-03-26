
const paletteContainer = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const paletteSizeSelect = document.getElementById("paletteSize");
const formatSelect = document.getElementById("formatSelect");


function showGlobalTooltip(message) {

    let tooltip = document.getElementById("global-tooltip");

    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "global-tooltip";
        document.body.appendChild(tooltip);
    }

    tooltip.textContent = message;
    tooltip.classList.add("show");

    setTimeout(() => {
        tooltip.classList.remove("show");
    }, 1800);
}



paletteSizeSelect.addEventListener("change", () => {
    paletteContainer.innerHTML = "";
    paletteContainer.style.background = "#ffffff";

    showGlobalTooltip("Tamaño de paleta cambiado");
});


formatSelect.addEventListener("change", () => {
    generatePalette();
    showGlobalTooltip(" Formato cambiado");
});

function randomColor() {

    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 50) + 50;
    const l = Math.floor(Math.random() * 30) + 40;

    const hsl = `hsl(${h}, ${s}%, ${l}%)`;

    return {
        hsl,
        hex: hslToHex(h, s, l)
    };
}


function hslToHex(h, s, l) {

    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;

    let r = 0, g = 0, b = 0;

    if (h < 60) { r = c; g = x; }
    else if (h < 120) { r = x; g = c; }
    else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; }
    else if (h < 300) { r = x; b = c; }
    else { r = c; b = x; }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)}`;
}

function showTooltip(element, text) {

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = text;

    element.appendChild(tooltip);

    setTimeout(() => tooltip.classList.add("show"), 10);

    setTimeout(() => {
        tooltip.classList.remove("show");
        setTimeout(() => element.removeChild(tooltip), 300);
    }, 1500);
}

function generatePalette() {

    paletteContainer.style.background = "transparent";

    const size = parseInt(paletteSizeSelect.value);
    const format = formatSelect.value;

    const existingBoxes = paletteContainer.querySelectorAll(".color-box");
    const lockedColors = [];

    existingBoxes.forEach(box => {
        lockedColors.push(
            box.dataset.locked === "true"
                ? { hsl: box.dataset.hsl, hex: box.dataset.hex }
                : null
        );
    });

    paletteContainer.innerHTML = "";

    for (let i = 0; i < size; i++) {

        const color = lockedColors[i] || randomColor();

        const colorBox = document.createElement("div");
        colorBox.className = "color-box";
        colorBox.style.backgroundColor = color.hsl;

        const text = format === "hex" ? color.hex : color.hsl;

        
        const codeSpan = document.createElement("div");
        codeSpan.className = "color-code";
        codeSpan.textContent = text;
        colorBox.appendChild(codeSpan);


        colorBox.dataset.hsl = color.hsl;
        colorBox.dataset.hex = color.hex;
        colorBox.dataset.locked = lockedColors[i] ? "true" : "false";

        
        const lockBtn = document.createElement("button");
        lockBtn.className = "lock-btn";

        const isLocked = colorBox.dataset.locked === "true";
        lockBtn.innerHTML = isLocked ? "🔒" : "🔓";
        if (isLocked) lockBtn.classList.add("locked");

        lockBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            const locked = lockBtn.classList.toggle("locked");
            colorBox.dataset.locked = locked ? "true" : "false";
            lockBtn.innerHTML = locked ? "🔒" : "🔓";

            showGlobalTooltip(
                locked ? "🔒 Color bloqueado" : "🔓 Color desbloqueado"
            );
        });

        colorBox.appendChild(lockBtn);

        
        colorBox.addEventListener("click", () => {

            const valueToCopy =
                formatSelect.value === "hex"
                    ? color.hex
                    : color.hsl;

            navigator.clipboard.writeText(valueToCopy);
            showTooltip(colorBox, "¡Copiado!");
        });

        paletteContainer.appendChild(colorBox);
    }

    showGlobalTooltip("Nueva paleta generada");
}

generateBtn.addEventListener("click", generatePalette);

generatePalette();