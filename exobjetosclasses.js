/*
        1 - Crie uma classe para representar carros.
        Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilometro rodado.
        Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/ 

/*class Carros {

    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const opala = new Carros('Chevrolet', 'Preto', 1/6);
console.log(opala.calcularGastoDePercurso(70,5));
const palio = new Carros('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso(70,5));
*/

/* 
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = Peso / (Altura * ALtura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça a José para dizer o valor de seu IMC;
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return  this.peso / (this.altura * this.altura);
    }
    classificarImc(){
        const imc = this.calcularImc();
        if(imc < 18.5){
            return ('Abaixo do peso');
        } else if(imc >=18.5 && imc <=25){
            return ('Peso normal');
        } else if(imc >=25 && imc <=30){
            return ('Acima do peso');
        } else if(imc >=30 && imc <=40){
            return ('Obeso');
        } else{
            return ('Obessidade Grave');
        }
    }
}

const Roberto = new Pessoa('Roberto', 65, 1.75);
console.log(Roberto);
console.log(Roberto.classificarImc(65, 1.75));
const Fred = new Pessoa('Fred', 89, 1.75);
console.log(Fred);
console.log(Fred.classificarImc(89, 1.75));