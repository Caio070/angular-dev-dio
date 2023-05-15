/*
        3) Elabore um algoritimo que calcule o que deve ser pago por um prooduto, considereando o preço normal de etiqueta e a escolha da condição de pagamento.
        Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efeturar o calculo adequado.
        
        Código Condição de pagamento:
        - À vista Débito, recebe 10% de desconto;
        - À vista no Dinheiro ou PIX, recebe 15% de desconto;- Em duas vezes, preço normal de etiqueta sem juros;
        - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const valor = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    console.log(valor - (valor * 0.1));
} else if(formaDePagamento === 2){
    console.log(valor - (valor * 0.15));
} else if(formaDePagamento === 3){
    console.log(valor);
} else{
    console.log(valor + (valor * 0.1));
}