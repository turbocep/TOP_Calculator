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

const buttons = document.querySelectorAll(".button, .button-wide");

console.log(buttons);



//How the fuck do I easily connect each button? 
/*Hold on. I know I need a reference to each button. I need to know what each button key contains. I can do that by accessing its text content. I can then check if the pressed button's text content belongs in the valid numbers array. If that is true, then it can be entered. 
*/

//Change of plans: I'm adding an event listener to the container because of bubbling.

const containerRef = document.querySelector(".buttons");

containerRef.addEventListener("click", e => {
  //Check if button is clicked.
  const isButton = e.target.classList[0] == "button"
  || e.target.classList[0] == "button-wide";
  if (!isButton) {
    return;
  }
  //Check what key was pressed.
  const clickedKey = e.target.textContent;
  console.log(clickedKey);
})

console.log(containerRef);
