var x = 1;

var y = 3;

console.log(x, y);

function teste() {

    var z = 0;

    console.log(z);

    console.log(x);

}

teste();


/*console.log(z);
    Como ela está em um local onde ela é um escopo local, fora daquela
    parte do código, nós não temos acesso a ela.
*/

function testando() {
    
    var z = 5;

    console.log(z);

}

testando();
//como o nome é diferente, uma function é teste e outra testando, nao ha interferencia.