//P.1.7. Escreva um programa que exiba um menu contendo 3 alternativas: “1. Dúvidas”, “2.Reclamações”, “3.Sair”. O usuário deve digitar a palavra correspondente à opção do menu e, dependendo da opção, deve ser fornecida uma orientação ao usuário. Exemplo: Caso o usuário digite “Dúvidas” exiba: “Suas dúvidas devem ser encaminhadas para o email duvidas@email.com”Esse programa deve ser escrito em TypeScript e deve fazer uso do bloco switch. 

import prompt_sync from "prompt-sync";

const prompt = prompt_sync();
let opcao:string;

opcao = prompt("Digite sua opção: 1. Duvidas. 2. Reclamacao. 3. Sair: ");

switch (opcao) {
    case "Duvidas":
      console.log("Suas dúvidas devem ser encaminhadas para o email duvidas@email.com");
      break;
    case "Reclamacao":
      console.log("Envie sua reclamação para o e-mail reclamacao@email.com");
      break;
    case "Sair":
      console.log("Tchau, se precisar de alguma informação basta voltar ao chat");
  }