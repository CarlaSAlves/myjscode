let userName = '';
//Ternay Operator who decides what to do if the user enters a name or not.
userName ? console.log('Hello, ' + userName + '.') : console.log('Hello');
//the value of a variable should be the question the user wants to ask the Magic Eight Ball.
userQuestion = 'tomorrow will raining';
//create a varaiable randomNumber 
//Math.random() method - returns a random number between 0 (included) and 1 (excluded)
//Math.floor() method - rounds the number down to the nearest whole number
// multiply per 7
let randomNumber = Math.floor(Math.random() * 7); 
//Create random number and assigns eigthBall to replay that a 8 Ball would retun. Uses switch to select the phrases in a variable (?)
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
     eightBall = 'It is decidedly so';
    break;
  case 3:
    eightBall = 'Reply hazy try again';
    break;
  case 4:
     eightBall = 'Cannot predict now';
  case 5: 
     eightBall = 'Do not count on it';
    break;
  case 6:
     eightBall = 'My sources say no';
    break;
  case 7:
     eightBall = 'Signs point to yes';
             }

 //Console.log to print: userQuestion; user's name; Magic Ball answer
console.log (userQuestion);
console.log (userName);
console.log (eightBall);