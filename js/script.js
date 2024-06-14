/* Created by: Atri Sarker
* Created on: June 2024
* This file contains the js script for Assign-05-FibbonacciFrenzy
*/

// Get Elements
const termCountInput = document.getElementById("termCountInput");
const chosenOperatorInput = document.getElementById("chosenOperatorInput");
const n1Input = document.getElementById("n1Input");
const n2Input = document.getElementById("n2Input");

const outputResult = document.getElementById("outputResult");

// Input Form
const inputForm = document.getElementById("inputForm");

function getResult() {

  // Get Term Count
  let termCount = Number(termCountInput.value);

  // Get Operator
  let chosenOperator = chosenOperatorInput.value;
  let evaluateFunction;

  // Match evaluateFunction with operator
  if (chosenOperator == "addition") {
    evaluateFunction = (num1, num2) => {
      return num1 + num2;
    }
  }
  else if (chosenOperator == "subtraction") {
    evaluateFunction = (num1, num2) => {
      return num1 - num2;
    }
  }
  else if (chosenOperator == "multiplication") {
    evaluateFunction = (num1, num2) => {
      return num1 * num2;
    }
  }

  // Get Starting Numbers
  let n1 = Number(n1Input.value);
  let n2 = Number(n2Input.value);

  // Clear Output Result
  outputResult.innerHTML = "";

  // Display First 2 Numbers
  outputResult.innerHTML += n1 + "<br>";
  outputResult.innerHTML += n2 + "<br>";

  // Variables to store previous terms
  let termBehind2 = n1;
  let termBehind1 = n2;

  // Loop
  for (let currentTerm = 3; currentTerm <= termCount; currentTerm++) {

    // Get Current Term's Value
    let currentValue = evaluateFunction(termBehind2, termBehind1);

    // Display Current Term's Value
    outputResult.innerHTML += currentValue + "<br>";

    // Update Variables
    termBehind2 = termBehind1;
    termBehind1 = currentValue;

  }

  // End
  return;
}

// Connect form submit to getResult()
inputForm.onsubmit = () => {
  getResult();
  // Prevents page from refreshing
  return false;
}