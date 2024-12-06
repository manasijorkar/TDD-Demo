import {StringCalculator} from "../src/stringCalculator";

describe("StringCalculator", () => {

    let calculator: StringCalculator;
  
    beforeEach(()=>{
      calculator = new StringCalculator();
    });
  
    it("should return 0 for empty string", ()=>{
      expect(calculator.add("")).toBe(0);
    });

    it("should return number itself for single number", ()=>{
      expect(calculator.add("1")).toBe(1);
    });

    it("should return the sum of any numbers", ()=>{
      expect(calculator.add("1,2,3,4,5")).toBe(15);
    });

    it("should return the sum of numbers even in new lines between numbers", ()=>{
      expect(calculator.add("1\n2,3")).toBe(6);
    });

    it("should support different delimiters", ()=>{
      expect(calculator.add("//;\n1;2")).toBe(3);
    });
});