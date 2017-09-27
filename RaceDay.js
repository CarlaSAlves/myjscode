let raceNumber = Math.floor(Math.random()*1000);
//viraable that indicates whether a runner registered earlier or not
let early = 'Before 12 a.m.'
// control flow statement that checks if the runner did not register early. And add 1000 to the race number
let timeRegister = true;
if (early === true)
{
}else {
  raceNumber += 1000;
  };
console.log (raceNumber)
// variable for a runners age 
let runnerAge = 21 ;
//Control flow statment for people over 18 who registered early. for people over 18 who register later and for people under 18 who register later 
if (runnerAge <= 18 && timeRegister === true){
  raceNumber -= 1000
  console.log ('The race starts at 9:30 am. And your number race is: ' + raceNumber + '.')
} else if (timeRegister === false || runnerAge > 18 ) { 
  console.log ('The race stats at 11:00 am. And your number race is:  ' + raceNumber)
} else if (timeRegister === false && runnerAge <= 18) {
  consle.log ( 'The race starts at 12:30 pm. And your number race is: '+ raceNumber + '.')
} else {
  console.log ('Please go to the registration desk.')
}