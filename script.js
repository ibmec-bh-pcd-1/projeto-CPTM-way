
const metrozinho = document.getElementById("metrozinho");
const progresso = document.getElementById("Progresso");
const timerDisplay = document.getElementById("timer");
const totalTempo = 30; // 15 minutos em segundos (900 segundos)

function moverMetro() {
    const progressoWidth = progresso.offsetWidth - metrozinho.offsetWidth; // Largura da barra menos a largura da imagem
    let tempo = totalTempo; // Inicializa o tempo com 900 segundos

    const intervalo = setInterval(() => {
        // Atualiza o timer
        let minutos = Math.floor(tempo / 60);
        let segundos = tempo % 60;
        timerDisplay.textContent = 
            (minutos < 10 ? "0" + minutos : minutos) + ":" +
            (segundos < 10 ? "0" + segundos : segundos);

        // Calcula a posição atual do metrô proporcional ao tempo
        const posicaoAtual = ((totalTempo - tempo) / totalTempo) * progressoWidth;

        // Move o metrô na barra
        metrozinho.style.left = posicaoAtual + "px";

        // Se o tempo atingir 0, reseta o tempo e o metrô
        if (tempo <= 0) {
            clearInterval(intervalo); // Para o intervalo
             // Reinicia
            tempo = totalTempo; // Reseta o tempo para 15 minutos
            moverMetro(); // Reinicia o movimento do metrô
        } else {
            tempo--; // Decrementa o tempo
        }
    }, 1000); // Atualiza a cada segundo
}

window.onload = function() {
    moverMetro(); // Inicia o movimento do metrô assim que a página carregar
}
    