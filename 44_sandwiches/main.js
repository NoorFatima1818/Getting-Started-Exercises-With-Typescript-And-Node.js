"use strict";
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time */
Object.defineProperty(exports, "__esModule", { value: true });
function sandwich(...items) {
    if (items.length === 0) {
        console.log("No item is selected for the sandwich.");
    }
    else {
        console.log(`Here we have the order of sandwich with yummy filling of: ${items}.`);
    }
    console.log("\n");
}
// calling function with different number
sandwich("lettuce", "tomamto", "cucumber");
sandwich("Ham", "Avocado", "Mushroom", "Onion");
sandwich();
