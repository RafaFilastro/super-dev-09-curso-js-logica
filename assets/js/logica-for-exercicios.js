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
    
    let numero = parseInt(prompt("Digite um número"));

    for(let indice = 1; indice <= 10; indice = indice + 1){
        let resultado = numero * indice;
        alert(numero + " X " + indice + " = " + resultado);    
    }
}

/*
Ex. 13
Criar uma função exercicio13ContarLetrasNomes.
Criar um for para solicitar o nome de 4 pessoas.
Mostrar quantas letras cada nome possui.
*/

function exercicio13ContarLetrasNomes(){

    for(let indice = 0; indice < 4; indice = indice + 1){
        let nome = prompt("Digite seu nome");

        let nomeSemEspaco = nome.replaceAll(" ", "");

        alert("O " + nomeSemEspaco + " contem " + nomeSemEspaco.length + " caracteres");
    }
}

/*
Ex. 14
Criar uma função exercicio14MaiorNumero.
Criar um for para solicitar 5 números.
Verificar qual foi o maior número digitado.
Ao final, mostrar o maior valor.
*/

function exercicio14MaiorNumero(){
    let maiorNumero = null;

    for(let indice = 0; indice < 5; indice = indice +1){
        let numero = parseInt(prompt("Digite um numero"));
    if(maiorNumero === null || numero > maiorNumero){
        maiorNumero = numero;
    }
    }
    alert("Maior número: " + maiorNumero);
    
}

/*
Ex. 15
Criar uma função exercicio15MenorNumero.
Criar um for para solicitar 5 números.
Verificar qual foi o menor número digitado.
Ao final, mostrar o menor valor.
*/

function exercicio15MenorNumero(){
    let menorNumero = null;

    for(let indice = 0; indice < 5; indice = indice + 1){
        let numero = parseInt(prompt("Digite um número"));
     if(menorNumero === null || numero < menorNumero){
        menorNumero = numero;
    }
    }
    alert("Menor número: " + menorNumero);
}

/*
Ex. 16
Criar uma função exercicio16ContarPositivos.
Criar um for para solicitar 6 números.
Contar quantos números são maiores que zero.
Ao final, mostrar a quantidade de números positivos.
*/

function exercicio16ContarPositivos(){
    let contarNumeros = 0;

    for(let indice = 0; indice < 6; indice = indice + 1){
        let numero = parseInt(prompt("Digite um número"));
    if(numero > 0){
        contarNumeros = contarNumeros +1;
    }
    }
    alert("A quantidade de numeros maior que 0: " + contarNumeros);
}

/*
Ex. 17
Criar uma função exercicio17SomarPares.
Criar um for para solicitar 5 números.
Somar apenas os números pares.
Ao final, mostrar a soma dos pares.
*/

function exercicio17SomarPares(){
    let soma = 0;
   
    for(let indice = 0; indice < 5; indice = indice + 1){
        let numero = parseInt(prompt("Digite um número"));
    if(numero % 2 === 0){
        soma = soma + numero;
    }
    }
    alert("A soma dos números pares é: " + soma);
}

/*
Ex. 18
Criar uma função exercicio18MostrarMultiplosDeTres.
Criar um for para mostrar os múltiplos de 3 entre 1 e 30.
*/

function exercicio18MostrarMultiplosDeTres(){

    for(let indice = 1; indice <= 30; indice = indice +1){
    if(indice % 3 === 0){
        alert(indice);
    }
    }
}

/*
Ex. 19
Criar uma função exercicio19CadastrarProdutos.
Criar um for para solicitar o nome de 3 produtos.
Ao final, mostrar a mensagem "Produtos cadastrados com sucesso".
*/

function exercicio19CadastrarProdutos(){
    for(let indice = 0; indice < 3; indice = indice + 1){
        let produto = prompt("Cadastre o produto");
    }
    alert("Produtos cadastrados com sucesso.")
}

/*
Ex. 20
Criar uma função exercicio20RelatorioSimples.
Criar um for para solicitar o nome e a idade de 3 pessoas.
Ao final, mostrar:
a) quantidade de pessoas cadastradas
b) soma das idades
c) média das idades
*/

function exercicio20RelatorioSimples(){
    let pessoas = 0;
    let soma = 0;
    let media = 0;
    
    for(let indice = 0; indice < 3; indice = indice + 1){
        let nome = prompt("Digite o seu nome").trim();
        let idade = parseInt(prompt("Digite a sua idade"));
        pessoas = pessoas +1;
        soma = soma + idade;
    } 
    media = soma / 3;

    alert("Número de pessoas cadastradas: " + pessoas +
          "\nSoma das idades: " + soma +
          "\nIdade media: " + media
        );
}

/*
Ex. 21
Criar uma função exercicio21MostrarNumerosParesIntervalo.
Solicitar dois números ao usuário: início e fim.
Criar um for para mostrar apenas os números pares dentro desse intervalo.
*/

