const WebSocket = require('ws');

// Configura un servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });

let currentData = {
    team1: "Equipo 1",
    team2: "Equipo 2",
    score1: 0,
    score2: 0,
    timer: "00:00"
};

// Maneja las conexiones
wss.on('connection', (ws) => {
    console.log("Nuevo cliente conectado");
    ws.send(JSON.stringify(currentData)); // Enviar datos iniciales al cliente

    ws.on('message', (message) => {
        currentData = JSON.parse(message);
        // Notifica a todos los clientes conectados
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(currentData));
            }
        });
    });

    ws.on('close', () => {
        console.log("Cliente desconectado");
    });
});
