let current = "";
let previous = "";
let operation = "";

// Callback functions
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => b === 0 ? "Error" : a / b;

// Main callback calculator
function calculate(n1, n2, callback){
    return callback(n1, n2);
}

function append(value){
    current += value;
    updateDisplay();
}

function operate(op){
    previous = current;
    current = "";
    operation = op;
}

function calculateResult(){
    let num1 = parseFloat(previous);
    let num2 = parseFloat(current);
    let result;

    switch(operation){
        case '+':
            result = calculate(num1, num2, add);
            break;
        case '-':
            result = calculate(num1, num2, subtract);
            break;
        case '*':
            result = calculate(num1, num2, multiply);
            break;
        case '/':
            result = calculate(num1, num2, divide);
            break;
    }

    current = result.toString();
    updateDisplay();
}

function clearDisplay(){
    current = "";
    previous = "";
    updateDisplay();
}

function backspace(){
    current = current.slice(0,-1);
    updateDisplay();
}

function updateDisplay(){
    document.getElementById("display").textContent = current || "0";
}