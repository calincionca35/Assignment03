/*eslint-env browser*/
//4. The Basic Calculator

var num1 = Number(window.prompt("Enter first number"));
var num2 = Number(window.prompt("Enter second number"));
var operation = window.prompt("Select one of the folowing operations: + - * /");

function calculate(num1, num2, operation) {
    "use strict";
    if ((operation !== "+") || (operation !== "-") || (operation !== "*") || (operation !== "/")) {
        window.prompt("Select one of the folowing operations: + - * /");
    } else {
        switch ((operation === "+") || (operation === "-") || (operation === "*") || (operation === "/")) {
        case (operation === "+"):
            window.alert(num1 + num2);
            break;
        case (operation === "-"):
            window.alert(num1 - num2);
            break;
        case (operation === "*"):
            window.alert(num1 * num2);
            break;
        case (operation === "/"):
            window.alert(num1 / num2);
            break;
        }
    }
}
calculate(2, 2, "+");