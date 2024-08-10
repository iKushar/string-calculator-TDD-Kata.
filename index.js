export function Add(numbers) {
    if (numbers === "") return 0;
    
    // delimiter with comma or newline and  handle multiple numbers with comma separated or \n
    let delimiter = /,|\n/;

    //handle custom and any length delimiters
    if (numbers.startsWith("//")) {
        const delimiterEnd = numbers.indexOf("\n");
        delimiter = numbers.substring(2, delimiterEnd);
        delimiter = new RegExp(delimiter);
        numbers = numbers.substring(delimiterEnd + 1);
    }

    let nums = numbers.split(delimiter);
    let sum = 0;
    let negatives = []
    for(let i=0; i < nums.length; i++ ){
        let num = parseInt(nums[i])
        if(!isNaN(num) && num <= 1000){
            if(num < 0){
                negatives.push(num)
            }else{
                sum = sum + num
            }
            
        }
    }
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }
    return sum
}