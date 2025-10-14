/*
falsy values in JS
-false , 0, " ", '', null, undefined, NaN 
*/
// || operators return the first truly value
console.log(false || "Bronco" || "CPP"); // Bronco
console.log(false || 11 | 12); // 11

// && operators return the first falsy value
// if all values are truthy, then return the last truthy value
console.log("Cal Poly" && 0); // 0
console.log(1 && "CPP" && -10); // -10

// ! not
console.log(!("Bronco")); // false
