import { iteration, runToEnd, moveOneStep } from "./calculator";

const textInput = document.getElementById("calculation") as HTMLInputElement;
const runOneStepButton = document.getElementById("one-step") as HTMLElement;
const runSlowlyButton = document.getElementById("slowly") as HTMLElement;


const stack = document.getElementById("stack") as HTMLElement;
const remainingInput = document.getElementById("input") as HTMLElement;
const result = document.getElementById("result") as HTMLElement;

let iteration: iteration;

textInput.addEventListener("input", () => {
    const calculationResult = runToEnd(textInput.value);
    result.innerText = JSON.stringify(calculationResult);

    iteration = {input: textInput.value, stack: []};
})

const runStep = () => {
    iteration = moveOneStep(iteration);
    stack.innerText = JSON.stringify(iteration.stack);
    remainingInput.innerText = iteration.input; 
}

runOneStepButton.addEventListener("click", () => {
    runStep()
})

runSlowlyButton.addEventListener("click", () => {
    const delayStep = () => {
        runStep();
        if (iteration.input.length > 0) {
            setTimeout(delayStep, 1500)
        }
    }
    delayStep()
})