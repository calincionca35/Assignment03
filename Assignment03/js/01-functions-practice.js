/*eslint-env browser*/
//1. Practice with Functions

//STEP 1
function halfNumber(num1) {
    "use strict";
    var half = num1 / 2;
    window.console.log("Half of " + num1 + " is " + half);
    return half;
}
halfNumber(5);

//STEP 2
function squareNumber(num2) {
    "use strict";
    var sqr = num2 * num2;
    window.console.log("The result of squaring the number " + num2 + " is " + sqr);
    return sqr;
}
squareNumber(3);

//STEP 3
function percentOf(num3, num4) {
    "use strict";
    var perc = num3 / num4 * 100;
    window.console.log(num3 + " is " + perc + "% of " + num4);
    return perc;
}
percentOf(2, 4);

//STEP 4
function findModulus(num5, num6) {
    "use strict";
    var mod = num6 % num5;
    window.console.log(mod + " is the modulus of " + num5 + " and " + num6);
    return mod;
}
findModulus(4, 10);

//STEP 5
function sum(numbers) {
    "use strict";
    var i, base = Number(numbers);
    for (i = 1; i < arguments.length; i += 1) {
        base += Number(arguments[i]);
    }
    window.console.log(base);
}
sum(3, 4, 55, 62, 73);