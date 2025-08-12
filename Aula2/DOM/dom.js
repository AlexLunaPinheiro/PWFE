const botao = document.querySelector('#botao');
let texto = document.querySelector('texto');

function random(num){
    return Math.floor(Math.random() * (num + 1));
};

botao.onclick = function(){
    while (true){
    let cor =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) +")";
    document.body.style.backgroundColor = cor;
    setTimeout(2000)
    }
    
}
