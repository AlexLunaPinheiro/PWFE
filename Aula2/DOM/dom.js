const botao = document.querySelector('#botao');
let textos = document.querySelector(".textos");

let i = 0;
const palavras = ["oi", "tchau", "obrigado", "eu te amo", "coraçãozinho", "amo voce", "aula boa", "dedos!!!"];

function random(num) {
    return Math.floor(Math.random() * (num + 1));
}

function bgChange(event) {
    let cor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    event.target.style.backgroundColor = cor;

    if (i < palavras.length) {
        let texto = document.createElement("h1");
        texto.textContent = palavras[i];
        textos.appendChild(texto);
        i++;
    } else {
        i = 0;
    }
}

botao.addEventListener("click", bgChange);
