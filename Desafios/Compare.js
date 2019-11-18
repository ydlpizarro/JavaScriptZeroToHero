const firstNumber = prompt("Enter first number : ");
const secondNumber = prompt("Enter second number : ");
let resultado;
(firstNumber>=secondNumber) ? resultado='is greather than':resultado='is less than';
console.log(`${firstNumber} ${resultado} ${secondNumber}`);