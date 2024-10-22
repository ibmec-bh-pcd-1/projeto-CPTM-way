
const metrozinho = document.getElementById("metrozinho");
const progresso = document.getElementById("Progresso");
const timerDisplay = document.getElementById("timer");
const totalTempo = 900; 

function moverMetro() {
    const progressoWidth = progresso.offsetWidth - metrozinho.offsetWidth; 
    let tempo = totalTempo; 

    const intervalo = setInterval(() => {
        let minutos = Math.floor(tempo / 60);
        let segundos = tempo % 60;
        timerDisplay.textContent = 
            (minutos < 10 ? "0" + minutos : minutos) + ":" +
            (segundos < 10 ? "0" + segundos : segundos);

        const posicaoAtual = ((totalTempo - tempo) / totalTempo) * progressoWidth;

        metrozinho.style.left = posicaoAtual + "px";

        if (tempo <= 0) {
            clearInterval(intervalo);
            tempo = totalTempo; 
            moverMetro(); 
        } else {
            tempo--; 
        }
    }, 1000); 
}

window.onload = function() {
    moverMetro(); 
}
    