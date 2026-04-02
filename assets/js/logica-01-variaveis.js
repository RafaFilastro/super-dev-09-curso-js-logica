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