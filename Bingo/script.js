const numerosSorteados = document.querySelector(".numerosSorteados");
const botao = document.getElementById("popular")

numeros =[];

botao.addEventListener('click',()=>{

    let randomico = Math.random(1,75)
    if (15<=randomico>=1){
        
    }

   
        let novoElemento = document.createElement("h1");
        novoElemento.textContent = randomico;
        numerosSorteados.append(novoElemento)
    
})



console.log(numeros)