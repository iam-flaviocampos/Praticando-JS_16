/*
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, "+", 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: "+". "-", "-" e "/". Crie um caso default para operações inválidas
*/

const calculadora = function (valor1, operador, valor2){
    switch(operador){
        case "+":
            console.log(valor1 + valor2)
            break
        case "-":
            console.log(valor1 - valor2)
            break
        case "*":
            console.log(valor1 * valor2)
            break
        case "/":
            console.log(valor1 / valor2)
            break
        default:
            console.log("Operador inválido!")
    }
}

calculadora(5, "+", 5)
calculadora(5, "-", 5)
calculadora(5, "*", 5)
calculadora(5, "/", 5)
calculadora(5, "%", 5)