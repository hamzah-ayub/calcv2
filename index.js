#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
inquirer_1.default
    .prompt([
    {
        type: 'input',
        name: 'num1',
        message: 'Enter the first number:',
        validate: function (value) { return !isNaN(parseFloat(value)) || 'Please enter a valid number'; },
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Select operation:',
        choices: ['+', '-', '*', '/'],
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter the second number:',
        validate: function (value) { return !isNaN(parseFloat(value)) || 'Please enter a valid number'; },
    },
])
    .then(function (answers) {
    var n1 = parseFloat(answers.num1);
    var n2 = parseFloat(answers.num2);
    var result;
    switch (answers.operation) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                console.log('Error: Division by zero');
                return;
            }
            result = n1 / n2;
            break;
        default:
            console.log('Invalid operation');
            return;
    }
    console.log("Result: ".concat(result));
})
    .catch(function (error) {
    console.log('Error:', error.message);
});
