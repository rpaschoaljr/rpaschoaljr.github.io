/**
 * utils/planilha-loader.js
 * Refatorado para ser mais genérico. Agora ele passa a linha inteira (array)
 * para a função geradora de HTML, deixando a responsabilidade da
 * interpretação dos dados para os módulos específicos.
 */

export const carregarPlanilha = async (caminhoArquivo, containerId, loadingId, geradorHtml) => {
    const container = document.getElementById(containerId);
    const loadingElement = document.getElementById(loadingId);

    if (!container || !loadingElement) {
        console.error(`Erro Crítico: Elementos do DOM com IDs '${containerId}' ou '${loadingId}' não foram encontrados.`);
        return;
    }

    try {
        loadingElement.innerText = 'Lendo planilha...';

        const response = await fetch(caminhoArquivo);
        if (!response.ok) throw new Error(`Falha na rede ou arquivo não encontrado (status: ${response.status})`);

        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const primeiraAba = workbook.Sheets[workbook.SheetNames[0]];
        const dadosJson = XLSX.utils.sheet_to_json(primeiraAba, { header: 1 });

        container.innerHTML = '';

        dadosJson.forEach(linha => {        
            if (linha && linha.length > 0 && linha[0]) {
                container.innerHTML += geradorHtml(linha);
            }
        });

    } catch (error) {
        console.error(`Erro detalhado ao carregar '${caminhoArquivo}':`, error);
        container.innerHTML = `<p class="text-red-500 text-center col-span-full">Oops! Não foi possível carregar os dados.</p>`;
    }
};