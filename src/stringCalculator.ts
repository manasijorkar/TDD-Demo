export class StringCalculator{   
    add(numbers: string): number{

        if(numbers === "") return 0;

        if (!numbers.includes(",")){
            const num = parseInt(numbers);
            if(isNaN(num)) return 0;
            return num;
        } 

        return 0;
    }
}