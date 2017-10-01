let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

//Method to remove the last sting
var last = secretMessage.pop();
console.log(last);
//Method to add words 'to' and 'program' as a separeted stings
secretMessage.push('to' ,'program');
//change the word 'easily' to 'right'
secretMessage [6] = 'right';
//Method to remove the first sting of the array
secretMessage.shift();
//MEthod to add the sting 'Programming' to the beginning of the array.
secretMessage.unshift('Programming');
// Remove the stings 'get',right,the,first,time and replace them with the string 'know'.
//.splice(indexToStart, numberOfIndices, "stringToAdd")
secretMessage.splice (5,5, 'know,');
//Log the messege using .join() method to print the array as a sentence
let message = secretMessage.join(' ');
console.log(message);