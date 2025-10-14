let text1 = "Cal Poly Pomona";
console.log(`my school is ${text1}`);

console.log(text1[0]) // first letter will appear
//console.log(text1[]); // last character will appear

const textSize = text1.length;
console.log(textSize - 1);
console.log(text1[text1.length - 1]);

console.log(text1.slice(1));
console.log(text1.slice(0));

console.log(text1.substring(4, 8));

console.log(text1.toUpperCase())
console.log(text1.toLocaleLowerCase())

let course = "javAscript";

let courseNameFormatted = course[0].toUpperCase() + course.slice(1).toLocaleLowerCase();
console.log(courseNameFormatted);