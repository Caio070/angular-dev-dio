//Exemplo de código.
/*const numero = 0;

const numeroPar = (numero % 2) === 0;

if(numero === 0){
    console.log('O número é invalido');
} else if (numeroPar){
    console.log('Par');
} else{
    console.log('Impar');
}*/

// Faça um programa para calcular o valor de uma viagem.
//Você terá 5 variávei. Sendo elas;
// 1 - Preço do etanol.
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;

const gasolina = 6.66;
const etanol = 5.79;
const distancia = 100;
const kmPorLitro = 10;
const tipoCombustivel = 'Gasolina';

if(tipoCombustivel === 'Etanol'){
    const valorGasto = (distancia/kmPorLitro) * etanol;
    console.log(valorGasto);
} else {
    const valorGasto = (distancia/kmPorLitro) * gasolina;
    console.log(valorGasto);
}
