/*let contador = 1;
const texto = document.getElementById("Texto")
let textoFinal = ""
for(contador = 1;contador<=5;contador++){
    console.log(contador)
}

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    falarNome(){
        return "Ola meu nome é "+this.name+" e tenho "+this.age+" anos"
    }
}
const pessoa1 = new Person("Alex", 18)
textoFinal = document.createTextNode(pessoa1.falarNome())
texto.appendChild(textoFinal)
console.log(textoFinal)
*/
/*
let numero = 3;
console.log(numero);
numero =5;
console.log(numero);
const comidaFavorita = prompt("comida favorita?")
alert(comidaFavorita)

let b = confirm("Vc me ama?")
if (b == true){
    alert("eu tambem te amo")
}
else{
    alert("Vai toma no cu piranha")
}
*/

/*Exercícios:


//Exercicio 1:
let nome = prompt("Digite seu nome: ");
alert("Olá, "+nome);

//Exercício 2:
let materia = prompt("Digite sua matéria favorita: ");
alert("A matéria  "+materia+" realmente é ótima.");

//Exercício 3:
let dataDeHoje = prompt("Digite a data de hoje: ");
alert(dataDeHoje);

//Exercício 4:
let preparado = confirm("Você está preparado para o segundo semestre?");
*/


// data = new Date();
// const condicao = data.getDate() == 12
// let resultado  = (condicao)? "Hoje é dia "+data.getDate() : "o dia de hoje não é "+data.getDate();
// console.log(resultado)

// let texto = "minhas cores: "

// let cores = ['marrom','azul', 'amarelo', 'vermelho']
// cores.forEach(element => {
//     if(element == cores[cores.length-1]){
//         texto+= "e " + element + "."
//     }
//     else{
//         texto+= element + ", "
//     }
    
// });

// console.log(texto)
// texto = "minhas cores: "

// for (let i = 0; i < cores.length; i++){
//     if (i == cores.length-1){
//         texto+= "e " + cores[i]+ ".";
//     }
//     else{
//         texto+= cores[i]+ ", ";
//     }
// }

// console.log(texto)

// texto = "minhas cores: "
// let i = 0;
// while(i < cores.length){
//     if (i == cores.length-1){
//         texto+= "e " + cores[i]+ ".";
//     }
//     else{
//         texto+= cores[i]+ ", ";
//     }
//     i++
// }

// console.log(texto);

// texto = "minhas cores: "
// i = 0;

// do{
//     if (i == cores.length-1){
//         texto+= "e " + cores[i]+ ".";
//     }
//     else{
//         texto+= cores[i]+ ", ";
//     }
//     i++
// }
// while(i < cores.length)
// console.log(texto);  

const botao = document.getElementById('ok');
const textoOriginal = document.getElementById('Texto');
botao.addEventListener('click',function(){
    
    textoOriginal.innerText= "me de motivos para ir embora"
})

