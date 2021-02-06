const operations = document.querySelector("#operator");
const calculate = document.querySelector("#calculate");
const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");

let operation = "";
let result = 0;
let operationNumber = 0;

const getOperation = () => {
  operation = operations.options[operations.selectedIndex].text;
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

const test = () => {
  getOperation();
  result = parseInt(firstNumber.value);
  operationNumber = parseInt(secondNumber.value);
  result = calculateResult(operation);
  console.log();
  firstNumber.value = result;
};

const start = () => {
  //   operations.addEventListener("change", getOperation);
  calculate.addEventListener("click", test);
};

document.addEventListener("DOMContentLoaded", start);
