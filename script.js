let golesEquipo1 = 0;
let golesEquipo2 = 0;
let tiempo = 0;
let intervaloCronometro;

function actualizarMarcador() {
    document.getElementById('golesEquipo1').innerText = golesEquipo1;
    document.getElementById('golesEquipo2').innerText = golesEquipo2;
    document.getElementById('cronometro').innerText = formatTiempo(tiempo);
}

function aumentarGolEquipo1() {
    golesEquipo1++;
    actualizarMarcador();
}

function aumentarGolEquipo2() {
    golesEquipo2++;
    actualizarMarcador();
}

function iniciarCronometro() {
    if (intervaloCronometro) clearInterval(intervaloCronometro);
    intervaloCronometro = setInterval(function() {
        tiempo++;
        actualizarMarcador();
    }, 1000);
}

function detenerCronometro() {
    clearInterval(intervaloCronometro);
}

function resetearCronometro() {
    tiempo = 0;
    actualizarMarcador();
}

function formatTiempo(segundos) {
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
}

function setEscudos(escudo1, escudo2) {
    document.getElementById('escudoEquipo1').style.backgroundImage = `url(${escudo1})`;
    document.getElementById('escudoEquipo2').style.backgroundImage = `url(${escudo2})`;
}

actualizarMarcador();
