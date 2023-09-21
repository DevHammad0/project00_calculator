#! /usr/bin/env node

import inquirer from "inquirer";
import { sum, subtract, divide, multily, remainder, power } from "./functions.js";
import showBanner from "node-banner";
import banner from "node-banner";
import gradient, { rainbow } from "gradient-string";


let answers = [

    {
        name: "operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus ( a % b )", "Exponentiation ( b^n )"],
        message: gradient.cristal("Choose operation: ")
    },
    {
        name: "num1",
        type: "number",
        message: gradient.vice("Enter first number: "),
        validate: (input: number) => {
            if (isNaN(input)) {
                return "Please enter number: "
            }
            return true
        }
    },
    {
        name: "num2",
        type: "number",
        message: gradient.vice("Enter second number: "),
        validate: (input: number) => {
            if (isNaN(input)) {
                return "Please enter number: "
            }
            return true
        }
    },
];

let ans = [
    {
        name: "again",
        type: "confirm",
        message: gradient.morning("Do you want to calculate again?")
    }
];

(async () => {
    await showBanner("Calculator", 'This calculator can perform addition, subtraction, multiplication, division, modulus and exponentiation operation.',"red","cyan");
})();


setTimeout(() => {
   console.log(gradient.passion(`    _____________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   | | enter | % | | ^ | |
   |_|_______|___|_|___|_|
   `));
}, 500);



async function calculator() {
    let condition = true;
    while (condition) {
        let { operation, num1, num2 } = await inquirer.prompt(answers);

        switch (operation) {
            case "Addition":
                console.log(sum(num1, num2));
                break;
            case "Subtraction":
                console.log(subtract(num1, num2));
                break;
            case "Multiplication":
                console.log(multily(num1, num2));
                break;
            case "Division":
                console.log(divide(num1, num2));
                break;
            case "Modulus ( a % b )":
                console.log(remainder(num1, num2));
                break;
            case "Exponentiation ( b^n )":
                console.log(power(num1, num2));
                break;
        }
        let { again } = await inquirer.prompt(ans);
        condition = again;
    }
}

setTimeout(() => {
    calculator();
}, 1000);



