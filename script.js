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
            document.getElementById("timer").textContent = 
                (minutes < 10 ? "0" : "") + minutes + ":" + (secs < 10 ? "0" : "") + secs;
        }, 1000);
    }
}

// Función para reiniciar el cronómetro
function resetTimer() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    document.getElementById("timer").textContent = "00:00";
}

// Función para incrementar el marcador
function increaseScore(team) {
    scores[team]++;
    document.getElementById(team === "team1" ? "score1" : "score2").textContent = scores[team];
}
