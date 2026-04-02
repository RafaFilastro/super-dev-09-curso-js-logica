function exemploMensagem(){
    alert("Hello world minha primeira mensagem Rafael")
}
function exemploString(){
    //Criando a variável
    let nome = "Elias";
    let sobrenome = "Otto com Dois T";

    // Alterar o valor da variável sobrenome
    sobrenome = "Otto";

    // Apresentando a variável
    alert(nome)
    alert(sobrenome);
}

function exemploStringConcatenacao(){
    let nomeProduto = "Sabão em pó";
    let marcaProduto = "Omo";

    //Concatenação: juntar um string(texto) com algum outra coisa 

    //"Sabão em pó" + " " => "Sabão em pó "
    //"Sabão em pó " + "Omo" => "Sabão em pó Omo"
    let texto = nomeProduto + " " + marcaProduto;

    alert(texto);
}

function exemploNumeroInteriro(){
    let produto = "PC Gamer da Xuxa";
    let quantidadePcs = 16;

    let quantidadeMemoriaPorPc = 2;

    let totalGb = quantidadePcs * quantidadeMemoriaPorPc;
    // "\n" Serve para quebrar a linha
    alert(
        "Produto: " + produto +
        "\nQuantidade de psc: " + quantidadePcs +
        "\nMemória RAM por PC: " + quantidadeMemoriaPorPc + "GB"+
        "\nTotal de Gb dos Pcs: " + totalGb + "GB");
}

// Tipos de Variáveis
// STRING => Texto, posso até armazenar números porem não serve para calcular.
// INT => Números inteiros => 2
// FLOAT => Números reais => 2.30
// Boolean => Lógico => True ou False (verdadeiro ou falso)

function exemploFloat(){
    let endereco = "Rua XV Novembro"; // String
    let largura = 12.20; 
    let comprimento = 45.50;
    let metroQuadrado = largura * comprimento;

    alert("M² do terreno: " + metroQuadrado);
}

function exemploBoolean(){
    //Quando entra na empresa
    let tenhoFeriasVencidas = false;

    //Completei 1 ano de empresa
    tenhoFeriasVencidas = true;

    alert("Férias vencidas? " + tenhoFeriasVencidas);
}

function calcularSalario(){
    let colaborador = "Judity Silva";
    let email = "judity.gamer@gg.com";
    let valorHora = 150.60; //por hora de streaming
    let horasPorMes = 50;
    let beneficioDonate = 3500.98;

    //Calcular o salário bruto
    let salarioBruto = valorHora * horasPorMes

    //Calulcar o salárioLiquido
    let salarioLiquido = salarioBruto + beneficioDonate;
    
    alert(
        "Colaborador: " + colaborador + "\n" +
        "Email: " + email + "\n" +
        "Valor por hora: R$ " + valorHora.toFixed(2) + "\n" +
        "Horas por mês: " + horasPorMes + "h\n" +
        "Salário bruto: R$ " +salarioBruto.toFixed(2) + "\n" +
        "Beneficio Donate: R$ " + beneficioDonate.toFixed(2) + "\n" +
        "Salário líquido: R$ " + salarioLiquido.toFixed(2)
    );
}

function calcularTempoMes() {
    let segundosPorMinuto = 60;
    let minutosPorHora = 60;
    let horasPorDia = 24;

    let segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;

    alert(
        "Segundos por minuto: " + segundosPorMinuto +
        "\nMinutos por hora: " + minutosPorHora +
        "\nHoras por dia: " + horasPorDia +
        "\nSegundos por dia: " + segundosPorDia
    );
}