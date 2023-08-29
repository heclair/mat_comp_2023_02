//P.1.10. Repita o exercício P.1.9 utilizando um bloco do while. 

let multiplo: number = 100;
do{
    if (multiplo%3==0){
        console.log(`é múltiplo de 3: ${multiplo}`);
    }
    multiplo=multiplo-1;
}while(multiplo >= 0);