// 1 function declaration
function saySomething(){
    console.log("I love js");
}

function saySomething2(){
    return "I love js";
}

function saySomething3(name="CSS"){
    return `I love ${name}`;
}

saySomething();
console.log(saySomething2());
console.log(saySomething3("HTML"));
console.log(saySomething3());

// 2 function expression
const total = function (num1, num2){
    return num1 + num2;
}
console.log(total(10, 40));
