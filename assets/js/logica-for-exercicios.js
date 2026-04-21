/*
Ex. 1
Criar uma função exercicio01MostrarNumeros.
Criar um for para mostrar os números de 1 até 5 no console.
*/

function exercicio01MostrarNumeros(){
    for(let indice = 1; indice < 6; indice = indice +1){
            alert(indice);  
    }

}

/*
Ex. 2
Criar uma função exercicio02MostrarNomeVariasVezes.
Solicitar um nome ao usuário.
Criar um for para mostrar esse nome 3 vezes no console.
*/

function exercicio02MostrarNomeVariasVezes(){
    let nome = prompt("Digite o seu nome");
    for(let indice = 0; indice < 3; indice = indice +1){
        alert(nome);
    }
}

/*
Ex. 3
Criar uma função exercicio03ContarAteDez.
Criar um for para mostrar os números de 1 até 10 no console.
*/

function exercicio03ContarAteDez(){
    for(let indice = 1; indice < 11; indice = indice +1){
        alert(indice);
    }
}

/*
Ex. 4
Criar uma função exercicio04ContarRegressivo.
Criar um for para mostrar os números de 5 até 1 no console.
*/

function exercicio04ContarRegressivo(){
    for(let indice = 5; indice > 0; indice = indice -1){
        alert(indice);
    }
}

/*
Ex. 5
Criar uma função exercicio05SomarNumeros.
Criar um for para somar os números de 1 até 5.
Ao final, mostrar o resultado da soma.
*/

function exercicio05SomarNumeros(){
    let soma = 0;
        for(let indice = 0; indice < 5; indice = indice +1){
            let numero = parseInt(prompt("Digite o número"));
        soma = numero + soma;
        }
        alert("Valor da soma: " + soma);
}

/*
Ex. 6
Criar uma função exercicio06MostrarNumerosPares.
Criar um for para mostrar os números pares de 0 até 10 no console.
*/

function exercicio06MostrarNumerosPares(){
    for(let indice = 0; indice <= 10; indice = indice + 1){
   
     if (indice % 2 === 0){
        alert(indice);
    }
    }
}

/*
Ex. 7
Criar uma função exercicio07MostrarNumerosImpares.
Criar um for para mostrar os números ímpares de 1 até 9 no console.
*/

function exercicio07MostrarNumerosImpares(){
    for(let indice = 0; indice <= 10; indice = indice +1){
        if(indice % 2 !== 0){
            alert(indice);
        }
    }
}

/*
Ex. 8
Criar uma função exercicio08SolicitarTresNomes.
Criar um for para solicitar o nome de 3 pessoas.
Mostrar cada nome digitado no console.
*/

function exercicio08SolicitarTresNomes(){
    let nomes = "";
    for(let indice = 0; indice < 3; indice = indice +1){
        let nome = prompt("Digite o seu nome");
        nomes = nomes + nome + "\n";
    }
    alert(nomes)
    
}

/*
Ex. 9
Criar uma função exercicio09SomarTresIdades.
Criar um for para solicitar a idade de 3 pessoas.
Somar as idades informadas.
Ao final, mostrar a soma total.
*/

function exercicio09SomarTresIdades(){
    let somaTotal = 0;
    for(let indice = 0; indice < 3; indice = indice + 1){
        let idade = parseInt(prompt("Digite a sua idade"));
    somaTotal = somaTotal + idade;
    }
    alert(somaTotal);
}

/*
Ex. 10
Criar uma função exercicio10CalcularMediaSimples.
Criar um for para solicitar 4 notas.
Somar as notas.
Ao final, calcular e mostrar a média.
*/

function exercicio10CalcularMediaSimples(){
    let soma = 0;
    for(let indice = 0; indice < 4; indice = indice + 1){
        let nota = parseInt(prompt("Digite as suas notas"));
        soma = soma + nota;
    }
    soma = soma / 4;
    alert(soma);
}

/*
Ex. 11
Criar uma função exercicio11ContarMaioresDeIdade.
Criar um for para solicitar a idade de 5 pessoas.
Verificar quantas possuem 18 anos ou mais.
Ao final, mostrar a quantidade encontrada.
*/

function exercicio11ContarMaioresDeIdade(){
    let maioridade = 0;
    for(let indice = 0; indice < 5; indice = indice + 1){
        let idade = parseInt(prompt("Digite a sua idade"));
     if(idade >= 18){
        maioridade = maioridade + 1;  
    }
    }
    alert("Números de maior de idade: " + maioridade);
}

/*
Ex. 12
Criar uma função exercicio12MostrarTabuada.
Solicitar um número ao usuário.
Criar um for para mostrar a tabuada desse número de 1 até 10.
*/

function exercicio12MostrarTabuada(){
    
    for(let indice = 0; indice < 1; indice = indice + 1){
        let numero = parseInt(prompt)
    }
}

/*
Ex. 13
Criar uma função exercicio13ContarLetrasNomes.
Criar um for para solicitar o nome de 4 pessoas.
Mostrar quantas letras cada nome possui.

Ex. 14
Criar uma função exercicio14MaiorNumero.
Criar um for para solicitar 5 números.
Verificar qual foi o maior número digitado.
Ao final, mostrar o maior valor.

Ex. 15
Criar uma função exercicio15MenorNumero.
Criar um for para solicitar 5 números.
Verificar qual foi o menor número digitado.
Ao final, mostrar o menor valor.

Ex. 16
Criar uma função exercicio16ContarPositivos.
Criar um for para solicitar 6 números.
Contar quantos números são maiores que zero.
Ao final, mostrar a quantidade de números positivos.

Ex. 17
Criar uma função exercicio17SomarPares.
Criar um for para solicitar 5 números.
Somar apenas os números pares.
Ao final, mostrar a soma dos pares.

Ex. 18
Criar uma função exercicio18MostrarMultiplosDeTres.
Criar um for para mostrar os múltiplos de 3 entre 1 e 30.

Ex. 19
Criar uma função exercicio19CadastrarProdutos.
Criar um for para solicitar o nome de 3 produtos.
Ao final, mostrar a mensagem "Produtos cadastrados com sucesso".

Ex. 20
Criar uma função exercicio20RelatorioSimples.
Criar um for para solicitar o nome e a idade de 3 pessoas.
Ao final, mostrar:
a) quantidade de pessoas cadastradas
b) soma das idades
c) média das idades

*/