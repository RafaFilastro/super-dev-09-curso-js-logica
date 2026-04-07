function exemplo01(){
    //prompt permite interação com o usuario, ele poderá digitar algo

    // string
    let nome = prompt("Digite o seu nome");

    let sobrenome = prompt("Digite o seu sobrenome");

    // Gerar o nome completo
    // Concatenando nome, espaço e sobrenome
    let nomeCompleto = nome + " " + sobrenome;

    alert("Nome completo: " + nomeCompleto);
}

function conversaoStringParaInt(){
    //Tudo que o usuáriio digitar vem como string(texto)

    // Converter um string para int
    // "8" => 8
    let numero1 = parseInt("8");
    let numero2 = parseInt("12");
    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}

function conversaoStringParaIntAlt(){
    // Tudo que o usuário digitar vem como string(texto)
    
    // Converter uma string para int
    //"8" => 8
    let numero1 = parseInt(prompt("Digite o número 1"));
    let numero2 = parseInt(prompt("Digite o número 2"));
    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}

function conversaoStringParaFloat(){
    // Converter de string para float

    let quantidadeHoras = parseInt(prompt("Digite a quantidade de horas trabalhadas"));
    let valorHora = parseFloat(prompt("Digite o valor hora"));

    let salarioBruto = quantidadeHoras * valorHora;
    alert(
        "Quantidade de horas: " + quantidadeHoras + "\n" +
        "Valor da hora: " + valorHora + "\n" +
        "Salário bruto: " + salarioBruto
    );
}

function exemplo02(){
    let nome = prompt("Digite o nome do atleta");

    //Solicitar a altura em metros, para isso utilizaremos um float
    let altura = parseFloat(prompt("Digite a altura"));
    let peso = parseFloat(prompt("Digite o peso"));
    let imc = peso / (altura * altura);
    alert("Atleta " + nome + " Tem IMC " + imc);
}

function exemplo03(){
    let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento"));
    // let anoAtual = 2026;
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;
    alert("Idade: " + idade);
}

function exemplo04(){
    let modelo = prompt("Informe o modelo do seu carro");
    let ano = parseInt(prompt("Informe o ano do seu Carro"));
    let velocidadeMaxima = parseInt(prompt("Informe a velocidade do seu carro"));
    let tempoViagemHoras = parseInt(prompt("Informe as horas da viagem"));
    let distancia = velocidadeMaxima * tempoViagemHoras;

    alert("Carro: " + modelo + 
        "\nAno: " + ano +
        "\nDistância estimada: " + distancia + " km");
}