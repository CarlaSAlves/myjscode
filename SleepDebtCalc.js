//The function return a number of actual sleep hours each night.
const getSleepHours = day => {
  let sleepHours;
  switch (day) {
    case 'Sunday':
      sleepHours = 8;
      break;
    case 'Monday':
      sleepHours = 6;
      break;
    case 'Tuesday':
      sleepHours = 8;
      break;
    case 'Wednesday':
      sleepHours = 10;
      break;
    case 'Thursday':
      sleepHours = 8;
      break;
    case 'Friday':
      sleepHours = 5;
      break;
    case 'Saturday':
      sleepHours = 8;
      break;
  }
  return sleepHours;
};

//The function returns the total sleep hours that the user actually slept.
const getActualSleepHours = () => {

  return getSleepHours('Sunday') + getSleepHours('Monday') + getSleepHours('Tuesday')
    + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday')
    + getSleepHours('Saturday');

};

// The function returns the ideal sleep hours that the user prefers
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7
};

//Function to calculate the sleep debt; the amount of hours the user is ouver or under their ideal sleep
let calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const numberSleepHours = actualSleepHours - idealSleepHours

  if (actualSleepHours === idealSleepHours) {
    console.log('Congratulations! you have the perfect amount of sleep.');
    console.log('You should have sleep = ' + numberSleepHours);
  } else if (actualSleepHours > idealSleepHours) {
    console.log('Lazy! You got more sleep than you need.');
    console.log('You should have sleep = ' + numberSleepHours);
  } else {
    console.log('Poor guy! You should get more rest.');
    console.log('You should have sleep = ' + numberSleepHours);
  }
};

calculateSleepDebt();
