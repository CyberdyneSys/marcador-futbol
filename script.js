function updateOverlay() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("team1-name").textContent = data.team1;
            document.getElementById("team2-name").textContent = data.team2;
            document.getElementById("score1").textContent = data.score1;
            document.getElementById("score2").textContent = data.score2;
            document.getElementById("timer").textContent = data.timer;
            document.getElementById("team1-logo").src = data.team1Logo;
            document.getElementById("team2-logo").src = data.team2Logo;
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

// Actualiza el marcador cada segundo
setInterval(updateOverlay, 1000);
