function add() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  document.getElementById("demo").innerHTML =
    "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2);
}

function subtract() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  document.getElementById("demo").innerHTML =
    "The difference of " + num1 + " and " + num2 + " is " + (num1 - num2);
}

function multiply() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  document.getElementById("demo").innerHTML =
    "The product of " + num1 + " and " + num2 + " is " + (num1 * num2);
}

function divide() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  if (num2 === 0) {
    document.getElementById("demo").innerHTML = "Cannot divide by zero!";
    return;
  }

  document.getElementById("demo").innerHTML =
    "The quotient of " + num1 + " and " + num2 + " is " + (num1 / num2);
}

function remainder() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  if (num2 === 0) {
    document.getElementById("demo").innerHTML = "Cannot divide by zero!";
    return;
  }

  document.getElementById("demo").innerHTML =
    "The remainder of " + num1 + " divided by " + num2 + " is " + (num1 % num2);
}
