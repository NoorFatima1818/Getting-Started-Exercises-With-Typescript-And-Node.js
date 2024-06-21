"use strict";
// array of magicians
let magicians = ["David Copperfield", "Penn Jillette", "Teller", "Criss Angel", "Dynamo"];
// passing array to function 
function show_magicians(magicians) {
    magicians.forEach((magic) => {
        console.log(magic);
    });
}
show_magicians(magicians);
magicians.push("Noor");
show_magicians(magicians);
