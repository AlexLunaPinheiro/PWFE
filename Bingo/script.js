//Inicialização dos elementos html que serão trabalhados
const cartela = document.getElementById('cartelaBingo'); 
const sortearBtn = document.getElementById('sortearBtn');
const numeroSorteadoDisplay = document.getElementById('numeroSorteado');

//Preenche uma lista com todos os numeros disponíveis no bingo clássico
let numerosDisponiveis = [];
const totalNumeros = 75;

function inicializar() {
    numerosDisponiveis = [];
    for (let i = 1; i <= totalNumeros; i++) {
        numerosDisponiveis.push(i);
    };

    // Sorteia os números aleatóriamente
    for (let i = numerosDisponiveis.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numerosDisponiveis[i], numerosDisponiveis[j]] = [numerosDisponiveis[j], numerosDisponiveis[i]];
    };

    // Popula a cartela com os quadradinhos
    cartela.innerHTML = ''; // Limpa a cartela anterior se tiver anterior
    for (let i = 1; i <= totalNumeros; i++) {
        const quadrado = document.createElement('div');
        quadrado.classList.add('numero-quadrado'); 
        quadrado.id = `quadrado-${i}`; 
        cartela.appendChild(quadrado); 
    };
    
    // Reseta o display e o botão
    numeroSorteadoDisplay.textContent = '--';
    sortearBtn.disabled = false;
    sortearBtn.textContent = 'SORTEAR';
    sortearBtn.onclick = sortear;
};

// Retorna a letra correspondente ao número do bingo
function obterLetra(numero) {
    if (numero >= 1 && numero <= 15) return 'B';
    if (numero >= 16 && numero <= 30) return 'I';
    if (numero >= 31 && numero <= 45) return 'N';
    if (numero >= 46 && numero <= 60) return 'G';
    if (numero >= 61 && numero <= 75) return 'O';
};

// Função para sortear um número
function sortear() {

    //Condição caso já tenham sido preenchidos todos os números
    if (numerosDisponiveis.length === 0) {
        numeroSorteadoDisplay.textContent = 'FIM!';
        sortearBtn.textContent = 'REINICIAR';
        sortearBtn.onclick = inicializar;
        return;
    };

    const numeroSorteado = numerosDisponiveis.pop();
    const letra = obterLetra(numeroSorteado);
    
    // Atualiza o display principal
    numeroSorteadoDisplay.textContent = `${letra}${numeroSorteado}`;

    // Insere o número na cartela
    const quadradoSorteado = document.getElementById(`quadrado-${numeroSorteado}`); 
    if (quadradoSorteado) {
        quadradoSorteado.classList.add('sorteado');
        quadradoSorteado.textContent = numeroSorteado;
    };
};

//Chama a função para inicializar o script
inicializar();
