export class StringCalculator{   
    add(numbers: string): number{

        if(numbers === "") return 0;

        if (!numbers.includes(",")){
            const num = parseInt(numbers);
            if(isNaN(num)) return 0;
            return num;
        } 

        if(numbers.includes(",")){
            const numArray = numbers.split(",");
            let sum = 0;
            for (let i = 0; i < numArray.length; i++){  
                const num = parseInt(numArray[i]);
                if(!isNaN(num)){
                    sum += num;
                }     
            }
            return sum;
        }

        return 0;
    }
}