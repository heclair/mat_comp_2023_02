//P.1.9. Repita o exercício P.1.8 mas utilizando um bloco while, imprimindo os números em ordem decrescente.

let multiplo3: number = 100;
while(multiplo3 >= 0){
    if (multiplo3%3==0){
        console.log(`é múltiplo de 3: ${multiplo3}`);
    }
    multiplo3=multiplo3-1;
} 