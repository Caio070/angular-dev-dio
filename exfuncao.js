/*
        3) Elabore um algoritimo que calcule o que deve ser pago por um prooduto, considereando o preço normal de etiqueta e a escolha da condição de pagamento.
        Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efeturar o calculo adequado.
        
        Código Condição de pagamento:
        1 - À vista Débito, recebe 10% de desconto;
        2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
        3 - Em duas vezes, preço normal de etiqueta sem juros;
        4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor *(juros / 100)));
}

const preco = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    console.log(aplicarDesconto(preco, 10));
} else if(formaDePagamento === 2){
    console.log(aplicarDesconto(preco, 15));
} else if(formaDePagamento === 3){
    console.log(preco);
} else{
    console.log(aplicarJuros(preco, 10));
}