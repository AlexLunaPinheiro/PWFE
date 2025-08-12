let negativos = 0;

for(let i = 1; i<=10;i++){
    let numero = prompt("Digite um numero: ");
    if (numero < 0){
        negativos++;
    };
};

alert(negativos+ " dos números escritos são negativos.");