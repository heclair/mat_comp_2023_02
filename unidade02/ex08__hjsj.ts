//P.1.8. Escreva um programa, utilizando o bloco for, que imprima todos os múltiplos de 3 contidos entre 0 e 100, inclusive. Os valores devem ser impressos em ordem crescente. 

for (let i =0; i<=100; i++){
    if(i%3 ==0){
        console.log(`É múltiplo de 3: ${i} `)
    }
}