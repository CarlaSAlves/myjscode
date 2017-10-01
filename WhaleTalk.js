//create a variable "imput" equal the sentence you wont translate to the whale lenguage; 
let input = 'Turpentine and turtles';
//array whith vowels for the whale language;
let vowels = ['a', 'e', 'i', 'o', 'u'];
//when we find a vowel in the input string we have to store, var resultArray 
let resultArray = [];
//Create a for loop to compere the input vriable's text io the vowels array; the goal is to find all vowels in the input string;
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++)
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        };
    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);

    }
};
console.log(resultArray.join('').toUpperCase());