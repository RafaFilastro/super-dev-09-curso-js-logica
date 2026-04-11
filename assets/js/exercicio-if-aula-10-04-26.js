function exercicio01(){
    let nome = prompt("Digite seu nome");
    let idade = parseInt(prompt("Digite sua idade"));

    if (idade < 18) {
        alert("Menor de idade");
    } else if (idade < 55) {
        alert("Adulto");
    } else {
        alert("Idoso");
    }
}

function exercicio02(){
    let numero = parseInt(prompt("Digite um numero maior que 10"));

    if (numero >= 10) {
        alert("Maior que DEZ");
    } else if (numero <= 9){
        alert("Número Incorreto")
    }
}

function exercicio03(){
    let numero = parseInt(prompt("Digite um número"));

    if (numero === 0 ){
        alert("Número certo");
    } else {
        alert("Número incorreto");
    }
}

function exercicio04(){
    let numero = parseInt(prompt("Digite um número"));

    if (numero === 8001 ) {
        alert("Número igual a 8001");
    } else {
        alert("Número diferente de 8001");
    }
}

function exercicio05(){
    let numero1 = parseInt(prompt("Digite o primeiro número que deseja somar"));
    let numero2 = parseInt(prompt("Digite o segundo número que deseja somar"));

    let soma = numero1 + numero2;

    if (soma < 0){
        alert("Número menor que zero: " + soma);
    } else 
        alert("Número maior que zero: " + soma);
}

function exercicio06(){
    let numero1 = parseInt(prompt("Digite o valor da primeira compra"));
    let numero2 = parseInt(prompt("Digite o valor da segunda compra"));
    let numero3 = parseInt(prompt("Digite o valor da terceira compra"));

    let soma = numero1 + numero2 + numero3;

    if (soma >= 1 ){
        alert("Sua compra está na cota liberada, pode comrpar: " + "\nR$: " + soma.toFixed(2));
    } else if (soma > 100){
        alert("Sua compra passou da cota limite favor deixar os produtos: " + "\nR$: " + soma.toFixed(2));
    } else
        alert("Valores digitados estão incorretos: " + "\nR$: " + soma.toFixed(2));
}

function exercicio07(){
    let idade = parseInt(prompt("Digite sua idade"));

    if ((idade >= 0) && (idade <= 16)){
        alert("Não pode votar");
    } else if ((idade >= 17) && (idade <= 18)){
        alert("Você pode votar se quiser");
    } else 
        alert("Voto obrigatório");
}

function exercicio08(){
    let numero = parseInt(prompt("Digite um número"));

    if (numero == 0){
        alert("Número é Zero");
    } else if (numero >= 1){
        alert("Número positivo");
    } else
        alert("Número negativo");
}

function exercicio09(){
    let numero1 = parseInt(prompt("Digite o primeiro número"));
    let numero2 = parseInt(prompt("Digite o segundo número"));

    if (numero1 > numero2){
        alert("Número: " + numero1 + " é maior que o " + numero2);
    }else
        alert("Números iguais");
} 

function exercicio10(){
    let numero = parseInt(prompt("Digite um número"));

    if ((numero >=10) && (numero <=20)){
        alert("Número está dentro da media calculada");
    } else 
        alert("Não está na media calculada");
}

function exercicio11(){
    let n1 = parseInt(prompt("Digite o primeiro número"));
    let n2 = parseInt(prompt("Digite o segundo número"));
    let n3 = parseInt(prompt("Digite o terceiro número"));
    
    if ((n1 > 0) && (n2 > 0) && (n3 > 0)){
        alert("Os números:" + "\nNúmero: " + n1 + "\nNúmero: " + n2 + "\nNúmero: " + n3 + "\n" + "São positivos");
    } else
        alert("Algum número é negativos");
}

function exercicio12(){
    let login = prompt("Digite o login");
    let senha = parseInt(prompt("Digite a senha"));

    if ((login === "admin") && (senha == "1234")) {
        alert("Login realizado com sucesso");
    } else 
        alert("Usuário ou senha incorreto");
}

function exercicio13(){
    let n1 = parseInt(prompt("Digite um número"));

    if (n1 % 2 !== 0){
        alert("Número impar");
    } else 
        alert("Número par");
}

function exercicio14(){
    let salario = parseInt(prompt("Digite o valor do seu salário"));

    if (salario <= 2000){
        alert("Abaixo do esperado");
    } else if ((salario >= 2001) && (salario <= 3999)){
        alert("Na média!");
    } else
        alert("Salário alto")

}

function exercicio15(){
    let temp = parseInt(prompt("Digite a temperatura"))

    if (temp <= 15){
        alert("Frio");
    } else if ((temp >=16) && (temp <= 25)){
        alert("Agradável");
    } else 
        alert("Quente")
}

function exercicio16(){
    let n1 = parseInt(prompt("Digite o primeiro número"));
    let n2 = parseInt(prompt("Digite o segundo número"));

    if ((n1 % n2 === 0) && (n2 % n1 === 0)){
        alert("São números multiplos");
    } else 
        alert("Não são multiplos");
}

function exercicio17(){
    let nt1 = parseFloat(prompt("Digite a primeira nota"));
    let nt2 = parseFloat(prompt("Digite a segunda nota"));
    let nt3 = parseFloat(prompt("Digite a terceira nota"));

    let soma = nt1 + nt2 + nt3
    let media = soma / 3
    
    if (media >= 7){
        alert("Aprovado");
    } else if ((media >= 5) && (media <= 6.9)){
        alert("Recuperação");
    } else 
        alert("Reprovado");

    alert("A sua média final foi de " + media.toFixed(2));
}