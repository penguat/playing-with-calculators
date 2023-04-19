export const getNextToken = (input: string) => {
  const splitAt = input.indexOf(" ");
  if (splitAt === -1) {
    return {
      token: input,
      remainder: ""
    }
  }
  return {
    token: input.substring(0, splitAt),
    remainder: input.substring(splitAt + 1)
  }
}

export const interpretToken = (token: string, stack: Array<number>) :Array<number> => {
  const newStack = stack.slice();
  
  switch (token) {
    case "+":
      newStack.push((newStack.pop() || 0) + (newStack.pop() || 0))
    break;
    case "-":
      const number2 = newStack.pop() || 0;
      // pop takes the last number from the array, so number2 is the second number in sequence between these
      const number1 = newStack.pop() || 0;
      newStack.push(number1 - number2)
    break;
    case "*":
      newStack.push((newStack.pop() || 1) * (newStack.pop() || 1))
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
}

export type iteration = {
  input: string,
  stack: Array<number>
}

export const moveOneStep = (iteration: iteration): iteration => {
  let step = getNextToken(iteration.input)
  let stack = interpretToken(step.token, iteration.stack);
  return {input: step.remainder, stack}
}

export const runToEnd = (input: string) => {
  return runRemainder({input: input, stack: []});
};

const runRemainder = (iteration: iteration): Array<number> => {
  if (iteration.input === "")
    return iteration.stack;
  
  const next = moveOneStep(iteration);
  return runRemainder(next);
}