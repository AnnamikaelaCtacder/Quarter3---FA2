function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero.";
}

function modulus(a, b) {
    return (a / 100) * b; // If you meant percentage calculation, otherwise use `a % b` for modulo
}

function displayResult(resultText) {
    document.getElementById("result").textContent = resultText;
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.querySelector('input[name="operator"]:checked').value;

    let resultText;
    let result;
  
    if (isNaN(num1) || isNaN(num2)) {
        resultText = "Please enter valid numbers.";
    } else {
        switch (operator) {
            case "+":
                result = add(num1, num2);
                resultText = `The sum of ${num1} and ${num2} is ${result}.`;
                break;
            case "-":
                result = subtract(num1, num2);
                resultText = `The difference of ${num1} and ${num2} is ${result}.`;
                break;
            case "*":
                result = multiply(num1, num2);
                resultText = `The product of ${num1} and ${num2} is ${result}.`;
                break;
            case "/":
                result = divide(num1, num2);
                resultText = `The quotient of ${num1} and ${num2} is ${result}.`;
                break;
            case "%":
                result = modulus(num1, num2);
                resultText = `The remainder of ${num1} and ${num2} is ${result}.`;
                break;
            default:
                resultText = "Invalid operation.";
        }
    }

    displayResult(resultText);
}
