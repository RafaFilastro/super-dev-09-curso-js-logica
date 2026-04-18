/* Instrução geral: para cada exercício, crie uma função com o nome indicado no enunciado.
 1. Função: contarLetrasNome
    Mostrar a quantidade de letras de um nome.
    Peça ao usuário para digitar um nome.
    Mostre na tela quantos caracteres esse nome possui.
*/

function exercicio01(){
    let nome = prompt("Digite o seu nome");
    let quantidade = nome.length;

    alert(nome + " " + "contem: " + quantidade);
}

/*
2. Função: converterParaMaiusculas
    Converter uma frase para letras maiúsculas.
    Peça ao usuário para digitar uma frase.
    Exiba a frase totalmente em letras maiúsculas.
*/

function exercicio02(){
    let frase = prompt("Digite uma frase")
    let fraseMaiuscula = frase.toUpperCase();

    alert("A frase ficou maiuscúla: " + fraseMaiuscula);
}

/*
 3. Função: converterParaMinusculas
    Converter uma frase para letras minúsculas.
    Peça ao usuário para digitar uma frase.
    Exiba a frase totalmente em letras minúsculas.
*/

function exercicio03(){
    let frase = prompt("Digite uma frase");
    let fraseMinuscula = frase.toLowerCase();

    alert ("A frase ficou minuscúla: " + fraseMinuscula);
}

/*
 4. Função: mostrarPrimeiraLetra
    Mostrar a primeira letra de uma palavra.
    Peça ao usuário para digitar uma palavra.
    Mostre apenas a primeira letra dessa palavra.
*/

function exercicio04(){
    let nome = prompt("Digite uma palavra");
       

}

/*  5. Função: mostrarUltimaLetra
    Mostrar a última letra de uma palavra.
    Peça ao usuário para digitar uma palavra.
    Mostre apenas a última letra dessa palavra.
*/