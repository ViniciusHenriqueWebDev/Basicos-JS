//função base para calcular a média de um array de números
function calculaMedia(numeros) {
    let soma = 0;
    //para cada número no array, some o número à soma
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    let media = soma / numeros.length;
    return media; //retorne a média
}

console.log("Média de:", calculaMedia([10, 20, 30, 40, 50])); // Saída: 30
console.log("Média de:", calculaMedia([5, 10, 15, 20])); // Saída: 12.5

function maiorNumero(numeros) {
    let maior = numeros[0];
    console.log(maior); //imprima o maior número
    for (let i = 1; i < numeros.length; i++) {
        console.log(numeros[i]); //imprima o número atual
        console.log("Comparando com:", maior); //imprima o maior número atual
        if (numeros[i] > maior) {
            console.log("Novo maior encontrado:", numeros[i]); //imprima o novo maior número
            maior = numeros[i]; //atualize o maior número
        }
    }
    return maior; //retorne o maior números
}

console.log("Maior número de:", maiorNumero([10, 20, 30, 40, 50]));

function maiorNumeroComReduce(numeros){
    return numeros.reduce((maior, numero) => {
        return numero > maior ? numero: maior; 
    }, numeros[0]); 
}

console.log("Maior número de:", maiorNumeroComReduce([10, 20, 30, 40, 50]));

function filtrarPares(numeros) {
    let pares = []; //inicialize um array vazio para armazenar os números pares
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log("Numero par encontrado:", numeros[i]); //imprima o número par encontrado
            pares.push(numeros[i]); //adicione o número par ao array de pares
        }
    }
    return pares; //retorne o array de números pares
}

console.log("Pares encontrados:", filtrarPares([1, 2, 3, 4, 5, 6])); // Saída: [2, 4, 6]

function filtrarImpares(numeros) {
    let impares = []; //inicialize um array vazio para armazenar os números pares
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 1) {
            console.log("Numero impar encontrado:", numeros[i]); //imprima o número par encontrado
            impares.push(numeros[i]); //adicione o número par ao array de pares
        }
    }
    return impares; //retorne o array de números pares
}

console.log("Impares encontrados:", filtrarImpares([1, 2, 3, 4, 5, 6])); // Saída: [1, 3, 5]

function filtrarNumeros(numeros, tipo) {
    let = resultado = [];

    for (let i = 0; i < numeros.length; i++) {
        //se o tipo for par, filtra os pares (resta 0)
        //se o tipo for impar, filtra os impares (Resta 1)
        if ((tipo === "pares" && numeros[i] % 2 === 0) ||
            (tipo === "impares" && numeros[i] % 2 === 1)) {
            console.log("Número encontrado:", numeros[i]); //imprima o número encontrado
            resultado.push(numeros[i]); //adicione o número ao array de resultado
        }
    }
    return resultado; //retorne o array de números filtrados
}

console.log("Pares encontrados:", filtrarNumeros([1, 2, 3, 4, 5, 6], "pares")); // Saída: [2, 4, 6]
console.log("Impares encontrados:", filtrarNumeros([1, 2, 3, 4, 5, 6], "impares")); // Saída: [1, 3, 5]
console.log("Numeros encontrados:", filtrarNumeros([1, 2, 3, 4, 5, 6], "todos")); // Saída: [1, 2, 3, 4, 5, 6]

function contarPalavras(palavras){
    let contador = 0; 
    //inicializa o contador de palavras
    for(let i = 0; i < palavras.length; i++){
        //para cada palavra no array, verifique se a palavra não está vazia
        //e incremente o contador se a palavra não estiver vazia
        if( palavras[i].length > 0){
            console.log("Quantidade de palavras:", palavras[i]); //imprima a palavra
            contador++; //incrementa o contador se a palavra não estiver vazia
        }
    }
    return contador; 
} 

console.log("Quantidade de palavras:", contarPalavras(["", "ola", "mundo", ""])); // Saída: 2

function contarPalavras(texto){
    if(typeof texto !== "string"){
        console.log("Texto inválido"); //imprima texto inválido se o tipo não for string
        return 0; //retorne 0 se o texto não for uma string
    }
    let palavras = texto.split(" ") //divida o texto em palavras usando o espaço como delimitador; 

    let palavrasValidadas = palavras.filter(palavra => palavra.length > 0); //filtra as palavras que não estão vazias)

    console.log("Palavras válidas:", palavrasValidadas); //imprima as palavras válidas

    return palavrasValidadas.length; //retorne o número de palavras válidas
}

console.log("Quantidade de palavras:", contarPalavras("ola mundo")); // Saída: 2