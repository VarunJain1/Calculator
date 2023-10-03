var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var op1 = 0;
var op2 = null;
var operator = null;
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "+") {
      operator = "+";
      op1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == "-") {
      operator = "-";
      op1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == "*") {
      operator = "*";
      op1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == "/") {
      operator = "/";
      op1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == "%") {
      operator = "%";
      op1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == "AC") {
      op1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == "=") {
      op2 = parseFloat(display.textContent);
      var result = eval(op1 + " " + operator + " " + op2);
      display.innerText = result;
    } else {
      display.innerText += value;
    }
  });
}
