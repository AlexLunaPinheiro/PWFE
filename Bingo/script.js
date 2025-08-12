const cartela = document.getElementById("cartela");
const botaoGerarCartela = document.getElementById("botaoGerarCartela");
let matriz = [0][0];
let aleatorio;

botaoGerarCartela.addEventListener('click',()=>{
    for (let i = 0;i<9;i++){
        for (let j = 0; j<9;j++){
            aleatorio = Math.random(1,75);
            if(aleatorio in matriz){
                matriz[i][j] = aleatorio;
            }
        }
        
    }
    console.log(matriz)
})