import c from "chalk";
// Equality With Strings
console.log(c.blueBright("Tests For Equality And Inequality With Strings:"));
console.log("Typescript" == "Typescript"); // true
//console.log("Typescript" == "typescript")  // false
// Using lower case function
console.log(c.blueBright("Tests Using The Lower Case Function:"));
console.log("javascript" == "javascript".toLowerCase());
console.log("Python" == "Python".toLowerCase());
// Numerical tests
console.log(c.blueBright("Numerical Tests:"));
console.log(6 === 6); // true
console.log(8 !== 8); // false
console.log(20 > 11); // true
console.log(375 > 467); // false
console.log(111 >= 111); // true
console.log(245 <= 100); // false
// AND and OR operators
console.log(c.blueBright("Tests Using 'AND' And 'OR' Operators:"));
console.log(true || false); // true
console.log(true && false); // false
console.log(true || false || false || false || false); // true
console.log(true && false && true && true && true); // false
console.log(23 < 45 && 45 > 39 && 89 > 88 && 56 < 78 && 78 == 78); // true
console.log(23 < 45 && 45 < 39 && 89 > 88 && 56 < 78 && 78 == 78); // false
console.log(28 > 29 || 78 < 76 || 88 > 99 || 65 === 65 || 0 > 34); // true
console.log(28 > 29 || 78 < 76 || 88 > 99 || 65 > 65 || 0 > 34); // false
// Testing whether the item is in array
console.log(c.blueBright("Test Whether An Item Is In Array:"));
let even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
console.log(even.includes(16)); // true
console.log(even.includes(20)); // false
// Testing whether the item is not in array
console.log(c.blueBright("Test Whether An Item Is Not In Array:"));
let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(!odd.includes(20)); // true
console.log(!odd.includes(5)); // false
