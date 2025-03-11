let timer;
let seconds = 0;
let running = false;

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

function resetTimer() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    document.getElementById("timer").textContent = "00:00";
}
