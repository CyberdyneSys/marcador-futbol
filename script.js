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
            updateOverlay({ timer: timeText });
        }, 1000);
    }
}

// Función para reiniciar el cronómetro
function resetTimer() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    const timeText = "00:00";
    document.getElementById("timer").textContent = timeText;
    updateOverlay({ timer: timeText });
}

// Función para incrementar el marcador
function increaseScore(team) {
    scores[team]++;
    const scoreText = scores[team];
    document.getElementById(team === "team1" ? "score1" : "score2").textContent = scoreText;
    updateOverlay({ [team]: scoreText });
}

// Función para actualizar el overlay en tiempo real
function updateOverlay(changes) {
    fetch('/update-overlay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(changes),
    }).catch(error => console.error("Error al actualizar el overlay:", error));
}

// Función para copiar la URL del overlay al portapapeles
function copyOverlayURL() {
    const overlayURL = window.location.origin + '/overlay.html';
    navigator.clipboard.writeText(overlayURL)
        .then(() => alert("URL del overlay copiada: " + overlayURL))
        .catch(() => alert("No se pudo copiar la URL"));
}
