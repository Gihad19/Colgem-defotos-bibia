const sessaoCarta = document.getElementById('sessaoCarta');
const sessaoTimeline = document.getElementById('sessaoTimeline');
const sessaoMotivos = document.getElementById('sessaoMotivos');
const fraseMotivo = document.getElementById('fraseMotivo');

function abrirCarta() {
    const envelope = document.getElementById('envelopeWrapper');
    envelope.classList.toggle('aberto');
}



function mostrarSessao(idSessao) {
    sessaoCarta.classList.add('oculto');
    sessaoTimeline.classList.add('oculto');
    sessaoMotivos.classList.add('oculto');
    document.getElementById(idSessao).classList.remove('oculto');
}

document.getElementById('btnCarta').addEventListener('click', () => mostrarSessao('sessaoCarta'));
document.getElementById('btnTimeline').addEventListener('click', () => mostrarSessao('sessaoTimeline'));
document.getElementById('btnMotivos').addEventListener('click', () => mostrarSessao('sessaoMotivos'));

// Suas frases personalizadas ficam aqui!
const listaMotivos = [
    "Pelo seu sorriso que ilumina meu dia.",
    "Pela sua forma carinhosa de cuidar de mim.",
    "Pelos nossos momentos de risada juntos.",
    "Por ser a pessoa mais incrível que eu conheço.",
    "Por dividir sua vida e seus sonhos comigo.",
    "Pela sua força e determinação que me inspiram.",
    "Pelo jeito que você me faz sentir especial."
];

function sortearFrase() {
    const indiceSorteado = Math.floor(Math.random() * listaMotivos.length);
    fraseMotivo.innerText = listaMotivos[indiceSorteado];
}