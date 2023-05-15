// 1) Crie um programa que dado um número imprima sua tabuada.

/*const numero = 5;

for (let i = 1; i <= 10; i++){
    console.log(i * numero);
}*/

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const numeros = [7, 12, 24];

for (let i = 0; i < numeros.length; i++){
    const numero = numeros[i];
    if (numero % 2 === 0){
        console.log(numero);
    }
}