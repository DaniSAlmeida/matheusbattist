var idade = 20;
var possuiCarro = 1;
// var possuiiCarro= 0; zero é considerado falso.

if(idade >= 18) {
    console.log("O usuário pode fazer a carteira!")
}

if(idade <= 17) {
    console.log("O usuário não pode fazer a carteira!")
}

if(possuiCarro) {
    console.log(" O usuário já pode andar de carro!")
}

var nome = "Daniele";

if(nome == "Daniele") {
    console.log("Oseu nome é Daniele")
}

if(nome != "Daniele") {
    console.log(" O nome não é Daniele")
}

if(20 > 10) {  // se fosse um 100 no lugar do 10 , nao seria executado , pq seria falso
    console.log("Passou!")
}

if(10 < 20) {  //se fosse um 100 no lugar do 10 , nao seria executado , pq seria falso 
    console.log("Passou2!")
}