const numberToGuess = Math.round(Math.random() * (10 - 1) + 1);
let numberOfAttempts = 5;
let correctInput = false;
let playerGuess = false;
let inputNumber = 0;

while (correctInput != true) {

    while (numberOfAttempts > 0) {

        let inputNumber = prompt("Enter a number between 1-10","0");

        if (inputNumber >= 1 && inputNumber <= 10) {
            correctInput = true;
            numberOfAttempts -= 1;
        } else {
            alert('Your input is not between 1-10. Try again');
        }

        if (inputNumber == numberToGuess) {
            alert(`You guess! :) The number is ${numberToGuess}`);
            playerGuess = true;
            break;
        } else if (inputNumber > numberToGuess) {
            alert('Number to guess is smaller. Try again');
        } else if (inputNumber < numberToGuess) {
            alert('Number to guess is higher. Try again');
        }
    }

    if (numberOfAttempts == 0 && playerGuess == false) {
        alert('You do not have more attempts. You lost');
    }

}


