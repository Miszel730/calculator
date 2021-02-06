const operations = document.querySelector("#operator");
const calculate = document.querySelector("#calculate");
const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const decimalSelect = document.querySelector("#decimals");
const doRound = document.querySelector("#doround");

let operation = "";
let result = 0;
let operationNumber = 0;
let decimalValue = "";
let isRounded = doRound.checked;

const getOperation = (select) => {
  if (select === "operations") {
    operation = operations.options[operations.selectedIndex].text;
  } else if (select === "decimal") {
    decimalValue = decimalSelect.options[decimalSelect.selectedIndex].text;
  } else {
    console.log("Wrong operation provided");
  }
};
const checkIsRounded = () => {
  isRounded = doRound.checked;
  getOperation("decimal");
};

const calculateResult = (value) => {
  switch (value) {
    case "+":
      return (result += operationNumber);
    case "-":
      return (result -= operationNumber);
    case "*":
      return (result *= operationNumber);
    case "/":
      return (result /= operationNumber);
    default:
      console.log("2137");
      break;
  }
};

const doMath = () => {
  getOperation("operations");
  result = parseFloat(firstNumber.value);
  operationNumber = parseFloat(secondNumber.value);
  result = calculateResult(operation);
  if (isRounded === true) {
    result = result.toFixed(parseInt(decimalValue));
  }
  firstNumber.value = result;
};

const start = () => {
  calculate.addEventListener("click", doMath);
  doRound.addEventListener("click", checkIsRounded);
  decimalSelect.addEventListener("change", () => {
    getOperation("decimal");
  });
};

document.addEventListener("DOMContentLoaded", start);
