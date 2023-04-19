(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runToEnd = exports.moveOneStep = exports.interpretToken = exports.getNextToken = void 0;
const getNextToken = (input) => {
    const splitAt = input.indexOf(" ");
    if (splitAt === -1) {
        return {
            token: input,
            remainder: ""
        };
    }
    return {
        token: input.substring(0, splitAt),
        remainder: input.substring(splitAt + 1)
    };
};
exports.getNextToken = getNextToken;
const interpretToken = (token, stack) => {
    const newStack = stack.slice();
    switch (token) {
        case "+":
            newStack.push((newStack.pop() || 0) + (newStack.pop() || 0));
            break;
        case "-":
            const number2 = newStack.pop() || 0;
            // pop takes the last number from the array, so number2 is the second number in sequence between these
            const number1 = newStack.pop() || 0;
            newStack.push(number1 - number2);
            break;
        case "*":
            newStack.push((newStack.pop() || 1) * (newStack.pop() || 1));
            break;
        case "/":
            const denominator = newStack.pop() || 0;
            const numerator = newStack.pop() || 0;
            newStack.push(numerator / denominator);
            break;
        default:
            newStack.push(Number(token));
    }
    return newStack;
};
exports.interpretToken = interpretToken;
const moveOneStep = (iteration) => {
    let step = (0, exports.getNextToken)(iteration.input);
    let stack = (0, exports.interpretToken)(step.token, iteration.stack);
    return { input: step.remainder, stack };
};
exports.moveOneStep = moveOneStep;
const runToEnd = (input) => {
    return runRemainder({ input: input, stack: [] });
};
exports.runToEnd = runToEnd;
const runRemainder = (iteration) => {
    if (iteration.input === "")
        return iteration.stack;
    const next = (0, exports.moveOneStep)(iteration);
    return runRemainder(next);
};

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
const textInput = document.getElementById("calculation");
const runOneStepButton = document.getElementById("one-step");
const runSlowlyButton = document.getElementById("slowly");
const stack = document.getElementById("stack");
const remainingInput = document.getElementById("input");
const result = document.getElementById("result");
let iteration;
textInput.addEventListener("input", () => {
    const calculationResult = (0, calculator_1.runToEnd)(textInput.value);
    result.innerText = JSON.stringify(calculationResult);
    iteration = { input: textInput.value, stack: [] };
});
const runStep = () => {
    iteration = (0, calculator_1.moveOneStep)(iteration);
    stack.innerText = JSON.stringify(iteration.stack);
    remainingInput.innerText = iteration.input;
};
runOneStepButton.addEventListener("click", () => {
    runStep();
});
runSlowlyButton.addEventListener("click", () => {
    const delayStep = () => {
        runStep();
        if (iteration.input.length > 0) {
            setTimeout(delayStep, 1500);
        }
    };
    delayStep();
});

},{"./calculator":1}]},{},[2]);
