"use strict";
/* Pizzas: Think of at least three kinds of your favorite pizza.
Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
 For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

*/
Object.defineProperty(exports, "__esModule", { value: true });
let pizzas = ["Cheese pizza", "BBQ chicken pizza", "Pepperoni pizza"];
// printing name of each pizza
pizzas.forEach((pizza) => {
    console.log(pizza);
});
// printing line about each pizza 
console.log("\n There is a little mouthwatering things about each pizza.");
pizzas.forEach((pizza) => {
    switch (pizza) {
        case "Cheese pizza":
            console.log(`I really love ${pizza}. It's simple yet delicious with a rich layer of melted cheese.`);
            break;
        case "BBQ chicken pizza":
            console.log(`I can not say no to ${pizza}. The smoky BBQ sauce and tender chicken make it irresistible.`);
            break;
        case "Pepperoni pizza":
            console.log(` Here comes ${pizza}. The spicy pepperoni slices add a great kick to every bite.`);
            break;
    }
});
// Add a detailed final statement outside the loop
console.log("\nPizza is one of my favorite foods because of the endless variety of flavors and combinations. Whether it's the simplicity of cheese, the bold taste of BBQ chicken, or the spicy kick of pepperoni,there's always a pizza to match my cravings. I really love pizza!");
