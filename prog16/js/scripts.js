var idade = 16;
var nome = "João";

if(nome == "João" || idade >=14) {
    console.log("Pode participar da aula de esgrima");
} else {
    console.log("Não pode participar da aula de esgrima");
}

/*if(nome == "Pedro" && 15 > 20 || 10 == 10) {
    console.log("testando");
}*/

if((nome == "Pedro" || 15 > 20) && 10 == 10) {
    console.log("testando");
} else {
    console.log("não entrou");
}