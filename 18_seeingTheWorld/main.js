"use strict";
// Question:18  Seeing the World: Think of at least five places in the world you’d like to visit.
Object.defineProperty(exports, "__esModule", { value: true });
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let dream = ["Denmark", "Turkey", "Saudia Arabia", "Japan", "China", "Switzerland", "Australia", "France", "Angolia", "Norway"];
// • Print your array in its original order.
console.log("Original order:", dream);
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", [...dream].sort());
// • Show that your array is still in its original order by printing it.
console.log("Original order confirmed:", dream);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", [...dream].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("Original order confirmed again:", dream);
// • Reverse the order of your list. Print the array to show that its order has changed.
dream.reverse();
console.log("Reversed Order:", dream);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
dream.reverse();
console.log("Original Order restored:", dream);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
dream.sort();
console.log("Alphabetical order restored:", dream);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has chaned
dream.reverse();
console.log("Reversed alphabetical order restored:", dream);
