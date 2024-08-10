export function Add(numbers) {
    if (numbers === "") return 0;
    
    // delimiter with comma or newline and  handle multiple numbers with comma separated or \n
    let delimiter = /,|\n/;

    let nums = numbers.split(delimiter);
    let sum = 0;
    for(let i=0; i < nums.length; i++ ){
        let num = parseInt(nums[i])
        if(!isNaN(num)){
            sum = sum + num
        }
    }
    return sum
}