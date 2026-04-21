/*
NÍVEL 1 — Fundamentos (aquecimento)

Foco: contador + acumulador
Exercício 1
Digite 5 números e mostre a soma total

você vai treinar:
while
+=
*/

function treino01(){
    let indice = 0;
    let soma = 0;
    
    while(indice < 5){
        let numero = parseInt(prompt("Digite o númeror"));
    
        soma += numero;
    
        indice++;
    }
    
    alert("A soma dos números: " + soma);
}

/*
NÍVEL 2 — Comparação (onde você erra mais)

Foco: maior / menor
Exercício 4
Digite 5 números e mostre o maior
*/

function treino02(){
    let indice =0;
    let maiorNumero = -Infinity;

    while(indice < 5){
        let numero = parseInt(prompt("Digite um número"));
        if(numero > maiorNumero){
            maiorNumero = numero;
        }

        indice++;
    }

    alert("Número maior: " + maiorNumero);
}

/*
Exercício 3
Digite 5 idades e mostre a média

atenção:
soma dentro do loop
média fora
*/

function treino03(){
    let indice = 0;
    let media = 0;
    let soma = 0;

    while(indice < 5){
        let idade = parseInt(prompt("Digite a idade"));

    soma += idade;
    indice++;
    }
    media = soma / 5;
    alert("idade media: " + media);
}

/*

NÍVEL 2 — Comparação (onde você erra mais)

Foco: maior / menor
Exercício 4

Digite 5 números e mostre o maior

Exercício 5

Digite 5 números e mostre o menor

dica:

usa Infinity no menor
Exercício 6

Digite nome e idade de 5 pessoas
Mostre o nome da pessoa mais velha

aqui começa ficar interessante:

você precisa guardar nome + valor
NÍVEL 3 — Mistura (nível real)

Foco: juntar tudo

Exercício 7

Digite nome e temperatura de 5 pacientes
Mostre:

maior temperatura
menor temperatura
média das temperaturas
Exercício 8

Digite nome e idade de 5 pessoas
Mostre:

média das idades
quantos têm 18+
nome da pessoa mais nova
NÍVEL 4 — Validação (onde separa iniciante de júnior)

Foco: controle de fluxo (continue)

Exercício 9

Cadastro de 5 usuários

nome não pode ser vazio
idade deve ser número válido

se estiver errado → repetir o mesmo usuário

Exercício 10 (🔥 nível empresa)

Cadastro de 5 produtos

nome obrigatório
preço > 0

Mostrar:

total em estoque
produto mais caro
média de preço
*/