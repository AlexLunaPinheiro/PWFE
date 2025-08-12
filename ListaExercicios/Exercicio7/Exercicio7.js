let numero;
do {
    numero = prompt("Digite um número inteiro entre 1 e 10: ");
    
    if(numero<=0 || numero > 10){
        alert("Número invalido, digite novamente");
    };
}
while(numero <= 0 || numero > 10);


for (let i = 1; i<= 10;i++){
    console.log(numero+ " X " + i + " = " + i*8);
};