export class StringCalculator{   
    public add(numbers: string): number{

        console.log("input numbers string start:" + numbers + "input numbers string end");

        if(numbers === "") return 0;

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

        if(numbers.includes(",")){
            let delimiterRegex = new RegExp("[,\n]+");
            let sum = this.addition(numbers,delimiterRegex);
            console.log("sum: ", sum);
            return sum;
        }

        if (!numbers.includes(",")){
            const num = parseInt(numbers);
            if(isNaN(num)) return 0;
            return num;
        }

        return 0;
    }

    public addition(numbers: string,delimiter: RegExp): number{
        const numArray = numbers.split(delimiter);
        let sum = 0;
        for (let i = 0; i < numArray.length; i++){  
            const num = parseInt(numArray[i]);
            if(!isNaN(num)){
                sum += num;
            }     
        }    
        return sum;
    }
}