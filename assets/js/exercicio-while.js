/*
Ex. 1 Criar uma função exercicio01SolicitarDadosMedico, criar um while para solicitar os dados de 5 médicos.
Solicitar o nome do médico e seu CRM

No final de todos os médicos, apresentar a mensagem: "Obrigado por utilizar nosso sistema Hospitalar".
*/

function exercicio01SolicitarDadosMedico(){
    let indice = 0;

    while (indice < 5){
        let nome = prompt("Informe o nome do medico");
        let crm = parseInt(prompt("Digite seu crm"));
        indice = indice +1;
    }
    alert("Obrigado por utilizar nosso sistema Hospitalar!");

    
}

/* 
Ex. 2 Criar uma função exercicio02SolicitarDadosPaciente.
Criar um while para solicitar os dados de 4 pacientes.
Solicitar o nome do paciente e sua idade.
Ao final, mostrar na tela a quantidade de pacientes cadastrados.
*/

function exercicio02SolicitarDadosPaciente(){
    let indice = 0;
    
    while (indice < 4){
        let nome = prompt("Digite o seu nome");
        let idade = parseInt(prompt("Digite a sua idade"));
        indice = indice +1;
        }
    
    alert("O número de pacientes cadastrados: " + indice);
}

/*
Ex. 3 Criar uma função exercicio03SomarIdadesPacientes.
Criar um while para solicitar a idade de 6 pacientes.
Somar todas as idades informadas.
Ao final, mostrar a soma total das idades.
*/

function exercicio03SomarIdadesPacientes(){
    let indice = 0;
    let somaMaior = 0;
    
    while (indice < 6){
        let idade = parseInt(prompt("Digite sua Idade"));
        
        somaMaior = somaMaior + idade; 

        indice = indice +1;
    }
    alert("A soma das idades é: " + somaMaior);
    
}

/*
Ex. 4 Criar uma função exercicio04CalcularMediaIdades.
Criar um while para solicitar a idade de 5 pacientes.
Somar todas as idades e calcular a média.
Ao final, mostrar a média das idades dos pacientes.
*/

function exercicio04CalcularMediaIdades(){
    let indice = 0;
    let somaMaior = 0;
    let mediaMaior = 0;

    while (indice < 5){
        let idade = parseInt(prompt("Digite a sua idade"));
        somaMaior = somaMaior + idade
        mediaMaior = somaMaior / 5;
        indice = indice +1;
    }

    alert("A soma das idades é: " + somaMaior + "\nA media de idade é: " + mediaMaior);

}

/*
Ex. 5 Criar uma função exercicio05ContarMaioresIdade.
Criar um while para solicitar o nome e a idade de 7 pacientes.
Verificar quantos pacientes possuem 18 anos ou mais.
Ao final, mostrar a quantidade de pacientes maiores de idade.
*/

function exercicio05ContarMaioresIdade(){
    let indice = 0;
    let maioresIdade = 0;

    while (indice < 7){
        let nome = prompt("Digite o seu nome");
        let idade = parseInt(prompt("Digite a sua idade"));
        
        if (idade >=18){
            maioresIdade = maioresIdade +1;
        }
        indice = indice +1;
    }

    alert("A quantidade de alunos menores de idade são: " + maioresIdade);
}

/*
Ex. 6 Criar uma função exercicio06ValidarCRM.
Criar um while para solicitar o nome do médico e seu CRM de 5 médicos.
O CRM não pode estar vazio.
Caso o usuário deixe o CRM vazio, pedir novamente até informar corretamente.
Ao final, mostrar a mensagem "Cadastro dos médicos finalizado".
*/

function exercicio06ValidarCRM(){
    let indice = 0;

    while (indice < 5){
        let nome = prompt("Digite o seu nome").trim();
        let crm = prompt("Digite o seu CRM");
            while(crm === "")
            crm = prompt("CRM invalido, digite novamente");
    
    indice = indice +1;
    }
    alert("Cadastro dos médicos finalizado");
}

/*
Ex. 7 Criar uma função exercicio07SolicitarPressaoArterial.
Criar um while para solicitar a pressão arterial de 6 pacientes.
Contar quantos pacientes possuem pressão maior que 14.
Ao final, mostrar a quantidade de pacientes com pressão acima do valor informado.
*/

function exercicio07SolicitarPressaoArterial(){
    let indice = 0;
    let pressaoArterial = 0;

    while (indice < 6){
        let pressao = parseInt(prompt("Digite a sua pressão arterial"));
    if (pressao >= 14){
        pressaoArterial = pressaoArterial +1;
    }
        indice = indice +1;
    }
    alert(pressaoArterial + " Pacientes estão com a pressão acima de 14");
}

