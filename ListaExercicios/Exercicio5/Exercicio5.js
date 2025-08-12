let numero;
do {
    numero = prompt("Digite um número inteiro maior que zero: ");
    
    if(numero<=0){
        alert("Número invalido, digite novamente")
    };
}while(numero <= 0);

for (let i = 1; i<=numero; i++){
    console.log(i);
};