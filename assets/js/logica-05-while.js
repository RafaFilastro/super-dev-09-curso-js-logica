/* Incrementar
let indice = 0; // Indice é um contador
indice = indice + 1; //indice = 0 + 1; // 1
indice = indice + 1; //indice = 0 + 1; // 2
indice = indice + 1; //indice = 0 + 1; // 3
*/

function exemplo01(){
    debugger
    // Mostrar uma mensagem 4 vezes
    let indice = 0; // indice é um contador

    while (indice < 4){
            console.log("Oie");
            indice = indice +1;
    }
}

function exemploSolicitarNumero(){
    //      MODO ANTIGO
    // let numero1 = parseInt(prompt("Digite o número: "));
    // let numero2 = parseInt(prompt("Digite o número: "));
    // let numero3 = parseInt(prompt("Digite o número: "));

    debugger
    //Solicitar 3 números
    let indice = 0;

    //while: utilizamos para repetir código
    //while(indice < 3) 
    while(indice <= 2) {
        let numero = parseInt(prompt("Digite o número: "));
        indice = indice +1;
    }

    alert("Muito Obrigado!")
}

function exemploSolicitarDadosPaciente(){
    // Solicitar os dados de 3 pacientes, nome e idade
    let indice = 0;

    while(indice < 3){
        let nome = prompt("Digite o seu nome nome").trim();
        let idade = parseInt(prompt("Digite sua idade"));

        let anoNascimeto = 2026 - idade;
        alert(nome + " Nasceu em " + anoNascimeto);

        //Incrementar
        indice = indice +1;
    }
}

function contagemRegressiva(){
    let indice = 10;

    while(indice >= 0 ){
        alert(indice);
        indice = indice -1;
    }
}

function exemploCalcularPrecojogos(){
    let indice = 0;

    let total = 0;

    //Solicitar preço de 3 jogos
    while (indice <= 2) {
        let nome = prompt("Nome do Jogo");
        let preco = parseFloat(prompt("Digite o preço"));

        //Somando: total recebe ele mesmo, ou seja, o valor inicical da variável total
        //mais o preço do jogo
        //total = 0 + preço;
        total = total + preco;

        indice = indice + 1;

    }
    alert("Total dos jogos: " + total);
}

function exemploDescobrirQuantidade(){
    // Solicitar nome, idade de 3 pessoas e apresentar a quantidade de menores de idade
    let indice = 0;
    let quantidadeMenoresIdade = 0;
    debugger

    while (indice < 3) {
        let nome = prompt("Digite o nome");
        let idade = parseInt(prompt("Digite a idade"));

        if (idade <= 17) {
            //incrementar a variável quantidadeMenoresIdade em 1
            quantidadeMenoresIdade = quantidadeMenoresIdade + 1;
        }
        indice = indice +1;
    }

    alert("Quantidade de pessoas menores de 18 anos: " + quantidadeMenoresIdade);
}

function exemploDescobrirMaiorAltura(){
    //Descobrir maior altura
    let indice = 0;
    let maiorAltura = 0;

    while(indice < 4){
        let altura = parseFloat(prompt("Digite a sua altura"));

        //formúla usada para descobrir o maior
        //if(salario > maiorSalario){
        //   maiorSalario = salario;
        //}

        if(altura > maiorAltura){
            maiorAltura = altura;
        }

        indice = indice +1;

    }

    alert("Maior altura: " + maiorAltura);
}

function exemploDescobrirMenorVitorias(){
    let indice = 0;
    let menorQuantidadeVitorias = 99999;
    debugger
    while (indice < 3) {
        let personagem = prompt("Digite o nick");
        let quantidadeVitorias = parseInt(prompt("Digite a quantidade de vitórias"));

        if(quantidadeVitorias < menorQuantidadeVitorias){
            menorQuantidadeVitorias = quantidadeVitorias;
        }

        indice = indice + 1;
    }

    alert("Menor quantidade de vitórias: " + menorQuantidadeVitorias);
}

function exemploDescobrirColaboradorComMaiorBonificacao(){
    let indice = 0;
    let maiorBonificacao = 0;
    let colaboradorComMaiorBonificacao = "";

    while (indice < 3){
        let colaborador = prompt("Digite o nome do colaborador");
        let bonificacao = parseFloat(prompt("Digite o valor da bonificação"));

        if(bonificacao > maiorBonificacao){
            maiorBonificacao = bonificacao;
            colaboradorComMaiorBonificacao = colaborador;
        }

        indice = indice + 1;

    }

    alert(colaboradorComMaiorBonificacao + " " + "tem a maior bonificação: " + "R$: " +  maiorBonificacao.toFixed());
}

function exemploDescobrirMenorNome(){
    let indice = 0;
    let menorNome = "sadkasjkldsalkdjkjlaskjdsdkjlasdsa";

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade desejada para cadastrar"));

    while (indice < quantidadeDesejada){
        let nome = prompt("Digite o nome").trim();
        
        if (nome.length < menorNome.length) {
            menorNome = nome;
        }

        indice = indice + 1;
    }

    alert("Menor nome: " + menorNome + "\nQuantidade de caracteres: " + menorNome.length);
}

function exemploRepetirEnquantoUsuarioDesejarContinuar(){

    let desejaContinuar = "";

    alert("Bem vindo ao sistema de cadastro de fila de atendimento do SUS");

    while (desejaContinuar != "não") {
        let nomePaciente = prompt("Digite o nome do paciente");
        desejaContinuar = prompt("Deseja continuar? [sim/não]").toLowerCase();
    }
}

function exemploRepetirEnquantoUsuarioDesejarContinuarComConfirme(){
    let desejaContinuar = true;
    let quantidadePacientesCadastrados = 0;

    alert("Bem vindo ao sistema de cadastro de fila de atendimento do SUS");

    while (desejaContinuar != false) {
        let nomePaciente = prompt("Digite o nome do paciente");
        quantidadePacientesCadastrados = quantidadePacientesCadastrados + 1;
        desejaContinuar = confirm("Deseja continuar?");
    }

    alert("Quantidade de pacientes que foram cadastrados: " + quantidadePacientesCadastrados)
}

function exemploValidacao(){
    let indice = 0;

    while(indice < 3){
        let nome = prompt("Digite o nome").trim();
        // O nome é valido com 2 caratcetres e no maximo 20
        while ((nome.length < 2) || (nome.length > 20)){
            nome = prompt("Nome inválido, deve conter no minimo 2 caracteres e no máximo 20 caracteres. \nDigite o nome").trim();
        }
        let idade = parseInt(prompt("Digite a idade"));
        //idade minima 16 anos e máxima 100 anos
        while((idade < 16) || (idade > 100)){
            idade = parseInt(prompt("Idade invalida, deve ser entre 16 e 100 anos."))
        }
        indice = indice +1;
    }
}