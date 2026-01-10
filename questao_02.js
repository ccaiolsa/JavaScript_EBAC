// Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior
// valor e o índice do menor valor. 

function verificadorUnicidade(array) {
    for(let i = 0; i < array.length; i++){
        for(let j = i+1 ; j < array.length; j++){
            if(array[i] == array[j]){
                alert("Números repetidos! Digite novamente.");
                return false;
            }
        }
    }
    return true;
}

function verificadorNumero(array){
    let valorMaior = array[0];
    let valorMenor = array[0];
    let indiceMaior;
    let indiceMenor;

    for(let i = 1; i < array.length; i++){
        if(array[i] > valorMaior){
            valorMaior = array[i];
            indiceMaior = i;
        }
        else if(array[i] < valorMenor){
            valorMenor = array[i];
            indiceMenor = i;
        }
    }
    alert(`O maior número é ${valorMaior} e está no índice ${indiceMaior}`);
    alert(`O menor número é ${valorMenor} e está no índice ${indiceMenor}`);
}


let loop = true;
let array = [];

while (loop) {
    let tam = parseInt(prompt("Digite o tamanho do array: "));

    for(let i = 0; i < tam; i++){
        array.push(parseInt(prompt(`Digite um número único na posição ${i + 1}: `)));
            }
    if(verificadorUnicidade(array)){
        alert('Todos os números são únicos!');
        loop = false;
    }else{
        alert('Você digitou valores repetidos. Tente novamente.')
        continue;
    }
}
verificadorNumero(array);
