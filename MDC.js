const mdc = (num1, num2) => {

let resultado;

// Validações
 if (num1 == num2) {
        resultado = (`${num1} e ${num2} são divisíveis entre si.`);
        return resultado;
    }
    else if (num1 <= 0 || num2 <= 0) {
        resultado = "Digite números maiores que zero."
        return resultado;
    }
    else if (typeof num1 !== "number" || typeof num2 !== "number") {
        resultado = "Digite um valor válido"
        return resultado;
    }

    // Cálculo em si
    else if (num1 > num2) {
        for (let i = num1; i > 0; i--) {
            if (num1 % i == 0 && num2 % i == 0) {
                resultado = (`O máximo divisor comum entre ${num1} e ${num2} é ${i}`);
                return resultado;
                break;
            }
        }
    }
    else if (num1 < num2) {
        for (let i = num2; i > 0; i--) {
            if (num1 % i == 0 && num2 % i == 0) {
                resultado = (`O máximo divisor comum entre ${num1} e ${num2} é ${i}`);
                return resultado;
                break;
            }
        }
    }
}
module.exports = { mdc };