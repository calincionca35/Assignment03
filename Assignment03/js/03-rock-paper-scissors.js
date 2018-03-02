/*eslint-env browser*/
//3. The Rock, Paper, Scissors Game

var plChoice = window.prompt("Choose between: rock, paper, scissors");
var compChoice = Math.random();

if (compChoice <= 0.33) {
    compChoice === "rock";
} else if (compChoice <= 0.66) {
    compChoice === "scissors";
} else {
    compChoice === "paper";
}

function compare(choice1, choice2) {
    "use strict";
    if (choice1 === "rock") {
        if (choice2 === "paper") {
            window.alert("paper wins");
        }
    } else if (choice2 === "scissors") {
        window.alert("rock wins");
    }
    
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            window.alert("paper wins");
        }
    } else if (choice2 === "scissors") {
        window.alert("scissors wins");
    }
    
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            window.alert("rock wins");
        }
    } else if (choice2 === "paper") {
        window.alert("scissors wins");
    }
}

window.alert(compare(plChoice, compChoice));