function exercicio21MostrarNumerosParesIntervalo(){
    
    for(let indice = 0; indice < 2; indice = indice +1){
        let numero = parseInt(prompt("Digite o numero"));
    if()
    }
}

/*
Ex. 22
Criar uma função exercicio22SomarNumerosIntervalo.
Solicitar dois números ao usuário: início e fim.
Criar um for para somar todos os números dentro desse intervalo.
Ao final, mostrar a soma total.

Ex. 23
Criar uma função exercicio23ContarNumerosNegativos.
Criar um for para solicitar 6 números.
Contar quantos números são negativos.
Ao final, mostrar a quantidade de números negativos.

Ex. 24
Criar uma função exercicio24CalcularMediaAlturas.
Criar um for para solicitar a altura de 5 pessoas.
Somar todas as alturas.
Ao final, calcular e mostrar a média das alturas.

Ex. 25
Criar uma função exercicio25ContarNotasAcimaSete.
Criar um for para solicitar 8 notas.
Verificar quantas notas são maiores ou iguais a 7.
Ao final, mostrar a quantidade encontrada.

Ex. 26
Criar uma função exercicio26MaiorEMenorNumero.
Criar um for para solicitar 7 números.
Verificar qual foi o maior e qual foi o menor número digitado.
Ao final, mostrar os dois valores.

Ex. 27
Criar uma função exercicio27SomarIdadesMaioresDeIdade.
Criar um for para solicitar o nome e a idade de 5 pessoas.
Somar apenas as idades das pessoas com 18 anos ou mais.
Ao final, mostrar a soma total.

Ex. 28
Criar uma função exercicio28ContarHomensEMulheres.
Criar um for para solicitar o nome e o sexo de 6 pessoas.
Considerar apenas "M" para masculino e "F" para feminino.
Ao final, mostrar:
a) quantidade de homens
b) quantidade de mulheres

Ex. 29
Criar uma função exercicio29ValidarNota.
Criar um for para solicitar 5 notas.
A nota deve estar entre 0 e 10.
Caso o usuário informe um valor inválido, pedir novamente a mesma nota.
Ao final, mostrar a média das notas válidas.

Ex. 30
Criar uma função exercicio30TabuadasCompletas.
Criar um for para mostrar as tabuadas do 1 ao 5.
Para cada número, mostrar a tabuada de 1 até 10.

Ex. 31
Criar uma função exercicio31ContarAprovadosReprovados.
Criar um for para solicitar o nome e a nota de 6 alunos.
Considerar aprovado quem tiver nota maior ou igual a 7.
Ao final, mostrar:
a) quantidade de aprovados
b) quantidade de reprovados

Ex. 32
Criar uma função exercicio32SomarValoresPositivos.
Criar um for para solicitar 8 números.
Somar apenas os números positivos.
Ao final, mostrar a soma dos valores positivos.

Ex. 33
Criar uma função exercicio33EncontrarNomeMaisLongo.
Criar um for para solicitar 5 nomes.
Verificar qual nome possui a maior quantidade de letras.
Ao final, mostrar o nome mais longo digitado.

Ex. 34
Criar uma função exercicio34CalcularFatorial.
Solicitar um número ao usuário.
Criar um for para calcular o fatorial desse número.
Ao final, mostrar o resultado do fatorial.

Ex. 35
Criar uma função exercicio35ContagemRegressivaPersonalizada.
Solicitar um número ao usuário.
Criar um for para mostrar a contagem regressiva desse número até 0.
Ao final, mostrar a mensagem "Fim da contagem".

Ex. 36
Criar uma função exercicio36PesquisarNumero.
Criar um for para solicitar 6 números e armazená-los em um vetor.
Depois, solicitar outro número para pesquisa.
Criar outro for para percorrer o vetor e verificar se o número existe.
Ao final, mostrar:
a) "Número encontrado" caso exista
b) "Número não encontrado" caso não exista

Ex. 37
Criar uma função exercicio37CadastrarNomesEVetor.
Criar um for para solicitar o nome de 5 pessoas e armazenar em um vetor.
Depois, criar outro for para mostrar todos os nomes cadastrados no console.

Ex. 38
Criar uma função exercicio38SomarElementosVetor.
Criar um for para solicitar 6 números e armazenar em um vetor.
Depois, criar outro for para somar todos os elementos do vetor.
Ao final, mostrar a soma total.

Ex. 39
Criar uma função exercicio39ContarParesNoVetor.
Criar um for para solicitar 10 números e armazenar em um vetor.
Depois, criar outro for para percorrer o vetor.
Contar quantos números pares existem.
Ao final, mostrar a quantidade de números pares.

Ex. 40
Criar uma função exercicio40RelatorioCompletoTurma.
Criar um for para solicitar os dados de 5 alunos.
Solicitar nome e 2 notas de cada aluno.
Calcular a média individual de cada aluno.
Ao final, mostrar:
a) nome e média de cada aluno
b) quantidade de alunos aprovados
c) quantidade de alunos reprovados
d) maior média da turma
e) menor média da turma

*/