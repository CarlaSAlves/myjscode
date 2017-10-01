/* for (var i = 0; i < 10; i++) {
    console.log('this is value for i: ' + i);
    for (var j = 20; j < 35; j++) {
        console.log('inside the second loop. i =' + i + ' j =' + j);
        
    } 
} */

let input = 'Turpentine and turtles'; 
//array whith vowels for the whale language;
let vowels =['a','e','i','o','u'];
//when we find a vowel in the input string we have to store, var resultArray 
let resultArray = [];

//Create a for loop to compere the input vriable's text io the vowels array; the goal is to find all vowels in the input string;
for (let inputIndex = 0; inputIndex < 4; inputIndex ++) {
    console.log(inputIndex);
  for (let j = 0; j < vowels.length; j ++) {
   console.log('the result: ' + input[inputIndex]);
      

  }
};