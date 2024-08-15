"use strict";
// Exercício: Ordenando Preços com Bubble Sort
// Você recebeu uma lista de preços dos principais produtos de uma loja de cosméticos:
// [2.99, 10.50, 1.25, 4.80, 3.60]
// A gerente solicitou ao departamento de TI que organizasse esses arrayPrecos do menor para o maior, 
// utilizando o algoritmo de ordenação Bubble Sort. Além disso, ela pediu que fosse calculada a 
// média dos preços dos produtos listados.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Versão 1 - Os valores do Array já foram armazenados na variável.
let listaPrecos = [2.99, 10.50, 1.25, 4.80, 3.60];
for (let i = 0; i < listaPrecos.length - 1; i++) {
    for (let j = 0; j < listaPrecos.length - 1 - i; j++) {
        if (listaPrecos[j] > listaPrecos[j + 1]) {
            let auxiliar = listaPrecos[j];
            listaPrecos[j] = listaPrecos[j + 1];
            listaPrecos[j + 1] = auxiliar;
        }
    }
}
let soma = 0;
for (let i = 0; i < listaPrecos.length; i++) {
    soma += listaPrecos[i];
}
let media = soma / listaPrecos.length;
console.log("A média da lista de preços da loja de comésticos é:", media);
// Bônus - Exiba o maior e o menor número do Array.
console.log("-------------------------");
console.log("Array:", listaPrecos);
let menor = listaPrecos[0];
let maior = listaPrecos[listaPrecos.length - 1];
console.log("O menor valor do array acima é:", menor);
console.log("O maior valor do array acima é:", maior);
// Versão 2 - Solicite aos usuários a lista de preços através de linhas de comando.
console.log("-------------------------");
const prompts_1 = require("@inquirer/prompts");
(() => __awaiter(void 0, void 0, void 0, function* () {
    let arrayPrecos = [];
    for (let i = 0; i < 6; i++) {
        const valor = parseFloat(yield (0, prompts_1.input)({ message: "Por favor, digite um número:" }));
        arrayPrecos.push(valor);
    }
    for (let i = 0; i < arrayPrecos.length - 1; i++) {
        for (let j = 0; j < arrayPrecos.length - 1 - i; j++) {
            if (arrayPrecos[j] > arrayPrecos[j + 1]) {
                let auxiliar = arrayPrecos[j];
                arrayPrecos[j] = arrayPrecos[j + 1];
                arrayPrecos[j + 1] = auxiliar;
            }
        }
    }
    let soma = 0;
    for (let i = 0; i < arrayPrecos.length; i++) {
        soma += arrayPrecos[i];
    }
    let media = soma / arrayPrecos.length;
    console.log("A média da lista de preços informada pelo usuário é:", media);
    // Bônus - Solicite aos usuários números pares através de linhas de comando e faça a soma entre eles.
    console.log("-------------------------");
    let valoresPares = [];
    let somaPares = 0;
    for (let i = 0; i < arrayPrecos.length; i++) {
        if (arrayPrecos[i] % 2 == 0) {
            valoresPares.push(arrayPrecos[i]);
            somaPares += arrayPrecos[i];
        }
    }
    console.log("Os valores pares são:", valoresPares);
    console.log("A soma dos pares é:", somaPares);
}))();
