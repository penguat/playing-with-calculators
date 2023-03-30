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
    default: 
    newStack.push(Number(token));
  }

  return newStack;
}