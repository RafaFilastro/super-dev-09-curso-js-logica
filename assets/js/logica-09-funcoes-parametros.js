function calcularNumeros() {
    debugger
    let numero1 = parseInt(prompt("Digite o número 1"));
    let numero2 = parseInt(prompt("Digite o número 2"));

    // somar(10, 20);
    somar(numero1, numero2);
}

function somar(n1, n2) {
    let soma = n1 + n2;
    alert("Soma: " + soma);
}

// Diferenças entre var, let e const em js
// tenet, inception, lucy

function calcularTotalProduto() {
    debugger
    let nome = "Nintedo 64";
    let quantidadeProdutos = 15;

    calcularPreco(nome, quantidadeProdutos);
}

function calcularPreco(nome, quantidade) {
    let preco = 0;
    // Abaixo de 10 o preço unitário do produto é 150
    // Abaixo de 20 o preço unitário do produto é 135
    // Se for acima ou igual a 20 o preço unitário é 100
    if (quantidade < 10) {
        preco = 150;
    } else if (quantidade < 20) {
        preco = 135;
    } else {
        preco = 100;
    }
    calcularPrecoTotalPedido(nome, quantidade, preco);
}

function calcularPrecoTotalPedido(nome, quantidade, preco) {
    let precoTotal = preco * quantidade;
    apresentarCompra(nome, quantidade, preco, precoTotal);
}

// O que fica dentro dos parenteses chamamos de parametros
// Quantos parametros temos na função apresentarCompra? 1
function apresentarCompra(nome, quantidade, precoUnitario, precoTotal) {
    alert(`Produto: ${nome}
Quantidade: ${quantidade}
Preço unitário: ${precoUnitario}
Preço total: ${precoTotal}`);
}


// Exemplo não funciona n está pronto
/*
function calcularFolhaPagamento(){
    let nome = obterNome(); // função com retorno
    let idade = obterIdade();
    let peso = obterPeso();
    let altura = obterAltura();
    let nota1 = obterNota1();
    let nota2 = obterNota2();
    let nota3 = obterNota3();

    let imc = calcularImc(peso, altura);
    let anoNascimento = calcularAnoNascimento(2026, idade);

    let media = calcularMedia(nota1, nota2, nota);
}
*/