const paletteContainer = document.getElementById('palette');
const generateBtn = document.getElementById('generateBtn');
const paletteSizeSelect = document.getElementById('paletteSize');

function randomColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 50) + 50; // Saturación 50-100%
    const l = Math.floor(Math.random() * 30) + 40; // Luminosidad 40-70%
    const hsl = `hsl(${h}, ${s}%, ${l}%)`;
    return {
        hsl,
        hex: hslToHex(h, s, l)
    };
}

function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2*l - 1)) * s;
    let x = c * (1 - Math.abs((h/60) % 2 - 1));
    let m = l - c/2;
    let r=0, g=0, b=0;

    if(h >=0 && h<60){ r=c; g=x; b=0;}
    else if(h>=60 && h<120){ r=x; g=c; b=0;}
    else if(h>=120 && h<180){ r=0; g=c; b=x;}
    else if(h>=180 && h<240){ r=0; g=x; b=c;}
    else if(h>=240 && h<300){ r=x; g=0; b=c;}
    else{ r=c; g=0; b=x;}

    r = Math.round((r+m)*255);
    g = Math.round((g+m)*255);
    b = Math.round((b+m)*255);

    return `#${((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}`;
}

// Tooltip
function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    element.appendChild(tooltip);
    setTimeout(() => tooltip.classList.add('show'), 10);
    setTimeout(() => {
        tooltip.classList.remove('show');
        setTimeout(() => element.removeChild(tooltip), 300);
    }, 1500);
}

// Generar paleta
function generatePalette() {
    const size = parseInt(paletteSizeSelect.value);

    // Guardar los colores existentes y sus estados de lock
    const existingBoxes = paletteContainer.querySelectorAll('.color-box');
    const lockedColors = [];
    existingBoxes.forEach(box => {
        if(box.dataset.locked === 'true'){
            lockedColors.push({
                hsl: box.dataset.hsl,
                hex: box.dataset.hex
            });
        } else {
            lockedColors.push(null);
        }
    });

    paletteContainer.innerHTML = '';

    for(let i=0; i<size; i++){
        let color = lockedColors[i] || randomColor();
				
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color.hsl;
        colorBox.textContent = color.hsl;

        const codeSpan = document.createElement('div');
        codeSpan.className = 'color-code';
        codeSpan.textContent = color.hex;
        colorBox.appendChild(codeSpan);

        colorBox.dataset.hsl = color.hsl;
        colorBox.dataset.hex = color.hex;
        colorBox.dataset.locked = lockedColors[i] ? 'true' : 'false';

        // Botón de lock individual
        const lockBtn = document.createElement('button');
        lockBtn.className = 'lock-btn';
        lockBtn.innerHTML = colorBox.dataset.locked === 'true' ? '🔒' : '🔓';
        if(colorBox.dataset.locked === 'true') lockBtn.classList.add('locked');

        lockBtn.addEventListener('click', (e)=>{
            e.stopPropagation(); // evita copiar al portapapeles
            const locked = lockBtn.classList.toggle('locked');
            colorBox.dataset.locked = locked ? 'true' : 'false';
            lockBtn.innerHTML = locked ? '🔒' : '🔓';
        });

        colorBox.appendChild(lockBtn);

        // Copiar color
        colorBox.addEventListener('click', ()=>{
            navigator.clipboard.writeText(color.hex);
            showTooltip(colorBox, '¡Copiado!');
        });

        paletteContainer.appendChild(colorBox);
    }
}

generateBtn.addEventListener('click', generatePalette);