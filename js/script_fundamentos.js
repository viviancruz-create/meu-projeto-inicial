//cometário de uma linha
/*

cometário de múltiplas linhas
é possível ter várias
linha

*/

//comando de saída
console.log("olá mundo!!!")

//Declação de variável
let num = 10
var num2 = 50
const num3 = 100
console.log(num)
console.log(num2)
console.log(num3)

if (true){
    let num4 = 250
console.log(num4)

var num5 = 140

}

console.log(num5)

num = 1882

console.log(num)

num2 = 58

console.log(num2)

//num3 = 902

console.log(num3)

//concatenação

console.log('valor da variavel num3 é' + num3)
console.log("valor da variavel num3 é" + num3)
console.log(`valor da variavel num3 é $ {num3}`)

//operadores matemáticos
/*
    + soma
    - subtração
    * multiplicação
    / divisão
    % módulo - resto da divisão
*/
console.log('a soma dos números é', 12 + 8)
console.log('a subtração entre as variáveis:', num2 - num3)
console.log('a multiplicação dos números:', num2 * 5)
console.log('a divisão entre os valores: ', num3 / num2)
console.log(`o resto da divisão entre 10 e 2 é: ${10 % 2}`)

//operadores relacionais ou comparação
/*
   > maior
   < menor
   >= maior igual
   <= menor igual
   != diferente
*/

//operadores lógico
/*
  && e
  || ou
*/

//Teste Lógico (seleção)
let idade = 50

if(idade>=18){
    console.log("maior de idade")
}else{
    console.log("menor de idade")
}

idade >=18 ? console.log("maior de idade") : console.log("menor de idade")

/** 
   Renovação de CNH
   18 até 49 -> 10 anos
   50 até 69 -> 5 anos
   70 acima -> 3 anos
*/

if(idade < 18){
    console.log(`com ${idade}, não é permitido possuir CNH`)
}else if(idade < 50){
    console.log(`com ${idade}, o tempo para renovação é de 10 anos`)
}else if(idade < 70){
    console.log(`com ${idade}, o tempo para renovação é de 5 anos`)
}else{
    console.log(`com ${idade}, o tempo para renovação é de 3 anos`)
    
}
    
