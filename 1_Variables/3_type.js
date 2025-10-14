// 1. string
let fname = 'Bronco';
let lname = 'CPP';
let fullName = `${fname} ${lname}`;
console.log(fullName);
console.log(typeof fname);

// 2.number
let evenNumber = 10;
let pi = 3.14;
console.log(typeof pi);

// 3.boolean
let hasTicket = true;
let passExam = false;
console.log(typeof passExam);

// 4. undefind
let index;
console.log(typeof index);

// 5.null
let idx = null;
console.log(typeof idx);

// 6.symbol
const secretKey = Symbol();
console.log(secretKey);

// objects
let userCustomizedChoice = "customized username"
let cppCourse = {
    "name": 'CS 2250',
    'hours': 3,
    semester: 2025, // "", ''なしでもstringとしてみなす
    [userCustomizedChoice]: "User name",
    "school name": "Cal Poly Pomona",
}

// access object's key's value
console.log(cppCourse.name);
console.log(cppCourse['hours']);
console.log(cppCourse.hours);
console.log(cppCourse[userCustomizedChoice]);
console.log(cppCourse.userCustomizedChoice); // undefinded

// modify the key's value
cppCourse.name = "Web Development"; // rename
cppCourse["school name"] = "CPP";

// adding new key-value pair
cppCourse["location"] = "Pomona CA";
cppCourse["Location"] = "CA, USA";
console.log(cppCourse);

// delete a key-value pair
delete cppCourse["Location"];
console.log(cppCourse);