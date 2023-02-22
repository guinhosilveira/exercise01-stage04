/*

    [ ]  A soma dos dois números;
    [ ]  A subtração dos dois números;
    [ ]  A multiplicação dos dois números;
    [ ]  A divisão dos dois números;
    [ ]  O resto da divisão dos dois números;

    Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

    [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
    [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
 
*/

const numberOne = Number(prompt('Informe o primeiro número: '));
const numberTwo = Number(prompt('Informe o segundo número: '));

let sum = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mul = numberOne * numberTwo;
let div = (numberOne / numberTwo).toFixed(2);
let res = (numberOne % numberTwo).toFixed(2);

let conditionOne = sum % 2 == 0;
let conditionTwo = numberOne == numberTwo;

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A multiplicação dos dois números é: ${mul}`);
alert(`A divisão dos dois números é: ${div}`);
alert(`O resto da divisão dos dois números é: ${res}`);

if (conditionOne) {
    alert(`A soma dos dois números é par: ${sum}`);
} else {
    alert(`A soma dos dois números é ímpar: ${sum}`);
}


if (conditionTwo) {
    alert(`Os números inseridos são iguais`);
} else {
    alert(`Os números inseridos são diferentes`);
} 