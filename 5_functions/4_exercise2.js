/*
write a function that accepts a string as a parameter
and finds the longest word within the string
 */

function findLongestWord(str){
    textArray = str.split(" ");
    //console.log(textArray);
    let longestWord;
    let longestWordLength = 0;

    for(let word of textArray){
        if(word.length > longestWordLength){
            longestWord = word;
            longestWordLength = word.length;
        }
    }
    return longestWord === undefined ? "string is empty": longestWord;
    
}

text = "I love JavaScript and Python";
//textArray = text.split(" ");
//console.log(textArray);

console.log(findLongestWord(text));
