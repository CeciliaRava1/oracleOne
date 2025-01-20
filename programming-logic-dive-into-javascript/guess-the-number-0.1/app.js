let secretNumber;
let numberOfAttempts;
let secretNumbers = [];

newGame();

function assignTextToElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

function generateSecretNumber() {
    notRepeated = false;
    while (notRepeated == false && secretNumbers.length < 10) {
        secretNumber = Math.round(Math.random() * 10);
        console.log(secretNumber);
        if (secretNumbers.includes(secretNumber)) {
            console.log('repeated number');
        } else {
            notRepeated = true;
            secretNumbers.push(secretNumber);
        }
    }
    console.log(secretNumbers);
}

function cleanInput() {
    document.querySelector('.container_input').value = '';
}

function newGame() {
    cleanInput();
    generateSecretNumber();
    assignTextToElement('h1', 'Guess the number');
    assignTextToElement('.paragraph', 'Enter a number between 1-10');
    numberOfAttempts = 5;
}

function verifyAttempt() {
    let playerGuess = false;
   
    while (numberOfAttempts > 0 && !playerGuess) {
        let userAttempt = parseInt(document.querySelector('.container_input').value);

        if (userAttempt >= 1 && userAttempt <= 10) {
            numberOfAttempts -= 1;

            if (userAttempt == secretNumber) {
                assignTextToElement('.paragraph', `You guessed it! :) The number is ${secretNumber}`);
                playerGuess = true;
                break;
            } else if (userAttempt > secretNumber) {
                assignTextToElement('.paragraph', 'The number is smaller. Try again.');
                cleanInput();
                break;
            } else if (userAttempt < secretNumber) {
                assignTextToElement('.paragraph', 'The number is higher. Try again.');
                cleanInput();
                break;
            }
        } else {
            assignTextToElement('.paragraph', 'Your input is not between 1-10. Try again.');
            cleanInput();
            break;
        }

        if (numberOfAttempts == 0 && !playerGuess) {
            assignTextToElement('.paragraph', 'You do not have more attempts. You lost.');
            cleanInput();
        }
    }
}










