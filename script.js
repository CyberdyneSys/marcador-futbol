const socket = new WebSocket('ws://tu-servidor.com:8080'); // Cambia la URL por la de tu servidor

socket.onopen = () => {
    console.log('Conexión con WebSocket establecida.');
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    document.getElementById("team1-name").textContent = data.team1;
    document.getElementById("team2-name").textContent = data.team2;
    document.getElementById("score1").textContent = data.score1;
    document.getElementById("score2").textContent = data.score2;
    document.getElementById("timer").textContent = data.timer;
    document.getElementById("team1-logo").src = data.team1Logo;
    document.getElementById("team2-logo").src = data.team2Logo;
};

socket.onerror = (error) => {
    console.error('Error en la conexión de WebSocket:', error);
};

socket.onclose = () => {
    console.log('Conexión con WebSocket cerrada.');
};
