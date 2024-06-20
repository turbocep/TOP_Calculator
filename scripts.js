//Functions:

function add(operand1, operand2) {
  return +operand1 + +operand2;
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
    case "X":
      return multiply(operand1, operand2);
    case "/":
      return divide(operand1, operand2);
  }
}

function updateDisplay(displayValue) {
  document.querySelector(".screen p").textContent = displayValue;
}

function clearVars() {
  operand1 = "";
  operator = "";
  operand2 = "";
  displayValue = "";
}



//Variables:
let operand1 = 5;
let operator = "+";
let operand2 = 3;
let displayValue = "Hello";

const buttons = document.querySelectorAll(".button, .button-wide");




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
  //Check what key is pressed.
  const clickedKey = e.target.textContent;
  const entryKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  if (clickedKey == "C") {
    clearVars();
    updateDisplay("");
  }
  //Intuitively, it seems simpler and less-repetitive to check what variables are empty before checking what they contain. I'll fix later.
  //TODO(turbocep): Finish all possible entries for minus sign.
  else if (clickedKey == "+/-") {
    if (!operand1) {
      operand1 += "-";
      updateDisplay(operand1);
    } else if (operator) {
      operand2 += "-";
      updateDisplay(operand2);
    } else if (operand1 == "-") {
      operand1 = "";
      updateDisplay(operand1);
    } else if (operand2 == "-") {
      operand2 = "";
      updateDisplay(operand2);
    }
  }
  //Check if number key is pressed.
  //I know this nesting is nowhere near optimal. I'll try to improve it later.
  else if (entryKeys.includes(clickedKey)) {
    if (!operand2 && !operator) {
      operand1 += clickedKey;
      updateDisplay(operand1);
    } else {
      operand2 += clickedKey;
      updateDisplay(operand2);
    }
  } 
  //Check if an operator key is pressed.
  else if (["/", "X", "-", "+"].includes(clickedKey)) {
    if (operand1 && !operand2) {
      operator = clickedKey;
      //Add highlight feature to operator buttons. 
    } else if (operand2) {
      operator = clickedKey;
      console.log(`${operand1} ${operator} ${operand2}`)
      const result = operate(operand1, operator, operand2);
      updateDisplay(result);
      operand1 = result;
      operand2 = "";
    }
    
  } else if (["="].includes(clickedKey)) {
    //Could add default values to evaluation functions and just call it once. 
    if (operand1 && operand2) {
      const result = operate(operand1, operator, operand2);
      updateDisplay(result);
      operand1 = result;
      operand2 = "";
    }
  }

})

