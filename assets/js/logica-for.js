function exercicioexplicacaoFOR(){
    /*
    //Declaração de variável
    let indice = 0;
    //Condição
    while (indice < 4){
    alert(indice);
    //incrementar
    indice = indice + 1;

    }
    */
// for (declaração de cariável; condição; incrementar){}
for (let indice = 0; indice < 4; indice = indice + 1){
    alert(indice)
}
    //todo while pode virar um for? sim e não Depende, é possivel converter, quando tem repetições definidas repetirá 10 vezes por exemplo.
    //todo for pode virar um while? sim pode virar
    //for => 0..3 => while 
}

function exemploForJogos(){
    let total = 0;
    
    for (let indice = 0; indice < 3; indice = indice +1){
        let nome = prompt("Digite o nome do jogo");

        let preco = parseFloat(prompt("Digite o preço"));

        //variavel recebe ela mesma, mais oque deseja somar.
        total = total + preco;
    }

    alert("Total: " + total);
}

function exemploForProdutos(){
    // Padaria, utensilios, carnes

    let quantidadePadaria = 0, quantidadeUtensilios = 0, quantidadeCarnes = 0;

    for(let indice = 0; indice < 4; indice = indice +1){
        let produto = prompt("Digite o nome do produto");
        let categoria = prompt("Digite a categoria do produto: [Carnes, Padaria, Utensilios]:").trim();
        
        //Validar que o usuário digitou uma categoria válida
        while (categoria.toLowerCase() !== "carnes" &&
               categoria.toLowerCase() !== "padaria" &&
               categoria.toLowerCase() !== "utensilios"){
                    categoria = prompt(
                        "categoria inválida.\nDigite a categoria do produto [Carnes, Padaria, Utensilios]:").trim();
               }

        let preco = parseFloat(prompt("Digite o preço do produto"));
        
        if(categoria.toLowerCase() === "padaria"){
            quantidadePadaria = quantidadePadaria + 1;
        }
        if(categoria.toLowerCase() === "utensilios"){
            quantidadeUtensilios = quantidadeUtensilios + 1;
        }
        if(categoria.toLowerCase() === "carnes"){
            quantidadeCarnes = quantidadeCarnes +1 ;
        }
    }

    alert("Quantidade Padaria: " + quantidadePadaria +
          "\nQuantidade Utensilios: " + quantidadeUtensilios +
          "\nQuantidade Carnes: " + quantidadeCarnes
    );
}

function exemploContagemRegressiva(){
    // for (Variável; condição; incremento/decremento)
    for(let indice = 10; indice > 0; indice = indice -1){
        alert(indice);
    }
}

function exemploDescobrirQuantidadePar(){
    let quantidadePares = 0;

    let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números a validar"));

    for(let indice = 0; indice < quantidadeNumeros; indice = indice + 1){
        let numero = parseInt(prompt("Digite um número"));
    }
    if (numero % 2 === 0){
        quantidadePares = quantidadePares + 1;
    }
    //descobrir impar (numero % 2 !== 0)

    alert("Quantidade de números pares: " + quantidadePares);
}