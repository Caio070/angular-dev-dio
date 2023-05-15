/* Faça um programa para calcular o valor de uma viagem */

const combustivel = 5.79;
const kmPorLitro = 10;
const distancia = 100;

const resultado = (distancia / kmPorLitro) * combustivel;

console.log(
  resultado.toFixed(2)
); /* toFixed organiza as casas decimais depois da virgula. */
