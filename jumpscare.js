const layer = document.getElementById("why-layer");
const som = document.getElementById("som");

// quantidade absurda de WHY
const total = 800;

for (let i = 0; i < total; i++) {
    const span = document.createElement("div");
    span.className = "why";
    span.textContent = "WHY?";
    span.style.animationDuration = (Math.random() * 0.05 + 0.03) + "s";
    layer.appendChild(span);
}

// tocar som automaticamente
window.onload = () => {
    som.volume = 1.0; // GRITO NO TALO
    som.currentTime = 0;

    som.play().catch(() => {
        document.body.addEventListener("click", () => som.play(), { once: true });
    });
};
