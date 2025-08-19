const botao = document.querySelector(".botao");
const botaoApagar = document.querySelector(".apagar")
let texto = document.querySelector("#texto")

botao.addEventListener("click", ()=>{
    texto.textContent+= "cu";
});

botaoApagar.addEventListener("click", ()=>{
    texto.innerHTML = ""
});