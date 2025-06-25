const display = document.getElementById("display");
const buttons = document.getElementsByTagName("button");

let currentInput = "0";
let previousInput = "";
let operator = "";
let justEvaluated = false;
const acceptedKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "+",
  "-",
  "/",
  "*",
  "%",
  "Enter",
  "Backspace",
];

document.addEventListener("keydown", function (event) {
  let currentPressedKey = event.key;
  if (acceptedKeys.includes(currentPressedKey)) {
    if (currentPressedKey === "Enter") {
      currentPressedKey = "=";
    }

    if (currentPressedKey === "Backspace") {
      currentPressedKey = "AC";
    }
    handleValueEvent(currentPressedKey);
  }
});

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.addEventListener("click", function () {
    const value = button.textContent;
    handleValueEvent(value);
  });
}
function handleValueEvent(value) {
  switch (value) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":

    // Handle all number buttons
    
      if (currentInput === "0" || justEvaluated) {
        currentInput = value;
        justEvaluated = false;
      } else {
        currentInput = `${currentInput}${value}`;
      }
      updateDisplay();

      break;
    case ".":
      if (!currentInput.includes(".")) {
        currentInput += value;
        updateDisplay();
      }
      break;
    case "+":
    case "-":
    case "/":
    case "*":
      updateDisplay();
      calculateOrReassign(value);
      break;

    case "AC":
      previousInput = "";
      currentInput = "0";
      operator = "";
      updateDisplay();
      break;

    case "%":
      currentInput = String(parseFloat(currentInput) / 100);
      updateDisplay();
      break;

    case "+/-":
      currentInput = String(-parseFloat(currentInput)).toString();
      updateDisplay();
      break;

    case "=":
      if (!currentInput || !previousInput || !operator) {
        return;
      }
      calculate();
      updateDisplay();
      previousInput = "";
      operator = "";
      justEvaluated = true;

      break;
  }
}

function calculateOrReassign(value) {
  if (operator && previousInput) {
    calculate();
  }
  operator = value === "x" ? "*" : value;
  previousInput = currentInput;
  currentInput = "0";
}

function calculate() {
  try {
    const result = eval(
      `${parseFloat(previousInput)}${operator}${parseFloat(currentInput)}`
    );
    currentInput = String(Math.round(result * 1e10) / 1e10);
  } catch (e) {
    currentInput = "error";
  }
}

function updateDisplay() {
  display.value = currentInput;
}
