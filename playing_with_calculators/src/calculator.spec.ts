import { getNextToken } from "./calculator";

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
})
