#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const functions_js_1 = require("./functions.js");
const node_banner_1 = __importDefault(require("node-banner"));
const gradient_string_1 = __importDefault(require("gradient-string"));
let answers = [
    {
        name: "operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus ( a % b )", "Exponentiation ( b^n )"],
        message: gradient_string_1.default.cristal("Choose operation: ")
    },
    {
        name: "num1",
        type: "number",
        message: gradient_string_1.default.vice("Enter first number: "),
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter number: ";
            }
            return true;
        }
    },
    {
        name: "num2",
        type: "number",
        message: gradient_string_1.default.vice("Enter second number: "),
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter number: ";
            }
            return true;
        }
    },
];
let ans = [
    {
        name: "again",
        type: "confirm",
        message: gradient_string_1.default.morning("Do you want to calculate again?")
    }
];
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, node_banner_1.default)("Calculator", 'This calculator can perform addition, subtraction, multiplication, division, modulus and exponentiation operation.', "red", "cyan");
}))();
setTimeout(() => {
    console.log(gradient_string_1.default.passion(`    _____________________
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
function calculator() {
    return __awaiter(this, void 0, void 0, function* () {
        let condition = true;
        while (condition) {
            let { operation, num1, num2 } = yield inquirer_1.default.prompt(answers);
            switch (operation) {
                case "Addition":
                    console.log((0, functions_js_1.sum)(num1, num2));
                    break;
                case "Subtraction":
                    console.log((0, functions_js_1.subtract)(num1, num2));
                    break;
                case "Multiplication":
                    console.log((0, functions_js_1.multily)(num1, num2));
                    break;
                case "Division":
                    console.log((0, functions_js_1.divide)(num1, num2));
                    break;
                case "Modulus ( a % b )":
                    console.log((0, functions_js_1.remainder)(num1, num2));
                    break;
                case "Exponentiation ( b^n )":
                    console.log((0, functions_js_1.power)(num1, num2));
                    break;
            }
            let { again } = yield inquirer_1.default.prompt(ans);
            condition = again;
        }
    });
}
setTimeout(() => {
    calculator();
}, 1000);
