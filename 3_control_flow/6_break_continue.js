const numbers = [12, 13, 14, 15, 16];

for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] >= 15){
        break;
    }
    console.log(numbers[index]);
}