/*
Ex. 8 Criar uma função exercicio08MenuContinuarCadastro.
Criar um while para cadastrar pacientes.
Solicitar o nome do paciente.
Após cada cadastro, perguntar se o usuário deseja continuar.
Enquanto a resposta for "sim", continuar cadastrando.
Quando a resposta for diferente de "sim", encerrar.
Ao final, mostrar quantos pacientes foram cadastrados.
*/

function exercicio08MenuContinuarCadastro(){
    let continuar = "";
    let nome = 0;

    alert("Bem vindo ao sistema de cadastro de pacientes");
    
    while (continuar != "não"){
        let nomePaciente = prompt("Digite o nome do paciente");
        continuar = prompt("Deseja continuar [sim/não]").toLowerCase();
       nomePaciente = nome + nomePaciente +1;
       nome = nome +1;
    }
    alert("A quantidade de nomes cadastrados foi: " + nome);
}

/*
Ex. 9 Criar uma função exercicio09SomarFrequenciaCardiaca.
Criar um while para solicitar a frequência cardíaca de pacientes.
O cadastro deve continuar até que o usuário digite 0.
Somar todos os valores informados, exceto o 0.
Ao final, mostrar a soma total das frequências cardíacas digitadas.
*/

function exercicio09SomarFrequenciaCardiaca(){
    let frequencia = 0;
    
    while (frequencia != 0){
        let frequencia = prompt("Digite a frequência cardíaca, se desejar sair digite 0");  
    }
    alert("Se não desjar continuar digite 0");
}



/*
Ex. 10 Criar uma função exercicio10MaiorTemperatura.
Criar um while para solicitar a temperatura de 5 pacientes.
Verificar qual foi a maior temperatura informada.
Ao final, mostrar a maior temperatura digitada.
*/

function exercicio10MaiorTemperatura(){
    let temp = 0;
    let maiorTemp = null;

    while (temp < 5){
        let tempe = parseFloat(prompt("Digite a temperatura do paciente"));
    if(tempe > maiorTemp){
        maiorTemp = tempe;
    }
    temp = temp +1;
    }
    alert("A maior temperatura é: " + maiorTemp);
}

/*
Ex. 11 Criar uma função exercicio11MenorTemperatura.
Criar um while para solicitar a temperatura de 5 pacientes.
Verificar qual foi a menor temperatura informada.
Ao final, mostrar a menor temperatura digitada.
*/

function exercicio11MenorTemperatura(){
    let temp = 0;
    let menorTemp = null;

    while (temp < 5){
        let tempe = parseFloat(prompt("Digite a temperatura do paciente"));
        if((menorTemp === null) || (tempe < menorTemp)){
            menorTemp = tempe;
        }
        temp++;
    }
    alert("A menor temperatura é: " + menorTemp);
}


/*
Ex. 12 Criar uma função exercicio12ContarSintomas.
Criar um while para solicitar o nome de 5 pacientes.
Para cada paciente, perguntar se ele está com febre.
Contar quantos responderam "sim".
Ao final, mostrar a quantidade de pacientes com febre.
*/

function exercicio12ContarSintomas(){
    let contador = 0; 
    let totalFebre = 0;

    while (contador < 5){
        let nome = prompt("Digite o seu nome");
        let sintoma = prompt("Você está com febre? (sim ou não)");

        if (sintoma === "sim"){
            totalFebre++;
        }

        contador++;
    }

    alert("Número de pessoas com febre: " + totalFebre);
}


/*
Ex. 13 Criar uma função exercicio13SepararPacientesPorIdade.
Criar um while para solicitar o nome e a idade de 8 pacientes.
Contar quantos são crianças (idade menor que 12).
Contar quantos são adolescentes (idade entre 12 e 17).
Contar quantos são adultos (idade maior ou igual a 18).
Ao final, mostrar a quantidade em cada grupo.
*/

function exercicio13SepararPacientesPorIdade(){
    let contador = 0;
    let criancas = 0;
    let adolescentes = 0;
    let adultos = 0;

    while(contador < 3){
        let nome = prompt("Digite o seu nome");
        let idade = parseInt(prompt("Digite a sua idade"));
    if(idade <= 12){
        criancas++;
    }else if((idade >= 13) && (idade <= 17)){
        adolescentes++;
    }else if((idade >= 18) && (idade <= 100)){
        adultos++;
    }
        contador++;
    }
    alert("Total de crianças: " + 
        "\nCrianças: " + criancas + 
        "\nAdolescentes: " + adolescentes + 
        "\nAdultos: " + adultos);
}


/*
Ex. 14 Criar uma função exercicio14ValidarOpcaoMenu.
Criar um while para exibir um menu com as opções:
1 - Cadastrar paciente
2 - Cadastrar médico
3 - Sair
Enquanto o usuário não digitar 3, o menu deve continuar aparecendo.
Se digitar uma opção inválida, mostrar uma mensagem de erro.
Ao final, mostrar a mensagem "Sistema encerrado".
*/

