import { getNextToken, interpretToken, moveOneStep, runToEnd } from "./calculator";

describe("calculator", () => {
  describe("getNextToken", () => {
    it("should return the entire string as token if there is no space in it", () => {
      expect(getNextToken("123").token).toEqual("123");
    });
    
    it("should return the head of the string up to the next space", () => {
      expect(getNextToken("456 789").token).toEqual("456");
    });
  
    it("should return and empty string as the remainder when there is no space in the input", () => {
      expect(getNextToken("234").remainder).toEqual("");
    })
  
    it("should return the remainder of the string as the remainder when there is a space between tokens in the input", () => {
      expect(getNextToken("678 90").remainder).toEqual("90")
    })
  
    //TODO error handling:
    // two spaces in the string
    // space at start of string
    // tab instead of space / other whitespace chars?
    // blank string
  
  })

  describe("interpretToken", () => {
    it("should parse numbers to number and push them onto the stack given", () => {
      expect(interpretToken("123", [])).toEqual([123]);
      expect(interpretToken("345", [])).toEqual([345]);
      expect(interpretToken("567", [123, 456])).toEqual([123, 456, 567]);
    })

    it("should parse the + operator, pop 2 numbers off the stack and push the result of addition", () => {
      expect(interpretToken("+", [12, 34])).toEqual([46]);
      expect(interpretToken("+", [12, 34, 56])).toEqual([12, 90]);
    })

    it("should parse the - operator, pop 2 numbers off the stack and push the result of subtraction", () => {
      expect(interpretToken("-", [123, 45])).toEqual([78]);
      expect(interpretToken("-", [12, 50, 30])).toEqual([12, 20]);
    })

    it("should parse the * operator, pop 2 numbers off the stack and push the result of multiplication", () => {
      expect(interpretToken("*", [98, 76])).toEqual([7448]);
      expect(interpretToken("*", [12, 34, 56])).toEqual([12, 1904]);
    })

    it("should parse the / operator, pop 2 numbers off the stack, and push the result of division", () => {
      expect(interpretToken("/", [12, 3])).toEqual([4]);
      expect(interpretToken("/", [12, 35, 7])).toEqual([12, 5]);
    })

    //TODO
    // test floats
    // what if not enough numbers are on the stack?
    // what if it's not a known operator / number?
  })

  describe("move 1 step", () => {
    it("adds a number to the stack", () => {
      expect(moveOneStep({input: "123", stack: []})).toEqual({input: "", stack: [123]})
      expect(moveOneStep({input: "34", stack: [12]})).toEqual({input: "", stack: [12, 34]})
    })

    it("adds two numbers together", () => {
      expect(moveOneStep({input: "+", stack: [1, 4]})).toEqual({input: "", stack: [5]})
    })

    it("pulls just the first part of the input", () => {
      expect(moveOneStep({input: "12 34 +", stack: []})).toEqual({input: "34 +", stack: [12]})
    })
  })

  describe("runToEnd", () => {
    it("runs the calculation until there is no more to interpret and returns the result", () => {
      expect(runToEnd("1 2 +")).toEqual([3]);
      expect(runToEnd("1 2 + 3 4 + * 5 * 6 +")).toEqual([111]);
    })

    //TODO how do we get just a single result (when that's appropriate)
  })
})
