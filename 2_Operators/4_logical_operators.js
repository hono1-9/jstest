/*
*/

console.log(true || true);
console.log(false && false);

const age = 16;
const passDMVExam = true;
const getDriverLice = age >= 16 && passDMVExam;
console.log(getDriverLice);

console.log(!getDriverLice);

//provide a default value if the operand before the ?? is false
// return the right hand side value if the left hand value is null or undefined

let user = null;
const username = user ?? 'default user';
const dummyUsername = (user !== null & user !== undefined) ? user : 'deafault user';
console.log(`username: ${username}`);
