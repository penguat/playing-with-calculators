import { runToEnd } from "./calculator";

const textInput = document.getElementById("calculation") as HTMLInputElement;
const result = document.getElementById("result") as HTMLElement;

textInput.addEventListener("input", () => {
    const calculationResult = runToEnd(textInput.value);
    result.innerText = JSON.stringify(calculationResult);
})