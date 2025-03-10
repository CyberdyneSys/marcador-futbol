let score1 = 0;
let score2 = 0;
let minutes = 0;
let seconds = 0;
let timerRunning = false;
let interval;

function changeScore(team, value) {
    if (team === 1) {
        score1 = Math.max(0, score1 + value);
        document.getElementById('score1').textContent = score1;
    } else {
        score2 = Math.max(0, score2 + value);
        document.getElementById('score2').textContent = score2;
    }
}

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            document.getElementById('timer').textContent = 
                (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(interval);
    timerRunning = false;
    minutes = 0;
    seconds = 0;
    document.getElementById('timer').textContent = '00:00';
}

function copyOverlayURL() {
    const url = window.location.href + "?overlay=true";
    navigator.clipboard.writeText(url).then(() => {
        alert("URL copiada al portapapeles: " + url);
    });
}
