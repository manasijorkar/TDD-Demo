export class StringCalculator{   
    public add(numbers: string): number{

        console.log("input numbers string start:" + numbers + "input numbers string end");
        console.log("numbersLength: ", numbers.length);

        if(numbers === "") return 0;

        if (numbers.length === 1){
            const num = parseInt(numbers);
            if(isNaN(num)) return 0;
            return num;
        }

        if(numbers.startsWith("//")){
            const [delimiterPart, fetchedNumbers] = numbers.split("\n", 2);
            let delimiter = delimiterPart.slice(2);
            console.log("delimiter: ", delimiter);
            console.log("fetchedNumbers: ", fetchedNumbers);
            let delimiterRegex = new RegExp(delimiter);
            let sum = this.addition(fetchedNumbers,delimiterRegex);
            console.log("sum: ", sum);
            return sum;
        }
    
        let delimiterRegex = new RegExp("[,\n]+");
        let sum = this.addition(numbers,delimiterRegex);
        console.log("sum: ", sum);
        return sum; 
    }

    public addition(numbers: string,delimiter: RegExp): number{
        const numArray = numbers.split(delimiter);
        let sum = 0;
        let negativeNumbers = [];
        for (let i = 0; i < numArray.length; i++){  
            const num = parseInt(numArray[i]);
            if(num < 0) negativeNumbers.push(num);
            if(!isNaN(num)){
                sum += num;
            }     
        } 
        if(negativeNumbers.length > 0) throw new Error("Negative numbers are not allowed: " + negativeNumbers);   
        return sum;
    }
}