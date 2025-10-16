import { carregarPlanilha } from '../utils/planilha-loader.js';

/**
 * Função que cria o HTML para um card de projeto.
 * Agora ela recebe uma 'linha' (array) e interpreta os dados.
 */
const criarHtmlProjeto = (linha) => {
    const nome = linha[0];
    const link = linha[1];
    const resumo = linha[2] || '';

    return `
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg border border-purple-500 shadow-lg hover:shadow-purple-400/50 transition-shadow flex flex-col h-full" data-aos="fade-up">
            <h3 class="text-2xl font-bold text-glow-purple">${nome}</h3>
            
            ${resumo ? `<p class="text-gray-300 mt-2 flex-grow">${resumo}</p>` : ''}
            
            <a href="${link}" target="_blank" class="inline-block mt-4 text-blue-400 hover:text-blue-200 self-start">
                Ver Projeto &rarr;
            </a>
        </div>
    `;
};

// Lógica de inicialização (sem alterações)
try {
    const btnCarregar = document.getElementById('btn-carregar-projetos');
    if (btnCarregar) {
        btnCarregar.addEventListener('click', () => {
            carregarPlanilha('portfolio.ods', 'lista-projetos', 'loading-projetos', criarHtmlProjeto);
        });
    } else {
        console.warn("Botão de carregar projetos não encontrado no HTML.");
    }
} catch (error) {
    console.error("Ocorreu um erro inesperado no módulo de portfólio:", error);
}