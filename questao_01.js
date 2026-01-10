// Calcule o MDC (máximo divisor comum) entre dois números.

let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));

if(num1 > num2){
    for(let i = num1; i > 0; i--){
        if(num1 % i == 0 && num2 % i == 0){
            console.log(`O máximo divisor comum entre ${num1} e ${num2} é ${i}`);
            break;
    }
}}
else if(num1 < num2){
    for(let i = num2; i > 0; i--){
        if(num1 % i == 0 && num2 % i == 0){
            console.log(`O máximo divisor comum entre ${num1} e ${num2} é ${i}`);
            break;
    }
}}
else if( num1 == num2){
    console.log(`${num1} e ${num2} são divisíveis entre si.`);
} 
else if(num1 <= 0 || num2 <= 0){
    console.log("Digite números maiores que zero.");
}
else{
    console.log("Digite um valor válido");
}