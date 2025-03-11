const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Cliente conectado.');

    setInterval(() => {
        const data = {
            team1: "Equipo A",
            team2: "Equipo B",
            score1: Math.floor(Math.random() * 10),
            score2: Math.floor(Math.random() * 10),
            timer: new Date().toLocaleTimeString(),
            team1Logo: "team1.png",
            team2Logo: "team2.png",
        };
        ws.send(JSON.stringify(data));
    }, 1000);

    ws.on('close', () => {
        console.log('Cliente desconectado.');
    });
});
