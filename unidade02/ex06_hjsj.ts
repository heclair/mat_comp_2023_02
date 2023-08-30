//2.6. Utilizando linguagem de programação defina:

//a) Uma enumeração para os meses do ano.

//explicação, no caso do JSON abaixo a função enum do Ts insere o número correspondente do primeiro termo evitando o índice zero do array

enum MesesDoAno {
    janeiro=1,
    fevereiro,
    marco,
    abril,
    maio,
    junho,
    julho,
    agosto,
    setembro,
    outubro,
    novembro,
    dezembro,
}

console.log("Mês do Ano", MesesDoAno.novembro);  

//b) Uma enumeração para os dias da semana.
enum diasDaSemana_hjsh {
    domingo=1,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado,
}

console.log("Dia da Semana", diasDaSemana_hjsh.quarta);  


//c) Uma função recursiva para o cálculo do fatorial de um número. 

function fatorial_hjsh(numero_hjsh: number): number {
    if (numero_hjsh === 0 || numero_hjsh === 1) {
        return 1;
    } else {
        return numero_hjsh * fatorial_hjsh(numero_hjsh - 1);
    }
}

const varFat = 5;
const resultado = fatorial_hjsh(varFat);
console.log(`O resultado de ${varFat} fatorial é ${resultado}`);


//d) Uma definição que corresponda a definição do tipo gênero-diferença para um uma pessoa que estude em uma faculdade. Utilize uma linguagem que dê suporte a herança. 

class Estudante_hjsj{
    graduacao_hjsj(){
        console.log("Bacharel em Engenharia")
    }
}

class Pos_grad_hjsj extends Estudante_hjsj{
    pos(){
        super.graduacao_hjsj();
        console.log("pós graduado")
    }
}

const heranca = new Pos_grad_hjsj();
heranca.graduacao_hjsj();
heranca.pos();