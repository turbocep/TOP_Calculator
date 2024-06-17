//Functions:

function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  return operand1 / operand2;
}

function operate(operand1, operator, operand2) {
  //Create switch statement to perform correct operation.
  switch (operator) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return subtract(operand1, operand2);
    case "*":
      return multiply(operand1, operand2);
    case "/":
      return divide(operand1, operand2);
  }
}

function updateDisplay(displayValue) {
  document.querySelector(".screen p").textContent = displayValue;
}

//Variables:
let operand1 = 5;
let operator = "+";
let operand2 = 3;
let displayValue = "Hello";



