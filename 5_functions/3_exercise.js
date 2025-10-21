// write a function that accepts a stirng as a parameter and counts the 
// numbers of vowels(:aeiou) within the string
function vowelCount(str){
    let count = 0;
    const vowels = "aeiou";
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        //console.log(str[i]);
        const currentLetter = str[i];
        if(vowels.indexOf(currentLetter) != -1){
            count++;
        }
    }
    return count;
}
console.log(vowelCount("brown Apple"));
