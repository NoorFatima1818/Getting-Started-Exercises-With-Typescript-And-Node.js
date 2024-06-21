// array of magicians
 let magicians : string[] = ["David Copperfield", "Penn Jillette", "Teller", "Criss Angel", "Dynamo"];

// passing array to function 
function show_magicians(magicians: string[] ):void{

    magicians.forEach((magic)=>{
    console.log(magic)
})
    
}

show_magicians(magicians);
 

 