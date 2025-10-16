// js/modules/certificacoes.js
import { carregarPlanilha } from '../utils/planilha-loader.js';


const criarHtmlCertificacao = (linha) => {

    const nome = linha[0];
    const link = linha[1];
    const projetos = linha.slice(2).filter(projLink => projLink); 

    const projetosHtml = projetos.map((projLink, index) =>
        `<a href="${projLink}" target="_blank" class="text-blue-400 hover:text-blue-200 bg-gray-700 hover:bg-gray-600 rounded-full px-3 py-1 text-sm transition-colors">
            Projeto ${index + 1}
        </a>`
    ).join('');

    return `
        <div class="block w-full max-w-3xl text-center bg-gray-800 bg-opacity-40 p-5 rounded-lg border border-blue-500 shadow-lg hover:shadow-blue-400/50 transition-shadow mb-4" data-aos="fade-left">
            
            <a href="${link}" target="_blank" class="text-xl font-bold hover:text-blue-300 transition-colors">${nome}</a>
            
            ${projetos.length > 0 ? `<div class="mt-4 pt-3 border-t border-gray-700 flex flex-wrap justify-center gap-3">${projetosHtml}</div>` : ''}
        </div>
    `;
};

try {
    const btnCarregar = document.getElementById('btn-carregar-certificacoes');
    if (btnCarregar) {
        btnCarregar.addEventListener('click', () => {
            carregarPlanilha('certificados.ods', 'lista-certificacoes', 'loading-certificacoes', criarHtmlCertificacao);
        });
    } else {
        console.warn("Botão de carregar certificações não encontrado no HTML.");
    }
} catch (error) {
    console.error("Ocorreu um erro inesperado no módulo de certificações:", error);
}