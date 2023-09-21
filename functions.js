"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.power = exports.remainder = exports.divide = exports.multily = exports.subtract = exports.sum = void 0;
function sum(a, b) {
    let resultMessage = `${a} + ${b} = ${a + b}`;
    return resultMessage;
}
exports.sum = sum;
function subtract(a, b) {
    let resultMessage = `${a} - ${b} = ${a - b}`;
    return resultMessage;
}
exports.subtract = subtract;
function multily(a, b) {
    let resultMessage = `${a} x ${b} = ${a * b}`;
    return resultMessage;
}
exports.multily = multily;
function divide(a, b) {
    let resultMessage = `${a} / ${b} = ${a / b}`;
    return resultMessage;
}
exports.divide = divide;
function remainder(a, b) {
    let resultMessage = `${a} % ${b} = ${a % b}`;
    return resultMessage;
}
exports.remainder = remainder;
function power(a, b) {
    let resultMessage = `${a} ^ ${b} = ${a ** b}`;
    return resultMessage;
}
exports.power = power;
