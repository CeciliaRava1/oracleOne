let secretNumber = generateSecretNumber();
let numberOfAttempts = 5;

function assignTextToElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

assignTextToElement('h1', 'Guess the number');
assignTextToElement('.paragraph', 'Enter a number between 1-10');

function generateSecretNumber() {
    return Math.round(Math.random() * 10 + 1);
}

function cleanInput() {
    document.querySelector('.container_input').value = '';
}

cleanInput();

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










