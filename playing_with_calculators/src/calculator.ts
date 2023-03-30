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