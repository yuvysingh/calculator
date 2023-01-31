const digits = document.querySelectorAll(".digits"); // list of digit elements

const curOperandElem = document.getElementById("current-operand"); // current Operand element
let curOperand = []; // list of current Operand elements
const PrevOperandElem = document.getElementById("previous-operand");

const equalButton = document.getElementById("equal");
// equal element

const operations = document.querySelectorAll(".operation"); // list of operation element
const operationStrings = ["-", "+", "*", "/"]; // list of operations

const clearButton = document.getElementById("clear");

const delButton = document.getElementById("delete");
// if current Operand is empty then - is allowed and nothing else
//
function addOperation(element) {
  let text = element.innerText;
  if (curOperand.length == 0) {
  } else if (operationStrings.includes(curOperand[curOperand.length - 1])) {
    if (text == "-") {
      if (curOperand[curOperand.length - 1] == "+") {
        curOperand.pop();
        curOperand.push(text);
        curOperandElem.innerText = curOperand.join("");
      } else if (curOperand[curOperand.length - 1] == "-") {
        curOperand.pop();
        curOperand.push("+");
        curOperandElem.innerText = curOperand.join("");
      } else {
        curOperand.push(text);
        curOperandElem.innerText = curOperand.join("");
      }
    } else {
      curOperand.pop();
      curOperand.push(text);
      curOperandElem.innerText = curOperand.join("");
    }
  } else {
    curOperand.push(text);
    curOperandElem.innerText = curOperand.join("");
  }
}

// checks if an operation has been clicked
// when it is clicked it runs addOperation
operations.forEach((element) => {
  element.addEventListener("click", function () {
    addOperation(element);
  });
});

// adds the digit clicked to the current Operand
function addDigit(element) {
  curOperand.push(element.innerText);
  curOperandElem.innerText = curOperand.join("");
}
// checks if an digit has been clicked
// when it is clicked it runs addDigit
digits.forEach((element) => {
  element.addEventListener("click", function () {
    addDigit(element);
  });
});

// adds to previous operand
// returns the value of the current operation to current operand
function Result() {
  PrevOperandElem.innerText = curOperandElem.innerText;
  curOperandElem.innerText = eval(curOperandElem.innerText);
  curOperand = curOperandElem.innerText.toString().split("");
}
equalButton.addEventListener("click", function () {
  Result();
});

function clear() {
  curOperandElem.innerText = "";
  curOperand = [];
  PrevOperandElem.innerText = "";
}
clearButton.addEventListener("click", function () {
  clear();
});

function Del() {
  curOperand.pop();
  curOperandElem.innerText = curOperand.join("");
}
delButton.addEventListener("click", function () {
  Del();
});

// this code sucks ^^
