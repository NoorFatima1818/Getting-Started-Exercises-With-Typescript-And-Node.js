
let ordinal_numbers : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// loop through array
ordinal_numbers.forEach((numbers) => {

    let suffix : string;

// if else chain to determine the correct suffix for numbers
    if(numbers === 1){
        
        suffix = "st";
        

    } else if (numbers === 2){

        suffix = "nd";

    } else if(numbers === 3){

        suffix = "rd";

    }
    else {
        suffix = "th"
    }
        console.log(`${numbers}${suffix}`)
    
})