/**
 * main.js
 * * Este é o ponto de entrada principal do nosso JavaScript.
 * 1. Ele inicializa as bibliotecas globais (AOS, GSAP).
 * 2. Ele importa os módulos de funcionalidades (portfolio, certificacoes).
 * Apenas importar os módulos já faz com que o código deles seja executado.
 */

// Importa os módulos. Isso vai "ligar" os botões.
import './modules/portfolio.js';
import './modules/certificacoes.js';

// Inicializa a biblioteca AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
});

// Animação com GSAP para o subtítulo
gsap.from("#subtitulo", {
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

console.log('Página e módulos carregados com sucesso.');