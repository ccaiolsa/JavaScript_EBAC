
    // validar chamada da função
    function verificadorUnicidade(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] == array[j]) {
                    return false;
                }
            }
        }
        return true;
    }

    // Validar chamada desta função também
    function verificadorNumero(array) {
        let valorMaior = array[0]; 
        let valorMenor = array[0];
        let indiceMaior = 0;
        let indiceMenor = 0;

        for (let i = 1; i < array.length; i++) {
            if (array[i] > valorMaior) {
                valorMaior = array[i];
                indiceMaior = i;
            }
            else if (array[i] < valorMenor) {
                valorMenor = array[i];
                indiceMenor = i;
            }
        }
        return {
            valorMaior,
            indiceMaior,
            valorMenor,
            indiceMenor
        };
    }


    /* let loop = true;
    let array = [];
    let tam;

    while (loop) { */
    /* let tam = parseInt(prompt("Digite o tamanho do array: ")); */
    function maior_numero(array) {
        if (!verificadorUnicidade(array)) {
            return 'Números repetidos! Digite novamente';
        }

        const resultado = verificadorNumero(array);
        return resultado;
    }

module.exports = {
    maior_numero,
    verificadorNumero,
    verificadorUnicidade
};
