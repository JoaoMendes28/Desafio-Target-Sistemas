//2)
function verificaFibonacci(numero) {

    let fib1 = 0;
    let fib2 = 1;

    if (numero === 0 || numero === 1) {
        return `${numero} pertence à sequência de Fibonacci.`;
    }

    while (fib2 <= numero) {
        let temp = fib2;
        fib2 = fib1 + fib2;
        fib1 = temp;

        if (fib2 === numero) {
            return `${numero} pertence à sequência de Fibonacci.`;
        }
    }
    return `${numero} não pertence à sequência de Fibonacci.`;
}

const numeroInformado = 8;
console.log(verificaFibonacci(numeroInformado));


//5
function inverterString(string) {
    return string.split('').reverse().join('');
}

const stringOriginal = "Hello, world!";
const stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida); 

