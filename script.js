let timer;
let seconds = 0;
let running = false;
let scores = { team1: 0, team2: 0 };

// Función para iniciar el cronómetro
function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            let minutes = Math.floor(seconds / 60);
            let secs = seconds % 60;
            const timeText = 
                (minutes < 10 ? "0" : "") + minutes + ":" + (secs < 10 ? "0" : "") + secs;
            document.getElementById("timer").textContent = timeText;
            syncOverlay();
        }, 1000);
    }
}

// Función para reiniciar el cronómetro
function resetTimer() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    document.getElementById("timer").textContent = "00:00";
    syncOverlay();
}

// Función para incrementar el marcador
function increaseScore(team) {
    scores[team]++;
    document.getElementById(team === "team1" ? "score1" : "score2").textContent = scores[team];
    syncOverlay();
}

// Función para sincronizar los datos con el overlay
function syncOverlay() {
    const data = {
        team1: document.getElementById("team1-name").textContent,
        team2: document.getElementById("team2-name").textContent,
        score1: scores.team1,
        score2: scores.team2,
        timer: document.getElementById("timer").textContent
    };
    localStorage.setItem("overlayData", JSON.stringify(data));
}

// Función para cargar los datos en el overlay
function loadOverlayData() {
    const data = JSON.parse(localStorage.getItem("overlayData"));
    if (data) {
        document.getElementById("team1-name").textContent = data.team1;
        document.getElementById("team2-name").textContent = data.team2;
        document.getElementById("score1").textContent = data.score1;
        document.getElementById("score2").textContent = data.score2;
        document.getElementById("timer").textContent = data.timer;
    }
}

// Para el overlay, cargamos los datos al abrir la página
if (window.location.pathname.includes("overlay.html")) {
    loadOverlayData();
}

// Función para copiar la URL del overlay
function copyOverlayURL() {
    const overlayURL = window.location.origin + '/overlay.html';
    navigator.clipboard.writeText(overlayURL)
        .then(() => alert("URL del overlay copiada: " + overlayURL))
        .catch(() => alert("No se pudo copiar la URL"));
}
