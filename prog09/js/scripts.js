var obj = {
   nome:"Daniele",
   idade: 33,
   profissao: "Professora",
   estaTrabalhando: true,  
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome);

obj.nome = "Fred";

console.log(obj.nome);

console.log(obj);

obj.graduacao = true;

console.log(obj);