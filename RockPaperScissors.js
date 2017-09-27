const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase()

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } 
    console.log('Not a valid option!!');
};

//new function who gerate a number between 0 and 2  
let getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    }
    if (randomNumber === 1) {
        return 'paper';
    }
    return 'scissors';
};

//function to declare a Winner
let determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The Game is Tie!';
    }
    if (userChoice === 'rock' && computerChoice === 'paper' 
        || userChoice === 'paper' && computerChoice === 'scissors'
        || userChoice === 'scissors' && computerChoice === 'rock') {
        return 'Computer won!';
    }
    return 'You won';
}

const playGame = (playerChoice) => {
    const userChoice = getUserChoice(playerChoice);
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame('scissors');
playGame('rock');
playGame('paper');