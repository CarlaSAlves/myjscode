//This is a constant that stores today's temperature in kelvin
const kelvin = prompt('What is the Kelvin temperature today?');

//Converting kelvin to celsius and storing the value in new variable
let celsius = kelvin - 273;

//Converting celsisu to fahrenheit using formula and storing in new variable and rouding number
let fahrenheit = Math.floor(celsius * (9/5) + 32);

//logging to console the value of fahrenheit variable
console.log("The temperature is " + fahrenheit + " degrees fahrenheit");