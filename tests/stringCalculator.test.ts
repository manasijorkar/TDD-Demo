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

});