function exercicio14ValidarOpcaoMenu(){
    let opcao = 0;

    while (opcao !== 3){
        opcao = parseInt(prompt(
            "Menu de opções" +
            "\n1 - Cadastrar paciente" +
            "\n2 - Cadastrar médico" +
            "\n3 - Sair"
        ));
    if(opcao === 1){
        alert("Paciente cadastrado");
    }else if(opcao === 2){
        alert("Médico castrado");
    }else if(opcao === 3){
        alert("Você escolheu SAIR");
    }else{
        alert("Opção inválida");
    }
    }
    alert("Sistema encerrado");
}


/*
Ex. 15 Criar uma função exercicio15RelatorioPacientes.
Criar um while para solicitar os dados de 5 pacientes.
Solicitar nome, idade e temperatura.
Ao final, mostrar:
a) quantidade de pacientes cadastrados
b) média das idades
c) maior temperatura informada
d) menor temperatura informada
e) quantidade de pacientes com idade maior ou igual a 60
*/

function exercicio15RelatorioPacientes(){
    let indice = 0;
    let pacientes = 0;
    let somaIdades = 0;
    let maiorTemp = 0;
    let menorTemp = Infinity;
    let idosos = 0;

    while(indice < 5){
        let nome = prompt("Digite o seu nome");
        let idade = parseInt(prompt("Digite a sua idade"));
        let temp = parseFloat(prompt("Digite a temperatura"));

        somaIdades += idade;
        if(temp > maiorTemp){
            maiorTemp = temp;
        }
        if(temp < menorTemp){
            menorTemp = temp;
        }
        if(idade >= 60){
            idosos++;
        }
        pacientes++;
        indice++;
    }

    let media = somaIdades / pacientes;

    alert("Número de pacientes cadastrados: " + pacientes +
          "\nMédia de idade cadastrada: " + media +
          "\nMaior temperatura informada: " + maiorTemp +
          "\nMenor temperatura informada: " + menorTemp +
          "\nPacientes com idade maior ou igual à 60: " + idosos);
}

/*
Ex. 16 Criar uma função exercicio16SenhaAcessoSistema.
Criar um while para solicitar uma senha de acesso ao sistema.
Enquanto a senha digitada for diferente de "hospital123", continuar pedindo.
Quando a senha estiver correta, mostrar a mensagem:
"Acesso liberado ao sistema hospitalar".
*/

function exercicio16SenhaAcessoSistema(){
    let senha = "";

    while ( senha != "hospital123"){
        senha = prompt("Digite a senha de acesso").toLowerCase();
     
    }
    alert("Acesso liberado ao sistema hospitalar");
}

/*
Ex. 17 Criar uma função exercicio17CadastroComValidacaoCompleta.
Criar um while para cadastrar 5 médicos.
Solicitar nome e CRM.
O nome não pode estar vazio.
O CRM não pode estar vazio.
Caso algum dos dois esteja inválido, pedir novamente os dados do mesmo médico.
Ao final, mostrar quantos médicos foram cadastrados corretamente.
*/

function exercicio17CadastroComValidacaoCompleta(){
    let indice = 0;
    let medicos = 0;
    while(indice < 5){
        let nome = prompt("Digite o nome");
        let crm = prompt("Digite o CRM");

        if((nome.trim() === "") || (crm.trim() === "")){
            alert("Nome e CRM são obrigatórios. Tente novamente.");
            continue;
        }

        medicos++;
        indice++;
    }

    alert("Total de médicos cadastrados: " + medicos);
}

/*
Ex. 18 Criar uma função exercicio18RelatorioFinalInternacoes.
Criar um while para solicitar o nome do paciente e a quantidade de dias internado de 6 pacientes.
Somar todos os dias de internação.
Verificar qual paciente ficou mais dias internado.
Ao final, mostrar:
a) total de dias de internação
b) média de dias internados
c) nome do paciente com maior tempo de internação
*/

function exercicio18RelatorioFinalInternacoes(){
    let indice = 0;
    let totalDias = 0;
    let maiorDias = 0;
    let nomeMaior = "";

    while(indice < 6){
        let nome = prompt("Digite o nome do paciente");
        let dias = parseInt(prompt("Digite a quantidade de dias internado"));

        totalDias += dias;

        if(dias > maiorDias){
            maiorDias = dias;
            nomeMaior = nome;
        }
        indice++;
    }
    let media = totalDias / 6;

    alert(
        "Total de dias de internação: " + totalDias +
        "\nMédia de dias internados: " + media +
        "\nPaciente com maior tempo internado: " + nomeMaior
    );
}