//função padrão
function dedoDoThanos(nome){
    return "Bem vindo "+nome+" seu dedinho está em produção";
};

console.log(dedoDoThanos("Alex"));

//arrow function
const somar = (n1, n2)=>{
    return n1 + n2;
};
console.log(somar(1,2));

//Outra forma de utilização
const subtrair = (n1,n2) => n1-n2;
console.log(subtrair);


//anônima
const soma = function(n1,n2){
    return n1 + n2;
};
console.log(soma(1,2));